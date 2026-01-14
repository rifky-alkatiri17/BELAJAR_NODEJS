// berisi function2
const fs = require('fs');

const loadData = (path)=>{
    const dataBuffer = fs.readFileSync(path,{encoding:'utf-8'});
    const data  = JSON.parse(dataBuffer);
    return data
};

const findData = (array, search)=>{
    const dataFilter = array.filter(element => {
       return element.nama.toLowerCase().includes( search.toLowerCase() ) 
    });
    return dataFilter
}

const addContact = (obj) =>{
    let dataBuffer = fs.readFileSync('data/data-contacts.json', 'utf-8'); //string
    let data = JSON.parse(dataBuffer);
    data.push(obj);
    fs.writeFileSync('data/data-contacts.json', JSON.stringify(data));
}

module.exports = {loadData, findData, addContact}
