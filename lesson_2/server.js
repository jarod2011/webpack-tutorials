var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static(__dirname + '/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.get('*', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(3001, function() {
    console.log("[" + (new Date()).toLocaleString() + "]服务已经启动..")
});