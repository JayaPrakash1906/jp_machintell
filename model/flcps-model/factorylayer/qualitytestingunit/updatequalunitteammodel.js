const con = require('../db');
const updatequalunitteamModel = (flcps_employee_name, flcps_availability_for_fmea, flcps_experiance, flcps_email_id, id) => {
   return new Promise((resolve, reject) => {
       con.query("UPDATE team SET flcps_employee_name = ? , flcps_availability_for_fmea = ?, flcps_experiance = ?,flcps_email_id = ?, WHERE flcps_employee_id = ? ", [flcps_employee_name, flcps_availability_for_fmea, flcps_experiance,flcps_email_id], 
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

module.exports = updatequalunitteamModel;