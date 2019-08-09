// the name of this module relative to Day07 folder is:
// './services/array-contact-service' OR
// './services/array-contact-srvice/index'

const data = require('../../data');
const service = {};
service.updateContact = () => { console.error('updateContact not implemented yet'); }
service.deleteContact = (id=1) => {
    // id must be a number
    // if id is found, then delete the corresponding contact from data 
    // else throw an error indicating the id is invalid
    console.log(typeof id)
    // if (id !== 'number') {
    //     throw new Error('Id must be a number');
    // }
    const newData = data.slice(3, 6);
    console.log(newData);
    let index = newData.findIndex(c => c.id === id);
    newData.splice(index, 1);
     return newData;
}

service.createNewContact = (contact) => {

    requiredFields = ['firstname', 'phone', 'email', 'city'];
    missedFields = [];
    requiredFields.forEach(field => {
        if (!(field in contact)) {
            missedFields.push(field);
        }
    });
    if (missedFields.length !== 0) {
        throw new Error(`You missed require fields ${missedFields}`);
    }
    console.log(missedFields.length);
    // console.log(contact);
    let maxIndex = Math.max(...data.map(c => c.id));
    // console.log(maxIndex);
    contact.id = maxIndex + 1
    const newData = data.slice(3, 6);
    let copyData = [...newData];
    let resData = [...copyData, contact];
    return resData;
    // console.log(resData);

}
// required fields



service.getAllContacts = (pageNum = 1, pageSize = 10, sortBy = 'id', sortOrder = 'asc') => {
    if (typeof pageNum !== 'number' || pageNum <= 0) {
        throw new Error('pageNum must be a number >=1');
        // throw is strong it moves the cursor out of function so no need of else or break
    }
    if (typeof pageSize !== 'number' || pageSize <= 0) {
        throw new Error('pageSize must be a number >= 1');
    }
    const begin = (pageNum - 1) * pageSize;
    const end = begin + pageSize;
    const newData = data.slice(begin, end);
    // console.log(sortBy);

    if (!Object.keys(data[0]).includes(sortBy)) {
        throw new Error('The entered property does not exist in data');
    }

    if (sortOrder === 'asc') {
        newData.sort((a, b) => a[sortBy] > b[sortBy] ? 1 : -1);
    }
    else if (sortOrder === 'desc') {
        newData.sort((a, b) => a[sortBy] > b[sortBy] ? -1 : 1);
    }
    else
        throw new Error('Enter vaid sort Order [asc/desc]');


    // const begin = (pageNum - 1) * pageSize;
    // const end = begin + pageSize;
    // const newData = data.slice(begin, end);
    return newData;
}
service.getContactById = (id) => {
    if (typeof id !== 'number') {
        throw new Error('Id must be a number');
    }
    const index = data.findIndex(c => c.id === id);
    if (index === -1) {
        return null;
    }
    return { ...data[index] };
}


module.exports = service;