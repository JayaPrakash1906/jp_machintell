const viewvendorunitdocumentModel = require('../../model/flcps-model/factorylayer/vendormanagementunit/viewvendorunitdocumentModel');
const viewvendorunitdocumentcontroller = async (req, res) => {
    try 
    {
        const [result] = await viewvendorunitdocumentModel();
        res.send(result);
    }
    catch (err)
    {
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
};
module.exports = viewvendorunitdocumentcontroller;