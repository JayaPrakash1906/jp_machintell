const con = require('../db');
const deletedesignunitdocumentModel = (id) => 
{
    return new Promise((resolve, reject)=>{
        con.query("DELETE FROM designdocument WHERE flcps_uid = ?", [id], 
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

module.exports = deletedesignunitdocumentModel;