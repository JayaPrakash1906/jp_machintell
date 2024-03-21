const viewdesignunitteamModel = require('../../model/flcps-model/factorylayer/designunit/viewdesignunitteamModel');
const viewdesignunitteamcontroller = async (req, res) => {
    try 
    {
        const [result] = await viewdesignunitteamModel();
        res.send(result);
    }
    catch (err)
    {
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
};
module.exports = viewdesignunitteamcontroller;