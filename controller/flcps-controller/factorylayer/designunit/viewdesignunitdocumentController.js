const viewdesignunitdocumentModel = require('../../model/flcps-model/factorylayer/designunit/viewdesignunitdocumentModel');
const viewdesignunitdocumentcontroller = async (req, res) => {
    try 
    {
        const [result] = await viewdesignunitdocumentModel();
        res.send(result);
    }
    catch (err)
    {
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
};
module.exports = viewdesignunitdocumentcontroller;