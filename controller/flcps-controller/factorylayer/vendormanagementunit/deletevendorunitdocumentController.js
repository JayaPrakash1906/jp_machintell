const deletevendorunitdocumentModel = require('../../model/flcps-model/factorylayer/vendormanagementunit/deletevendorunitdocumentModel');
const DeletevendorunitdocumentController = async (req, res) => {
    try
    {
      const {id}  = req.params;
      const result = await deletevendorunitdocumentModel(id);
      res.status(200).json({message : 'Data Inserted Successfully', data: result});
    }
    catch (err)
    {
        res.json({message: "OOPS Try again Later"});
    }
}
module.exports = DeletevendorunitdocumentController;
