var express = require('express');
var bodyParser = require('body-parser');
var mc = require('./controllers/messages_controller')

var app = express();

app.use(bodyParser.json());
app.use(express.static('./../public/build'))

var messagesBaseUrl = "/api/messages";

app.post(messagesBaseUrl, mc.create);
app.get(messagesBaseUrl, mc.read);
app.put(messagesBaseUrl + '/:id', mc.update);
app.delete(messagesBaseUrl + "/:id", mc.delete);

app.listen(3000, function(){
    console.log("Engines running")
});

