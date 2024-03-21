
const addmanfunitdocumentModel = require('../../model/flcps-model/factorylayer/manufacturingunit/addmanfunitdocumentmodel');
const addmanfunitdocumentController = async (req,res) => 
{
    try
    {
        const {flcps_document, flcps_uid, flcps_availability, flcps_filelocation}= req.query
        const result = await addmanunitdocumentModel(flcps_document, flcps_uid, flcps_availability, flcps_filelocation);
        res.status(200).json({message: 'ManfUnitdocument Added Successfully', data: result});
    }
    catch (err) 
    {
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
};
module.exports = addmanfunitdocumentController;