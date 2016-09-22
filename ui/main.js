var x;
var ht = new XMLHttpRequest();
var htp = new XMLHttpRequest();
var ip;
var ul = "ip";
var getvotes = function () {
    var http = new XMLHttpRequest();
    var url = "ui/yes.txt";
    http.open("GET", url, true);
    
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    
    http.onreadystatechange = function() {//Call a function when the state changes.
        if(http.readyState == 4 && http.status == 200) {
            x = http.responseText
            document.getElementById('yes-votes').innerHTML = x.split('\n').length-1;
            refreshpage();
        }
    };
    http.send(null);
};
getvotes();
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
    http.open("POST", url, true);
    
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    
    http.onreadystatechange = function() {
        if(http.readyState == 4 && http.status == 200) {
            document.write(http.responseText);
        }
    };
    http.send(null);
};
var refreshpage = function() {
    var f;
    var g = x.split("\n");
    for (f in g){
        if (g[f] === ip.toString(10)){
            document.getElementById('yes-votes').innerHTML = "You and " + (g.length-1) + ' others liked this';
        }
        else if (f===(g.length-1).toString(10)){
            document.getElementById('yes-votes').innerHTML += " people liked this.<br><input type=\"button\" value=\"Like\" name=\"kkk\" onclick=\"voteyes()\">";
            //console.log(f===(g.length-1));
        }
    }
    ht.open("GET", ul, true);
    
    ht.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    
    ht.onreadystatechange = function() {
        if(ht.readyState == 4 && ht.status == 200) {
            ip = ht.responseText;
            htp.open("GET", "ui/yes.txt", true);
            
            htp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            
            htp.onreadystatechange = function() {
                if(htp.readyState == 4 && htp.status == 200) {
                    x = htp.responseText;
                    var g = x.split("\n");
                    for (f in g){
                        if (g[f] === ip.toString(10)){
                            document.getElementById('yes-votes').innerHTML = "You and " + (g.length-1) + ' others liked this';
                        }
                        else if (f===(g.length-1).toString(10)){
                            document.getElementById('yes-votes').innerHTML = (g.length-1) + " people liked this.<br><input type=\"button\" value=\"Like\" name=\"kkk\" onclick=\"voteyes()\">";
                            //console.log(f===(g.length-1));
                        }
                    }
                }
            };
            htp.send(null);
        }
    };
    ht.send(null);
};
console.log('Lded!');
refreshpage();