function width(){
    return window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth||0;
}
function height(){
    return window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight||0;
}


$(document).ready(function(){

    debug_status = { version: 1};
    
    showDbg = function(){
	var dbg_txt = "";
	for(k in debug_status){
	    dbg_txt += k + '=' + debug_status[k] + ', ';
	}
	$("#debug_status").text(dbg_txt);
    };

    registerMouseMove = function(maingif) {
	var mousePos;

	document.onmousemove = handleMouseMove;
	setInterval(getMousePosition, 100); // setInterval repeats every X ms

	function handleMouseMove(event) {
            var dot, eventDoc, doc, body, pageX, pageY;

            event = event || window.event; // IE-ism

            // If pageX/Y aren't available and clientX/Y are,
            // calculate pageX/Y - logic taken from jQuery.
            // (This is to support old IE)
            if (event.pageX == null && event.clientX != null) {
		eventDoc = (event.target && event.target.ownerDocument) || document;
		doc = eventDoc.documentElement;
		body = eventDoc.body;

		event.pageX = event.clientX +
		    (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
		    (doc && doc.clientLeft || body && body.clientLeft || 0);
		event.pageY = event.clientY +
		    (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
		    (doc && doc.clientTop  || body && body.clientTop  || 0 );
            }

            mousePos = {
		x: event.pageX,
		y: event.pageY
            };
	}

	var prevMousePos = { x: 0, y: 0};
	function getMousePosition() {
            var pos = mousePos;
            if (!pos) {
		// We haven't seen any movement yet
            }
            else {
		if (pos.x === prevMousePos.x && pos.y === prevMousePos.y){
		}else{
		    maingif.move_to(maingif.get_length() * pos.x / width());

		    debug_status.x = pos.x + '/' + width();
		    debug_status.y = pos.y + '/' + height();
		    debug_status.currframe = maingif.get_current_frame();
		    showDbg();
		}
            }
	}
    };


    var maingif = new RubbableGif({ gif: $("#maingif")[0] } );

    maingif.load(function(){
	debug_status.totalframes = maingif.get_length();
	registerMouseMove(maingif);
	showDbg();
    });

});
