var express = require('express');
var app = express();
var request = require('request');


url = 'http://www.imdb.com/title/tt1229340/';

request(url, function(error, response, html){
    if(error){
        console.log("Err", error);
    }
    else {
        console.log(html);
    }
});

app.get("/scrape", function(req, res){
    
})
var port = process.env.PORT ||8080;
app.listen(port, function () {
    console.log("Listening on port " + port);
})