const viewqualunitteamModel = require('../../model/flcps-model/factorylayer/qualitytestingunit/viewqualunitteamModel');
const viewqualunitteamcontroller = async (req, res) => {
    try 
    {
        const [result] = await viewqualunitteamModel();
        res.send(result);
    }
    catch (err)
    {
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
};
module.exports = viewqualunitteamcontroller;