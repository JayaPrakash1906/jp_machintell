const deletemanfunitdocumentModel = require('../../model/flcps-model/factorylayer/manufacturingunit/deletedesignunitdocumentModel');
const DeletemanfunitdocumentController = async (req, res) => {
    try
    {
      const {id}  = req.params;
      const result = await deletemanfunitdocumentModel(id);
      res.status(200).json({message : 'Data Inserted Successfully', data: result});
    }
    catch (err)
    {
        res.json({message: "OOPS Try again Later"});
    }
}
module.exports = DeletemanfunitdocumentController;
