// module: services/file-contact-service.js
const fs = require('fs');
const path = require('path');

const filename = path.join(__dirname, 'contacts.json');

const requiredFields = ['firstname', 'email', 'phone', 'city'];
let data = [];
if (fs.existsSync(filename)) {
    data = JSON.parse(fs.readFileSync(filename, 'utf-8'));
}

class ContactService {
    constructor() {

    }

    getContactById(id, callbackFn) {
        if (!callbackFn || typeof callbackFn !== 'function') {
            throw new Error('callbackFn was not supplied or was not a function');
        }
        setTimeout(() => {
            // console.log(id);
            let index = data.findIndex(c => c.id === id);
            console.log(index);
            if (index === -1) {
                let err = { code: 1005, message: 'index does not exist for entered id' };
                callbackFn(err);
                return;
            }
            else {
                callbackFn(null, { ...data[index] });
                return;
            }
        }, 0);
    }
    deleteContact(id, callbackFn) {
        if (!callbackFn || typeof callbackFn !== 'function') {
            throw new Error('callbackFn was not supplied or was not a function');
        }
        setTimeout(() => {
            let index = data.findIndex(c => c.id === id);
            console.log('index = ', index);
            if (index === -1) {
                let err = { code: 1005, message: 'index does not exist for entered id' };
                callbackFn(err);
                return;
            }
            else {
                let cont = data.splice(index, 1);
                callbackFn(null, cont);
                return;
            }

        }, 0);
    }
    updateContact(contact, callbackFn) {
        //required fields and id field as well
        if (!callbackFn || typeof callbackFn !== 'function') {
            throw new Error('callbackFn was not supplied or was not a function');
        }
        setTimeout(()=>{
            // console.log(contact.id);
            if (!contact || typeof contact !== 'object') {
                let err = { code: 1001, message: 'Contact was not supplied or was not an object!' };
                callbackFn(err);            // first arg to the callback is an error
                return;
            }
            const missingFields = [];
            requiredFields.forEach(f => {
                if (!(f in contact)) {
                    missingFields.push(f);
                }
            });
            if (missingFields.length) {
                let err = { code: 1002, message: 'required Fields ' + missingFields.join(', ') + ' missing' };
                callbackFn(err);
                return;
            }

            let id = contact.id;
            let index = data.findIndex(c=> c.id === id);
            data[index]=contact;
            // console.log(tempData);
    
            callbackFn(null,{...data[index]});
            // console.log(tempData);
            
            return;
        },0);
        
    }

    //Patching as in actual update and not replacement

    // let index = data.findIndex(c=> c.id ===contact.id);
    // if(index!==-1){
    //     let tempContact = data[index];
    //     data[index]={...tempContact,...contact};
    // }

    // Asynchronous
    getAllContacts(options, callbackFn) {
        if (!callbackFn || typeof callbackFn !== 'function') {
            throw new Error('callbackFn was not supplied or was not a function');
        }

        setTimeout(() => {
            let {
                pageNum = 1,
                pageSize = 10,
                sortBy = 'id',
                sortOrder = 'asc' } = options;


            let begin = (pageNum - 1) * pageSize;
            let end = begin + pageSize;
            let newData = data.slice(begin, end);

            callbackFn(null, newData);
            return;
        }, 0);

    }


    // Synchronous
    addNewContact(contact, callbackFn) {
        if (!callbackFn || typeof callbackFn !== 'function') {
            throw new Error('callbackFn was not supplied or was not a function');
        }

        // to make out function as asynchronous from this point forward,
        // we use the setTimeout, builtin asynchronopus function with a
        // delay of 0
        setTimeout(() => {
            if (!contact || typeof contact !== 'object') {
                let err = { code: 1001, message: 'Contact was not supplied or was not an object!' };
                callbackFn(err);            // first arg to the callback is an error
                return;
            }
            const missingFields = [];
            requiredFields.forEach(f => {
                if (!(f in contact)) {
                    missingFields.push(f);
                }
            });
            if (missingFields.length) {
                let err = { code: 1002, message: 'required Fields ' + missingFields.join(', ') + ' missing' };
                callbackFn(err);
                return;
            }

            // generate the id
            if (data.length === 0) {
                contact.id = 1;
            }
            else {
                contact.id = Math.max(...data.map(c => c.id)) + 1;
            }

            // push the data
            data.push(contact);

            // write data to the file
            fs.writeFile(filename, JSON.stringify(data), (err) => {
                // if (err) throw err;
                if (err) {
                    callbackFn(err);
                    return;
                }
                callbackFn(null, { ...contact });
            });
        }, 0);
    }
}


module.exports = new ContactService();