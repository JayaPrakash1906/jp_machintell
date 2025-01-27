const con = require('../db');
const deletevendorunitdocumentModel = (id) => 
{
    return new Promise((resolve, reject)=>{
        con.query("DELETE FROM document WHERE flcps_uid = ?", [id], 
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

module.exports = deletevendorunitdocumentModel;