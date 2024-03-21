const con = require('../db');
const deletemanfunitdocumentModel = (id) => 
{
    return new Promise((resolve, reject)=>{
        con.query("DELETE FROM manfdocument WHERE flcps_uid = ?", [id], 
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
        )
    })
}

module.exports = deletemanfunitdocumentModel;