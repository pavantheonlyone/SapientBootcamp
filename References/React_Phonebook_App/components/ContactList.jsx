import React from 'react';
import ContactCard from './ContactCard';
// this will be a stateless component
export default function (props) {
    let output=props.data.map((c,index)=><ContactCard key={index} 
    data={c} deleteContact={props.deleteContact} editContact={props.editContact}
    />);
    //  console.log('render')
    return (
       
        <div className="row">
            {output}
            {/* <h3>Contact list will be here shortly</h3> */}
            {/* <p>There are {props.data.length} contacts</p> */}
        </div>
    );
}