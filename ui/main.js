var x;
var ht = new XMLHttpRequest();
var htp = new XMLHttpRequest();
var ip;
var ul = "ip";

var getfile = function (url) {
    var http = new XMLHttpRequest();
    //var url = "ui/yes.txt";
    http.open("GET", url, true);
    
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    
    http.onreadystatechange = function() {//Call a function when the state changes.
        if(http.readyState == 4 && http.status == 200) {
            a(http.responseText);//.split('\n').length-1;
        }
    };
    http.send(null);
};
var voteyes = function () {
    var http = new XMLHttpRequest();
    var url = "vote/yes";
    document.getElementById('yes-votes').innerHTML = "Loading...";
    http.open("POST", url, true);
    
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    
    http.onreadystatechange = function() {
        if(http.readyState == 4 && http.status == 200) {
            document.write(http.responseText);
            refreshpage();
        }
    };
    http.send(null);
};
var refreshpage = function () {
    document.getElementById('yes-votes').innerHTML = "Loading...";
    ht.open("GET", "ip", true);
    ht.setRequestHeader("Content-type", "text/plain");
    ht.onreadystatechange = function() {
        if(ht.readyState === 4 && ht.status == 200) {
            ip = ht.responseText;
            document.getElementById('jajh').innerHTML = "Your ip address is " + ip;
            htp.open("GET", "ui/yes.txt", true);
            htp.setRequestHeader("Content-type", "text/plain");
            htp.onreadystatechange = function() {
                if(htp.readyState  == 4 && htp.status == 200) {
                    x = htp.responseText;
//                    document.getElementById('jajh').innerHTML += " jh " + x;
                    var g = x.split("\n");
                    var f;
                    for (f in g) {
                        if (g[f] === ip.toString(10)){
                            document.getElementById('yes-votes').innerHTML = "You and " + (g.length-2) + ' others liked this';
                            return;
                        }
                        else if(f === (g.length-1).toString(10)){
                            document.getElementById('yes-votes').innerHTML = (g.length-1) + " people liked this.<br><input type=\"button\" value=\"Like\" name=\"kkk\" onclick=\"voteyes()\">";
                        }
                    }
                }
            };
            htp.send(null);
        }
    };
    ht.send(null);
}
console.log('Lded!');
refreshpage();
