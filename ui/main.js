var x;
var ht = new XMLHttpRequest();
var htp = new XMLHttpRequest();
var browser;

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
    http.open("GET", url, true);
    
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    
    http.onreadystatechange = function() {
        if(http.readyState == 4 && http.status == 200) {
            refreshpage();
        }
    };
    http.send(null);
};
var refreshpage = function () {
    document.getElementById('yes-votes').innerHTML = "Loading...";
    ht.open("GET", "browser", true);
    ht.setRequestHeader("Content-type", "text/plain");
    ht.onreadystatechange = function() {
        if(ht.readyState === 4 && ht.status == 200) {
            browser = ht.responseText;
            document.getElementById('jajh').innerHTML = "<b>user-agent:</b> <br>" + browser;
            htp.open("GET", "votes", true);
            htp.setRequestHeader("Content-type", "text/plain");
            htp.onreadystatechange = function() {
                if(htp.readyState  == 4 && htp.status == 200) {
                    g = JSON.parse(htp.responseText);
                    var f;
                    for (f in g) {
                        if (g[f] === browser){
                            document.getElementById('yes-votes').innerHTML = "You and " + (g.length-1) + ' others liked this';
                            return;
                        }
                        else if(f === (g.length-1).toString(10)){
                            document.getElementById('yes-votes').innerHTML = (g.length) + " people liked this.<br><input type=\"button\" value=\"Like\" name=\"kkk\" onclick=\"voteyes()\">";
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
