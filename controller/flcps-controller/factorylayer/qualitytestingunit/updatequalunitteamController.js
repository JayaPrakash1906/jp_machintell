const updatequalunitteamModel = require('../../model/flcps-model/factorylayer/qualitytestingunit/updatequalunitteamModel');
const updatequalunitteamController = async(req, res) => {
    try
    {
        const {id} = req.params;
        const {flcps_employee_name, flcps_availability_for_fmea, flcps_experiance, flcps_email_id}= req.query
        const result = await updatequalunitteamModel(flcps_employee_name, flcps_availability_for_fmea,flcps_experiance, flcps_email_id, id);
        res.status(200).json({message: 'team Updated Successfully', data: result});
    }
    catch (err)
    {
        console.log(err);
        res.json({error: 'Not Properly Updated. Pleas try again'});
    }
}
module.exports = updatequalunitteamController;