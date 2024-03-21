const deletequalunitteamModel = require('../../model/flcps-model/factorylayer/qualitytestingunit/deletequalunitteamModel');
const DeletequalunitteamController = async (req, res) => {
    try
    {
      const {id}  = req.params;
      const result = await deletequalunitteamModel(id);
      res.status(200).json({message : 'Data Inserted Successfully', data: result});
    }
    catch (err)
    {
        res.json({message: "OOPS Try again Later"});
    }
}
module.exports = DeletequalunitteamController;