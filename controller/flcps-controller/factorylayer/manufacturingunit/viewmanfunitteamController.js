const viewmanfunitteamModel = require('../../model/flcps-model/factorylayer/manufacturingunit/viewmanfunitteamModel');
const viewmanfunitteamcontroller = async (req, res) => {
    try 
    {
        const [result] = await viewmanfunitteamModel();
        res.send(result);
    }
    catch (err)
    {
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
};
module.exports = viewmanfunitteamcontroller;