const getAllContacts = require('./services/array-contact-service').getAllContacts;
const getContactById = require('./services/array-contact-service').getContactById;
const createNewContact = require('./services/array-contact-service').createNewContact;
const deleteContact = require('./services/array-contact-service').deleteContact;


// console.log(getAllContacts());

// const contacts = getAllContacts(pageNum = 3, pageSize = 3, sortBy = 'firstname', sortOrder = 'asc');
// console.log('/////////////////////contacts////////////////');
// console.log(contacts);

let con = {
    id: 0,
    hobbies: 'Gaming',
    firstname: 'John',
    lastname: 'Cena',
    email: 'Youcantcme@wwe.com',
    phone: '9876543210',
    city: 'Massechusets'
}

const newContacts = createNewContact(con);
//    console.log(newContacts);

// const contactforid = getContactById(id=55);
// console.log(contactforid);

const delContact = deleteContact(4);
console.log(delContact);