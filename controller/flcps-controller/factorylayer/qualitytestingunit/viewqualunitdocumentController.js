const viewqualunitdocumentModel = require('../../model/flcps-model/factorylayer/qualitytestingunit/viewqualunitdocumentModel');
const viewqualunitdocumentcontroller = async (req, res) => {
    try 
    {
        const [result] = await viewqualunitdocumentModel();
        res.send(result);
    }
    catch (err)
    {
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
};
module.exports = viewqualunitdocumentcontroller;