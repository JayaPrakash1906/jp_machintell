const viewassmunitdocumentModel = require('../../model/flcps-model/factorylayer/assemblyunit/viewassmunitdocumentModel');
const viewassmunitdocumentcontroller = async (req, res) => {
    try 
    {
        const [result] = await viewassmunitdocumentModel();
        res.send(result);
    }
    catch (err)
    {
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
};
module.exports = viewassmunitdocumentcontroller;