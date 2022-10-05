var min = 0, sec = 0, fsec = 0;
var x;
var running = false;
document.getElementById('clock').innerHTML = "00 : 00 : 00";
function start() {
    if (running == true)
        return;
    x = setInterval(inc, 10);
    running = true;
}
function pause() {
    clearInterval(x);
    running = false;
}

function reset() {
    min = 0;
    sec = 0;
    fsec = 0;
    document.getElementById('clock').innerHTML = "00 : 00 : 00";
    stop();
}
function inc() {
    fsec++;
    if (fsec == 100)
        sec++, fsec = 0;

    if (sec == 60)
        sec = 0, min++;
    var x = String(min);
    var y = String(sec);
    var z = String(fsec);
    if (x.length == 1)
        x = '0' + x;
    if (y.length == 1)
        y = '0' + y;
    if (z.length == 1)
        z = '0' + z;
    document.getElementById('clock').innerHTML = x + " : " + y + " : " + z;
}
