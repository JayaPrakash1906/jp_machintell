const con = require('../db');
const viewvendorunitdocumentModel = () => {
    return new Promise((resolve, reject) => {
        con.query("SELECT * FROM document", (error, result) => {
            if (error) {
                reject(error);
            } 
            else 
            {
                resolve(result);
            }
        });
    });
};
module.exports = viewvendorunitdocumentModel;
