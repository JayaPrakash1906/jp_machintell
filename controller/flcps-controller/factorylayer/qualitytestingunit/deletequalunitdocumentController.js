const deletequalunitdocumentModel = require('../../model/flcps-model/factorylayer/qualitytestingunit/deletequalunitdocumentModel');
const DeletequalunitdocumentController = async (req, res) => {
    try
    {
      const {id}  = req.params;
      const result = await deletequalunitdocumentModel(id);
      res.status(200).json({message : 'Data Inserted Successfully', data: result});
    }
    catch (err)
    {
        res.json({message: "OOPS Try again Later"});
    }
}
module.exports = DeletequalunitdocumentController;
