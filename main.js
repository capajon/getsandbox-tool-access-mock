var generateToolAccessData = require('tool-access-data.js').generate,
    toolAccessConsts = require('tool-access-data.js').consts;

// tool-access is very 'dumb' for now, only returning one test set - needs similar features as logins to be added
Sandbox.define('/d2l/api/adp/unstable/events/userinteractionevent/view/count','GET', function(req, res) {
    var granularity = req.query.granularity;
    if (
        granularity !== toolAccessConsts.SEVEN_DAYS && 
        granularity !== toolAccessConsts.THIRTY_DAYS &&
        granularity !== toolAccessConsts.TWELVE_MONTHS
    ) {
        throw('Unknown granularity of ' + granularity);
    }
    
    var result = generateToolAccessData(granularity);
    
    res.type('application/json');
    res.status(200);
    res.json(result);
})