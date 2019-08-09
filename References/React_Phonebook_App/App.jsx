import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import { AppHeader} from './components/AppHeader';
//react must be imported if you r using JSX
import AppHeader from './components/AppHeader';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
//import ContactCard from './components/ContactCard';
import 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
var baseUrl = 'http://localhost:4000/api/contacts/';
// function fetchContacts() {
//     fetch(baseUrl) //fetch is a java script native function (built function) //return value of this is promise
//         .then(resp => resp.json()) //resp.json() returns a promise if the promise is resolved then data will be printed 
//         // .then(data => console.log(data))
//         .catch(err => console.log('there is some error: ', err));
//     //console.log(data);
// }
//temporary call
// fetchContacts();
class App extends Component//=function() //App is a component and it should be pascal case
{
    state = { contacts: [], contactss: undefined }
    constructor() {
        super();
        this.deleteContact = this.deleteContact.bind(this);
    }

    addContact = (contact) => {
        if (!contact.id) {

            const options = {
                method: 'POST',
                body: JSON.stringify(contact),
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            fetch(baseUrl, options)
                .then(resp => resp.json())
                .then(data => {
                    let contacts = [data, ...this.state.contacts];
                    this.setState({ contacts });
                });
        }
        else {
            const options = {
                method: 'PUT',
                body: JSON.stringify(contact),
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            fetch(baseUrl + contact.id, options)
                .then(resp => resp.json())
                .then(data => {
                    for (let i = 0; i < this.state.contacts.length; i++) {
                        if (contact.id === this.state.contacts[i].id)
                            this.state.contacts[i] = contact;
                    }
                    //let contacts = [data, ...this.state.contacts];
                    this.setState(this.state.contacts);
                });

        }

    }







    //to add contact
    // addContact = (contact, id) => {
    //     //console.log('add contact');
    //     if (id === -1) {
    //         //console.log(id);
    //         const options = {
    //             method: 'POST',
    //             body: JSON.stringify(contact),
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             }
    //         };
    //         //console.log('before fetch');
    //         fetch(baseUrl, options)
    //         //console.log('after fectyh');
    //             .then(resp => resp.json())
    //             .then(data => {
    //                 //console.log(data);
    //                 // for(var i=0;i<10;i++){
    //                 let contacts = [data, ...this.state.contacts];
    //                 this.setState({ contacts });//}
    //             })
    //     }
    //     else {
    //         const options = {
    //             method: 'PUT',
    //             body: JSON.stringify(contact),
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             }
    //         };
    //         fetch(baseUrl+id, options)
    //             .then(resp => resp.json())
    //             .then(data => {

    //                // console.log(contact);
    //                 this.setState( contact );//}
    //             });

    //     }


    // }
    editContact = (contactss) => {
        // console.log(data);
        // let contacts=[data,...this.state.contacts];
        //this.state.contactss = data;
        //let contactss = this.state.contactss;
        //console.log('contacts with barces',{contactss})
        console.log('contacts', contactss);
        this.setState({ contactss });



    }
    updateContact = (data) => {
        console.log('updated');

    }
    //delete contact function
    deleteContact(id) {
        //intentionally written as regular function
        //must be bound with the current oject(instanceof App)
        //Refer the constructor
        fetch(baseUrl + id, { method: 'DELETE' })
            .then(() => {
                const contacts = [...this.state.contacts];//shallow copy(obj is diff but individual are pointing to same)
                const index = contacts.findIndex(c => c._id === id);
                contacts.splice(index, 1);
                this.setState({ contacts });

            })
            //the following must be done after successfully deleting from the
            //REST endpoint(To be done later)
            .catch(err => console.error(err));
        // let contacts=this.state;

    }

    render() {
        return <div>
            <AppHeader title="phonebook app" />
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <ContactForm addContact={this.addContact} parentDetails={this.state.contactss} updateContact
                            ={this.updateContact} />
                    </div>
                    <div className="col">
                        <ContactList data={this.state.contacts}
                            editContact={this.editContact}
                            deleteContact={this.deleteContact} />

                    </div>
                </div>

            </div>;
        </div>
    }
    componentDidMount() {
        //this is a lifecyle fucntion of a stateful component
        //which gets executed after the component is mounted on the UI
        //after the first render which generally is used for making
        //ajax calls to get data and call the setState method
        //console.log('componentdidmount');
        fetch(baseUrl)
            .then(resp => resp.json())
            .then(data => {
                data.sort((c1, c2) => c2.id - c1.id);
                this.setState({ contacts: data })
            })
            .catch(err => console.log(err));
    }
}
//displaying the component to ui is rendering
ReactDOM.render(<App />, document.getElementById('root'));
//component created using function is called stateless component
//component created using class is called stateful component