var http = require('http');
var url = require('url');
//now calling that module:
//important: const fs = require(fs);



http.createServer(function(req, res){
    const q = url.parse(req.url, true).query;
    console.log(q);
    const search_keywords = q.search;
    //console.log(req); //-> shows millions of line in terminal
    //console.log(req.url); 
    res.writeHead(200, {'Content-Type': 'text/html'});
    //res.end('Hello World!');
    res.end(search_keywords);

    unsplash.search.photos(search_keywords, 1, 10, { orientation: "portrait" })
    .then(toJson)
    .then(json => {
      // Your code
      console.log(json);
    });

}).listen(8080);

// let url = "https://api.github.com/users/honnnei";
// fetch(url).then(function(response) { return response.json(); }).then(function(myJson) { console.log(JSON.stringify(myJSON)); });

// require syntax
const fetch = require('node-fetch');
global.fetch = fetch;

const Unsplash = require('unsplash-js').default;

const toJson = require('unsplash-js').toJson;
 
// const unsplash = new Unsplash({ accessKey: "Kq5yEtAw5yUEUGweVBPDUm22CBLvlf-6_lVHrveyo78" });
 
const unsplash = new Unsplash({
  accessKey: "Kq5yEtAw5yUEUGweVBPDUm22CBLvlf-6_lVHrveyo78",
  // Optionally you can also configure a custom header to be sent with every request
  headers: {
    "X-Custom-Header": "foo"
  },
  // Optionally if using a node-fetch polyfill or a version of fetch which supports the timeout option, you can configure the request timeout for all requests
  timeout: 500 // values set in ms
});







