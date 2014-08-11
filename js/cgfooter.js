console.log('footerjs');
mainwrap = document.getElementById('main-wrap');
footerwrap = document.getElementById('footer-wrap');
cgbgurl = 'http://zchn.github.io/cg/bgchangstreet.jpg';
if(window.location.pathname === '/video-projects.html' && mainwrap !== null){
  mainwrap.style.background = "#000000";
}
if (false){
  mainwrap.style.background = "#000000 url('"+cgbgurl+"') fixed no-repeat center top";
  mainwrap.style['-webkit-background-size'] = 'cover';
  mainwrap.style['-moz-background-size'] = 'cover';
  mainwrap.style['-o-background-size'] = 'cover';
  mainwrap.style['background-size'] = 'cover';
}
if(window.location.pathname === '/' && mainwrap !== null){
  mainwrap.style.height = '0px';
  mainwrap.style.background = "initial";
}
if(window.location.pathname === '/' && footerwrap !== null){
  footerwrap.style.height = '0px';
  footerwrap.style.background = "initial";
}

