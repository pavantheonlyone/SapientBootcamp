const { getContactById } = require('./services/mongo-contact-service');
const { addNewContact } = require('./services/mongo-contact-service');
const { deleteContact } = require('./services/mongo-contact-service');
const { updateContact } = require('./services/mongo-contact-service');
const {getAllContacts} = require('./services/mongo-contact-service');

const id = '5d2efae99b1b7c68840fbe86';

// getContactById(id)
//     .then(data => console.log(data))
//     .catch(err => console.log('error --> ', err));




let options = {
    pageNum : 1,
    pageSize : 10,
    sortBy : '_id',
    sortOrder : 'asc'
} 

const c1 = {
    "firstname": "Pavan",
    "lastname": "Raj",
    "email": "pavan@pavan.co",
    "gender": "male",
    "phone": "8861480618",
    "address": "Judicial layout",
    "city": "Bangalore",
    "state": "Karnataka",
    "country": "India",
    "dob": "7/11/1997"
};

// addNewContact(c1)
//     .then(id => console.log(id))
//     .catch(err => console.log(err));


// deleteContact(id)
//     .then(id => console.log(id))
//     .catch(err => console.log(err));

// updateContact(c1)
//     .then(id => console.log(id))
//     .catch(err => console.log(err));

getAllContacts(sortBy= 'firstname', sortOrder='asc')
    .then(id => console.log(id))
    .catch(err => console.log(err));