
const adddesignunitdocumentModel = require('../../model/flcps-model/factorylayer/designunit/adddesignunitdocumentmodel');
const adddesignunitdocumentController = async (req,res) => 
{
    try
    {
        const {flcps_document, flcps_uid, flcps_availability, flcps_filelocation}= req.query
        const result = await adddesignunitdocumentModel(flcps_document, flcps_uid, flcps_availability, flcps_filelocation);
        res.status(200).json({message: 'DesignUnitdocument Added Successfully', data: result});
    }
    catch (err) 
    {
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
};
module.exports = adddesignunitdocumentController;