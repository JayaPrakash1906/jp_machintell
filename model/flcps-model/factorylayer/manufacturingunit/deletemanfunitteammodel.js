const con = require('../db');
const deletemanfunitteamModel = (id) => 
{
    return new Promise((resolve, reject)=>{
        con.query("DELETE FROM manfteam WHERE flcps_employee_id = ?", [id], 
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

module.exports = deletemanfunitteamModel;
