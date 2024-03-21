const deleteassmunitteamModel = require('../../model/flcps-model/factorylayer/assemblyunit/deleteassmunitteamModel');
const DeleteassmunitteamController = async (req, res) => {
    try
    {
      const {id}  = req.params;
      const result = await deleteassmunitteamModel(id);
      res.status(200).json({message : 'Data Inserted Successfully', data: result});
    }
    catch (err)
    {
        res.json({message: "OOPS Try again Later"});
    }
}
module.exports = DeleteassmunitteamController;