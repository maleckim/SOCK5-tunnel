const Agent = require("socks5-https-client/lib/Agent");
const request = require("request");
const shttps = require("socks5-https-client");

request(
  {
    url: "",
    method: "GET",
    followAllRedirects: true,
    strictSSL: true,
    agentClass: Agent,
    agentOptions: {
      //socksHost: '', // Defaults to 'localhost'.
      socksPort: 9050, 
    },
  },
  function (error, response, body) {
    console.error('error:', error); 
  console.log('statusCode:', response && response.statusCode); 
  console.log('body:', body); 
  }
);


