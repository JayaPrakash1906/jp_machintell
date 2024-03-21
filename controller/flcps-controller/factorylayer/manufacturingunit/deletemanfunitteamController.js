const deletemanfunitteamModel = require('../../model/flcps-model/factorylayer/manufacturingunit/deletemanfunitteamModel');
const DeletemanfunitteamController = async (req, res) => {
    try
    {
      const {id}  = req.params;
      const result = await deletemanfunitteamModel(id);
      res.status(200).json({message : 'Data Inserted Successfully', data: result});
    }
    catch (err)
    {
        res.json({message: "OOPS Try again Later"});
    }
}
module.exports = DeletemanfunitteamController;