var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static(__dirname + '/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.get('/articles.json', function (req, res) {
    let list = [{
        title: 'articles 1',
        content: 'This is articles 1'
    }, {
        title: 'articles 2',
        content: 'This is articles 2'
    }, {
        title: 'articles 3',
        content: 'This is articles 3'
    }];
    res.send(JSON.stringify(list));
});

app.get('*', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(3001, function () {
    console.log("[" + (new Date()).toLocaleString() + "]服务已经启动..")
});