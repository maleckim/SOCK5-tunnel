const open = require("open");
const Agent = require("socks5-https-client/lib/Agent");
const request = require("request");
var shttps = require("socks5-https-client");

request(
  {
    url: "",
    method: "GET",
    followAllRedirects: true,
    strictSSL: true,
    agentClass: Agent,
    agentOptions: {
      //socksHost: '', // Defaults to 'localhost'.
      socksPort: 9050, // Defaults to 1080.
    },
  },
  function (error, response, body) {
    console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  }
);

// Specify app arguments.
// async function hoopa(){
//     await open('https://sindresorhus.com');
// }

// hoopa();
