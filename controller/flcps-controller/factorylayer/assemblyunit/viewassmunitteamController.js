const viewassmunitteamModel = require('../../model/flcps-model/factorylayer/assemblyunit/viewassmunitteamModel');
const viewassmunitteamcontroller = async (req, res) => {
    try 
    {
        const [result] = await viewassmunitteamModel();
        res.send(result);
    }
    catch (err)
    {
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
};
module.exports = viewassmunitteamcontroller;