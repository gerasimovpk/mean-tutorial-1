var express = require('express');
var app = express();
var path = require('path');
var timeProvider = require("./timeProvider")

app.use(express.static(__dirname + '/'));

var router = express.Router();
router.get('/time', function(req, res) {
    res.json({
        time: timeProvider.now()
    });
});
app.use('/api', router);

app.listen(process.env.PORT || 3000, function () {
    console.log('Server started!')
})