const deletedesignunitteamModel = require('../../model/flcps-model/factorylayer/designunit/deletedesignunitteamModel');
const DeletedesignunitteamController = async (req, res) => {
    try
    {
      const {id}  = req.params;
      const result = await deletedesignunitteamModel(id);
      res.status(200).json({message : 'Data Inserted Successfully', data: result});
    }
    catch (err)
    {
        res.json({message: "OOPS Try again Later"});
    }
}
module.exports = DeletedesignunitteamController;