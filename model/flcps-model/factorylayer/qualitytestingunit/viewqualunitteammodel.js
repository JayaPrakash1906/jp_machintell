const con = require('../db');
const viewqualunitteamModel = () => {
    return new Promise((resolve, reject) => {
        con.query("SELECT * FROM team", (error, result) => {
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
module.exports = viewqualunitteamModel;
