var shape
var svg = document.getElementById('svg');
var colorsArr = ['none', 'green', 'red', 'yellow', 'blue', 'black', 'pink', 'grey', 'purple'];
//colorsArr = ['black','white'];
colorsArr = ['none', 'teal', 'yellow', 'pink', 'green', 'darkslategray', 'tomato'];
var color;
var horizonY = 100;

var timestamp = 0;
var mY = 0;


// event listener on the button
$(document).mousemove(function(e) {
    var w = $(window).width();
    var h = $(window).height();

    var now = Date.now();
    currentmY = e.screenY;

    var dt = now - timestamp;
    var distance = Math.abs(currentmY - mY);
    var speed = Math.round(distance / dt * 1000);

    mY = currentmY;
    timestamp = now;

    shape = document.createElementNS("http://www.w3.org/2000/svg", "rect");

    var width = Math.floor(Math.random() * speed + 100);
    var height = Math.floor(Math.random() * speed + 100);
    var x = Math.floor(Math.random() * w);
    var y = Math.floor(Math.random() * h);
    color = Math.floor(Math.random() * colorsArr.length);

    shape.setAttribute("y", "" + y - (height / 2) + "");
    shape.setAttribute("x", "" + x - (width / 2) + "");
    shape.setAttribute("width", "" + width + "");
    shape.setAttribute("height", "" + height + "");
    shape.setAttribute("fill", colorsArr[color]);

    svg.appendChild(shape);
});
