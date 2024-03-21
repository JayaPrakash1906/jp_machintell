const con = require('../db');
const deleteassmunitteamModel = (id) => 
{
    return new Promise((resolve, reject)=>{
        con.query("DELETE FROM assmteam WHERE flcps_employee_id = ?", [id], 
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

module.exports = deleteassmunitteamModel;
