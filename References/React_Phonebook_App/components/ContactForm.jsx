import React, { Component } from 'react';
import ContactCard from './ContactCard';
var baseUrl = 'http://localhost:4000/contacts/';
class ContactForm extends Component {
    //  static getDerivedStateFromProps(props,state)
    //  {
    //      if(props.parentDetails!==state)
    //         {
    //             state=props.parentDetails;
    //         }
    //         return props.parentDetails;
    //  }
    componentDidUpdate(prevProps) {
        if (prevProps.parentDetails !== this.props.parentDetails) {
            //Perform some operation here
            this.setState(this.props.parentDetails);
            // this.classMethod();
        }
    }
    state = {
        gender: 'Female',
        city: 'Bangalore',
        state: 'Karnataka',
        country: 'India',
        picture: '/assests/images/profilepic.jpeg'
        
    }
    tfChangeHandler = (evt) => {
        console.log()
        let { name, value } = evt.target;
        this.setState({ [name]: value });
    }
    submitHandler = (evt) => {
        //evt is the event object corresponding to the submit event
        //fired when (1)clicked the submit button
        //2 pressed enter key on any input elements
        evt.preventDefault();
        //||( this.props.parentDetails.id !== this.state.id)) {
            //console.log('if part');
            this.props.addContact({ ...this.state });
            this.setState({//to create a copy
                firstname: '', lastname: '', email: '', phone: '', address: '',
                city: 'Bangalore', state: 'Karnataka', country: 'India',
                picture: 'http://www.pareekrishtey.com/profiles/default-female.png'

            })
        
       

        
        //Do not send or submit to remote or http server 
    }
    resetter=(evt)=>{
        evt.preventDefault();
        this.setState({//to create a copy
                firstname: '', lastname: '', email: '', phone: '', address: '',
                city: '', state: '', country: '',
                picture: ''

            })
        
    }
    render() {
       // console.log('in contact form', this.props.parentDetails)

        //console.log('after',contacts);
        return (
            <div>
                <h5 className="text-centre">Add/Update contact details</h5>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <label>
                            <input type="radio" name="gender" id="gender"
                                checked={this.state.gender === 'Male'}
                                value="Male"
                                onChange={this.tfChangeHandler} /> &nbsp;Male
                        </label>
                        <label>
                            <input type="radio" name="gender" id="gender"
                                checked={this.state.gender === 'Female'}
                                value="Female"
                                onChange={this.tfChangeHandler} />&nbsp;Female
                        </label>
                    </div>
                    <div>
                        <label htmlFor="firstname">FirstName</label>
                        <input type="text" id="firstname" autofocus
                            value={this.state.firstname}
                            onChange={this.tfChangeHandler} className="form-control"
                            name="firstname" />
                    </div>

                    <div>
                        <label htmlFor="lastname">lastname</label>
                        <input type="text" id="lastname"
                            value={this.state.lastname}
                            onChange={this.tfChangeHandler} className="form-control"
                            name="lastname" />
                    </div>

                    <div>
                        <label htmlFor="phone">Phone number</label>
                        <input type="tel" id="phone" autofocus
                            value={this.state.phone}
                            onChange={this.tfChangeHandler} className="form-control"
                            name="phone" />
                    </div>

                    <div>
                        <label htmlFor="email">email-address</label>
                        <input type="email" id="email" autofocus
                            value={this.state.email}
                            onChange={this.tfChangeHandler} className="form-control"
                            name="email" />
                    </div>

                    <div>
                        <label htmlFor="dob">Date of Birth</label>
                        <input type="date" id="dob" autofocus
                            value={this.state.dob}
                            onChange={this.tfChangeHandler} className="form-control"
                            name="dob" />
                    </div>

                    <div>
                        <label htmlFor="address">address</label>
                        <input type="text" id="address" autofocus
                            value={this.state.address}
                            onChange={this.tfChangeHandler} className="form-control"
                            name="address" />
                    </div>

                    <div>
                        <label htmlFor="city">city</label>
                        <input type="text" id="city" autofocus
                            value={this.state.city}
                            onChange={this.tfChangeHandler} className="form-control"
                            name="city" />
                    </div>

                    <div>
                        <label htmlFor="state">state</label>
                        <input type="text" id="state" autofocus
                            value={this.state.state}
                            onChange={this.tfChangeHandler} className="form-control"
                            name="state" />
                    </div>

                    <div>
                        <label htmlFor="country">country</label>
                        <input type="text" id="country" autofocus
                            value={this.state.country}
                            onChange={this.tfChangeHandler} className="form-control"
                            name="country" />
                    </div>

                    <div>
                        <label htmlFor="picture">picture(URL)</label>
                        <input type="text" id="picture" autofocus
                            value={this.state.picture}
                            onChange={this.tfChangeHandler} className="form-control"
                            name="picture" />
                    </div>
                    <button  onClick={this.submitHandler} className="btn btn-primary">Save Changes</button>
                      <button  onClick={this.resetter} className="btn btn-primary">Reset</button>
                    {JSON.stringify(this.state)}
                </form>



                {/* <div className="col">
                        <ContactCard data={this.state.contacts}
                           editContact={this.editContact}
                             />

                    </div>  */}
            </div>
        );
    }
}

export default ContactForm;