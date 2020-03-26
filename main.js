var http = require('http');
const fs = require('fs');
const fetch = require('node-fetch');
global.fetch = fetch;

fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(8080);
});


function getImages() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(fetch("https://source.unsplash.com/random"))
        }, 3000);
    });
}
async function getURLs(){
    const a = await getImages().then(result => result.url);
    const b = await getImages().then(result => result.url);
    console.log(a)
    displayImages(a,b)
}
const displayImages = (x,y) => {
    document.getElementById("image1").innerHTML = `<img src="${x}">`
    document.getElementById("image2").innerHTML = `<img src="${y}">`
};
getURLs()
