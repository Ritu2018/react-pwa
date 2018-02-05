function initdraw() {
    //Splash
    var canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d'),
        focused = false,
        clicked = false;
    var shadow = document.createElement('canvas'),
        sctx = shadow.getContext('2d');

    var items = [];
    var mouse = {
        x: 0,
        y: 0,
        dx: 0,
        dy: 0,
        px: 0,
        py: 0
    };
    var options = {
        scatter: 0.7,
        gravity: 0.04,
        consistency: 0.04,
        pollock: false,
        burst: true,
        shade: true

    };
    canvas.width = shadow.width = window.innerWidth;
    canvas.height = shadow.height = window.innerHeight;
    sctx.fillStyle = ctx.fillStyle = '#aa0707'; // rgba(250,0,0,0.1)'

function drawloop() {

    if (focused) {
        requestAnimationFrame(drawloop);
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawsplat(items)

}

function splat(x, y, arr, color) {

    for (var i = 0; i < 100; i++) {
        var s = Math.random() * Math.PI;
        var dirx = (((Math.random() < .5) ? 3 : -3) * (Math.random() * 3)) * options.scatter;
        var diry = (((Math.random() < .5) ? 3 : -3) * (Math.random() * 3)) * options.scatter;

        arr.push({
            x: x,
            y: y,
            dx: dirx + mouse.dx,
            dy: diry + mouse.dy,
            size: s,
            color: color
        })
    }

}

function drawsplat(arr) {

    var i = arr.length;
    while (i--) {
        var t = arr[i];
        var x = t.x,
            y = t.y,
            s = t.size,
            color = t.color;

        circle(x, y, s, ctx, color);

        t.dy -= options.gravity;
        t.x -= t.dx;
        t.y -= t.dy;
        t.size -= 0.05;


        if (arr[i].size < 0.3 || Math.random() < options.consistency) {
            //circle(x, y, s, sctx, color);
            arr.splice(i, 1)

        }
        
    }
    ctx.drawImage(shadow, 0, 0);
    //sctx.drawImage(shadow, 0, 0.5)

}

function circle(x, y, s, c, color) {
    c.fillStyle = color;
    c.beginPath();
    c.arc(x, y, s * 5, 0, 2 * Math.PI, false);
    c.fill();
    c.closePath()

}

var getCoor = function (c) {
    var top_left = [0 , 0];
    var top_right = [0 , window.innerWidth];
    var bottom_left = [window.innerHeight , 0];
    var bottom_right = [window.innerHeight ,window.innerWidth];
    var return_coor = [top_left , top_right , bottom_left , bottom_right];
    return (return_coor[c]);
};

function put_splash(c) {
    var colors = ["#0fd502" , "#e9b004"  , "#0395d9" , "#d42231" ];
    if (!focused) {
        focused = true;
        drawloop();
    } else {
        if (options.burst) {
            setTimeout(function () {
                clicked = false
            }, 100)
        }
        let [y,x] = getCoor(c);
        mouse.x = x;
        mouse.y = y;

        var randomtone = colors[c];
        //sctx.fillStyle = ctx.fillStyle = randomtone;

        splat(mouse.x, mouse.y, items, randomtone)

    }
}
let c=0;
function check_focus() {
    if(document.hasFocus()) {
        splash();
        splash();
        splash();
        splash();
        return true;
    }
    else
        return false;
}
function  splash() {
            put_splash((c++) % 4);
}
var splatevent = setInterval(check_focus , 2000);
}
export default initdraw;