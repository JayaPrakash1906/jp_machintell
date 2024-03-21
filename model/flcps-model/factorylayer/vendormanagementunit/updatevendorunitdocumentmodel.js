const con = require('../db');
const updatevendorunitdocumentModel = (flcps_document, flcps_availability,flcps_filelocation, id) => {
   return new Promise((resolve, reject) => {
       con.query("UPDATE document SET flcps_document = ? , flcps_availability = ?, flcps_filelocation = ?,WHERE flcps_uid = ? ", [flcps_document, flcps_availability, flcps_filelocation], 
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

module.exports = updatevendorunitdocumentModel;