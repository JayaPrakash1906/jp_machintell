const addvendorunitteamModel = require('../../model/flcps-model/factorylayer/vendormanagementunit/addvendorunitteammodel');
const addvendorunitteamController = async (req,res) => 
{
    try
    {
        const {flcps_employee_name, flcps_employee_id, flcps_availability_for_fmea, flcps_experiance, flcps_email_id}= req.query
        const result = await addvendorunitteamModel(flcps_employee_name, flcps_employee_id, flcps_availability_for_fmea, flcps_experiance, flcps_email_id);
        res.status(200).json({message: 'VendorUnitteam Added Successfully', data: result});
    }
    catch (err) 
    {
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
};
module.exports = addvendorunitteamController;
