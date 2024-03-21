const deletedesignunitdocumentModel = require('../../model/flcps-model/factorylayer/designunit/deletedesignunitdocumentModel');
const DeletedesignunitdocumentController = async (req, res) => {
    try
    {
      const {id}  = req.params;
      const result = await deletedesignunitdocumentModel(id);
      res.status(200).json({message : 'Data Inserted Successfully', data: result});
    }
    catch (err)
    {
        res.json({message: "OOPS Try again Later"});
    }
}
module.exports = DeletedesignunitdocumentController;
