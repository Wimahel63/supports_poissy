// node : cote serveur
// angular: cote client

// var http=require('http');

// var server= http.createServer(function(req, res){
//     res.writeHead(200);
//     res.end('salut tout le monde');
// });
// server.listen(8080);

//parser une page
// var http=require('http');
// var url= require('url');

// var server= http.createServer(function(req, res){
//     var page=url.parse(req.url).pathname;
//     console.log(page);
//     res.writeHead(200, {"Content-Type":"text/plain"});
//     res.write('bien le bonjour');
//     res.end();
// });
// server.listen(8080);

//introduire des conditions

var http=require('http');
var url= require('url');

var server= http.createServer(function(req, res){
    var page=url.parse(req.url).pathname;
    console.log(page);
    res.writeHead(200, {"Content-Type":"text/plain"});
    if(page == '/'){
    res.write('vous etes a l\'accueil, que puis-je faire pour vous?');
}
else if (page =='/sous-sol'){
    res.write('vous etes a la cave a vin, ces bouteilles sont a moi');
    }
    else if (page =='etage/1/chambre'){
        res.write('he ho, c\'est privé ici');
    }
    res.end();
});
server.listen(8080);