const con = require('../db');
const addmanfunitdocumentModel = (flcps_document, flcps_uid, flcps_availability, flcps_filelocation) => {
    return new Promise((resolve, reject) => {
        con.query("INSERT INTO manfdocument(flcps_document, flcps_uid, flcps_availability, flcps_filelocation) VALUES(?, ?, ?, ?)", 
        [flcps_document, flcps_uid, flcps_availability, flcps_filelocation],
        (error, result) => {
            if (error) {
                console.error(error);
                reject(error);
            }
            else 
            {
                console.log(result);
                resolve(result);
            }
        }
        );    
    })
}
module.exports = addmanfunitdocumentModel;