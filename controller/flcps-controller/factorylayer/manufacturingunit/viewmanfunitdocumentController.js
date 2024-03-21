const viewmanfunitdocumentModel = require('../../model/flcps-model/factorylayer/manufacturingunit/viewmanfunitdocumentModel');
const viewmanfunitdocumentcontroller = async (req, res) => {
    try 
    {
        const [result] = await viewmanfunitdocumentModel();
        res.send(result);
    }
    catch (err)
    {
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
};
module.exports = viewmanfunitdocumentcontroller;