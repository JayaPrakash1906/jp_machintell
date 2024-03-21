
const addsensinglayerModel = require('../../model/flcps-model/sensinglayer/addsensingmodel');
const addsensinglayerController = async (req,res) => 
{
    try
    {
        const {customer_name, customer_id, location, location_ID, MXXUnit, under_warrenty, IIOT_enabled}= req.query
        const result = await addassmunitModel(flcps_document, flcps_uid, flcps_availability, flcps_filelocation);
        res.status(200).json({message: 'Sensinglayer Added Successfully', data: result});
    }
    catch (err) 
    {
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'})
    }
};
module.exports = addsensinglayerController;