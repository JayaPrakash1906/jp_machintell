const con = require('../db');
const deletequalunitteamModel = (id) => 
{
    return new Promise((resolve, reject)=>{
        con.query("DELETE FROM qualityteam WHERE flcps_employee_id = ?", [id], 
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

module.exports = deletequalunitteamModel;
