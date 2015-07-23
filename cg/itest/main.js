function width(){
   return window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth||0;
}
function height(){
   return window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight||0;
}


var sup2 = new RubbableGif({ gif: document.getElementById('example2') } );
sup2.load(function(){
    document.getElementById('tframes').innerText = sup2.get_length();
});


(function(sup2) {
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
		// Use pos.x and pos.y
		document.getElementById("xpos").innerText = pos.x + '/' + width();
		document.getElementById("ypos").innerText = pos.y + '/' + height();
		sup2.move_to(sup2.get_length() * pos.x / width());
		document.getElementById("cframe").innerText = sup2.get_current_frame();
	    }
        }
    }
})(sup2);
