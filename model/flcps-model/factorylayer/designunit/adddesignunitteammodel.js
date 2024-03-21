const con = require('../db');
const adddesignunitteamModel = (flcps_employee_name, flcps_employee_id, flcps_availability_for_fmea, flcps_experiance, flcps_email_id) => {
    return new Promise((resolve, reject) => {
        con.query("INSERT INTO designteam(flcps_employee_name, flcps_employee_id, flcps_availability_for_fmea, flcps_experiance, flcps_email_id) VALUES(?, ?, ?, ?, ?)", 
        [flcps_employee_name, flcps_employee_id, flcps_availability_for_fmea, flcps_experiance, flcps_email_id],
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
module.exports = adddesignunitteamModel;