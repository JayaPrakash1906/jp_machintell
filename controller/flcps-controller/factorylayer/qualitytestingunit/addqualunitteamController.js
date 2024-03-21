const addqualunitteamModel = require('../../model/flcps-model/factorylayer/qualitytestingunit/addqualunitteammodel');
const addqualunitteamController = async (req,res) => 
{
    try
    {
        const {flcps_employee_name, flcps_employee_id, flcps_availability_for_fmea, flcps_experiance, flcps_email_id}= req.query
        const result = await addqualunitModel(flcps_employee_name, flcps_employee_id, flcps_availability_for_fmea, flcps_experiance, flcps_email_id);
        res.status(200).json({message: 'QualityUnitteam Added Successfully', data: result});
    }
    catch (err) 
    {
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
};
module.exports = addqualunitteamController;