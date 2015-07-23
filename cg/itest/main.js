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
	cframe:0,
	mframe:0,
	x: 0,
	y: 0,
	width: width(),
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
	ds.x = e.pageX;
	ds.y = e.pageY;
	showDbg();
    }


    var animateGif = function(){
	ds.mframe = ds.totalframes * ds.x * 1.0 / ds.width;
	newframe = ds.cframe + (ds.mframe - ds.cframe) * 0.1;
	if(Math.abs(ds.cframe-newframe) > 3){
	    maingif.move_to(newframe);
	    maingif.pause();
	    ds.cframe = newframe;
	}
    };

    maingif.load(function(){
	debug_status.totalframes = maingif.get_length();
	showDbg();



	$("html").mousemove(handleMouseMove);
	setInterval(animateGif, 50);
    });

});
