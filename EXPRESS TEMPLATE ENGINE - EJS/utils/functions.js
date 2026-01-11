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

module.exports = {loadData, findData}
