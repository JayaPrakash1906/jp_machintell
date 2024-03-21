const updatequalunitdocumentModel = require('../../model/flcps-model/factorylayer/qualitytestingunit/updatequalunitdocumentModel');
const updatequalunitdocumentController = async(req, res) => {
    try
    {
        const {id} = req.params;
        const {flcps_document, flcps_availability, flcps_filelocation}= req.query
        const result = await updatequalunitdocumentModel(flcps_document, flcps_availability,flcps_filelocation, id);
        res.status(200).json({message: 'document Updated Successfully', data: result});
    }
    catch (err)
    {
        console.log(err);
        res.json({error: 'Not Properly Updated. Pleas try again'});
    }
}
module.exports = updatequalunitdocumentController;