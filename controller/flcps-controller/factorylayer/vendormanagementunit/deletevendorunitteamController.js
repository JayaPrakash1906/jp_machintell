const deletevendorunitteamModel = require('../../model/flcps-model/factorylayer/vendormanagementunit/deletevendorunitteamModel');
const DeletevendorunitteamController = async (req, res) => {
    try
    {
      const {id}  = req.params;
      const result = await deletevendorunitteamModel(id);
      res.status(200).json({message : 'Data Inserted Successfully', data: result});
    }
    catch (err)
    {
        res.json({message: "OOPS Try again Later"});
    }
}
module.exports = DeletevendorunitteamController;