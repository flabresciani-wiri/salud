const contenedorQR = document.getElementById('contenedorQR');

var teamid = decodeURI(getUrlVars()["teamid"]);
document.getElementById('teamid').innerHTML = teamid;


var url = "https://consumers.wiri.la/equipos/" + teamid

new QRCode(contenedorQR, url);


function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
   }