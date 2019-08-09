import React, { Component } from 'react';
import "./ContactCard.css"
//import { Col, Container, Row, Footer } from 'mdbreact';
//a stateful component is a class that must inherit from React.Component
//class,and must overrider a method called render
class ContactCard extends Component {

    render() {

        let { data} = this.props;//object destructuring
        return (
            <div className="col-md-4 col-sm-6">
                <div className="card" >
                    <img src={data.picture} className="card-img-top" alt={data.firstName} />
                    <div className="card-body">
                        <h5 className="card-title">{data.firstname} {data.lastname}
                        <button
                        onClick={()=>{
                           // if(window.confirm('Are u sure to delete this?'))
                            this.props.deleteContact(data._id);
                        }} 
                        className="btn btn-link text-danger pull-right">&times;</button>
                         <button
                        onClick={()=>{
                           // if(window.confirm('Are u sure to delete this?'))
                            this.props.editContact(data);
                        }} 
                        className="btn btn-link text-danger pull-right">Edit</button>
                        
                        </h5>
                        <p >{data.email}</p>
                        <p> {data.phone}</p>
                        {/*  <a href="/" className="btn btn-primary">Go somewhere</a> */}
                    </div>
                </div>
            </div>
        );
    }

}
export default ContactCard;