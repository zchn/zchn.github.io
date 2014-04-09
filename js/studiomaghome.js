videoiframe = "<iframe src=\"\/\/player.vimeo.com\/video\/91481101?byline=0&amp;portrait=0&amp;autoplay=1\" width=\"500\" height=\"281\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen><\/iframe>"
function mydivonload(){
    if isEditing(){
	console.log("in editing mode");
    }else{
	console.log("in production mode");
    }
}

function isEditing(){
    return document.getElementById("w-editor-top");
}
