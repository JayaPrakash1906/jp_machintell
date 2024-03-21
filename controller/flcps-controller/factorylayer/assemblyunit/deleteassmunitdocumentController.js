const deleteassmunitdocumentModel = require('../../model/flcps-model/factorylayer/assemblyunit/deleteassmunitdocumentModel');
const DeleteassmunitdocumentController = async (req, res) => {
    try
    {
      const {id}  = req.params;
      const result = await deleteassmunitdocumentModel(id);
      res.status(200).json({message : 'Data Inserted Successfully', data: result});
    }
    catch (err)
    {
        res.json({message: "OOPS Try again Later"});
    }
}
module.exports = DeleteassmunitdocumentController;
