var request = require('request');
var config  = require('./config');
var app     = require('express')();
var token   = null;

app.get('/login', function(req,res,next){
  var url = 'https://login.uber.com/oauth/authorize';
  url += '?scope=request profile&response_type=code';
  url += '&client_id=' + config.uber.clientId;
  console.log('Redirecting to', url);
  res.redirect(url);
});

app.get('/callback', function(req, res, next) {
  var data = {
    'client_id': config.uber.clientId,
    'client_secret': config.uber.clientSecret,
    'grant_type': 'authorization_code',
    'redirect_uri': config.uber.redirectUri,
    'code': req.query.code
  };

  request.post({
    url: 'https://login.uber.com/oauth/token',
    form: data,
  }, function(err, response, body) {
    body = JSON.parse(body);
    token = body.access_token;
    res.json(body);
  });
});

function callUber() {
  if (!token) {
    return console.log('Please login first! Visit http://localhost:3000/login');
  }

  var data =  {
    'product_id': config.product_id,
    'start_latitude': config.start_latitude,
    'end_latitude': config.end_latitude,
    'start_longitude': config.start_longitude,
    'end_longitude': config.end_longitude
  };

  var headers = {
    'Authorization': 'Bearer ' + token
  };

  console.log('REQUESTING UBER', data);

  request.post({
    url: 'https://api.uber.com/v1/requests',
    json: data,
    headers: headers
  }, function(err, response, body) {
    console.log('RESPONSE', body);
  });
}

var server = app.listen(3000, function() {
  console.log('Visit http://localhost:3000/login');
});

module.exports = {
  call: callUber
};
