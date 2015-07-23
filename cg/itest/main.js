function width(){
    return window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth||0;
}
function height(){
    return window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight||0;
}


$(document).ready(function(){

    var maingif = new SuperGif({ gif: $("#maingif")[0] } );

    var debug_status = {
	version: 1,
	totalframes: 1,
	x: 0,
	y: 0,
	time: $.now(),
	xspeed: 0,
	yspeed: 0,
	xspeedmax: 0,
	yspeedmax: 0,
	speedFactor: 100.0,
	start: 0,
	end: 0,
    };

    var ds = debug_status;
    
    var showDbg = function(){
	var dbg_txt = "";
	for(k in debug_status){
	    dbg_txt += k + '=' + debug_status[k] + ', ';
	}
	$("#debug_status").text(dbg_txt);
    };

    var handleMouseMove = function(e){
	var oldx = ds.x;
	var speedFactor = ds.speedFactor;
	var x = e.pageX;
	var y = e.pageY;
	var currTime = $.now();
	var xspeed = (x-ds.x)*speedFactor/(currTime-ds.time);
	var yspeed = (y-ds.y)*speedFactor/(currTime-ds.time);
	ds.x = x;
	ds.y = y;
	ds.time = currTime;
	ds.xspeed = xspeed;
	ds.yspeed = yspeed;
	ds.xspeedmax = ds.xspeedmax > xspeed ? ds.xspeedmax : xspeed;
	ds.yspeedmax = ds.yspeedmax > yspeed ? ds.yspeedmax : yspeed;
	//ds.start = ds.totalframes * 1.0 * oldx / width();
	ds.end = ds.totalframes * 1.0 * ds.x / width();
	maingif.move_to(ds.end);
	showDbg();
    }


    var animateGif = function(){
	return;
	if (Math.abs(ds.start - ds.end) > 10){
	    ds.step = (ds.xspeed * ds.xspeed + ds.yspeed * ds.yspeed) / (ds.xspeedmax + ds.yspeedmax) * Math.sign(ds.end - ds.start);
	    //maingif.move_to(ds.start);
	    ds.start = ds.start + ds.step;
	    maingif.move_relative(ds.step);
	    maingif.pause();
	}
    };

    maingif.load(function(){
	debug_status.totalframes = maingif.get_length();
	showDbg();

	$("html").mousemove(handleMouseMove);
	setInterval(animateGif, 50);
    });

});
