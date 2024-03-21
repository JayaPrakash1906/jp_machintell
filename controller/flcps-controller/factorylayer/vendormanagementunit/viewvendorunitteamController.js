const viewvendorunitteamModel = require('../../model/flcps-model/factorylayer/vendormanagementunit/viewvendorunitteamModel');
const viewvendorunitteamcontroller = async (req, res) => {
    try 
    {
        const [result] = await viewvendorunitteamModel();
        res.send(result);
    }
    catch (err)
    {
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
};
module.exports = viewvendorunitteamcontroller;