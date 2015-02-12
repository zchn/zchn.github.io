console.log('footerjs');
headerwrap = document.getElementById('header-wrap');
mainwrap = document.getElementById('main-wrap');
wsitecontent = document.getElementById('wsite-content');
footerwrap = document.getElementById('footer-wrap');
cgbgurl = 'http://zchn.github.io/cg/bgchangstreet.jpg';

if(window.location.pathname === '/video.html' && mainwrap !== null){
  mainwrap.style.background = "#000000";
  mainwrap.style.color = "white";
}
if (false){
  mainwrap.style.background = "#000000 url('"+cgbgurl+"') fixed no-repeat center top";
  mainwrap.style['-webkit-background-size'] = 'cover';
  mainwrap.style['-moz-background-size'] = 'cover';
  mainwrap.style['-o-background-size'] = 'cover';
  mainwrap.style['background-size'] = 'cover';
}

if(window.location.pathname === '/reel-list.html' && mainwrap !== null){
  mainwrap.style.background = "#000000 url('http://zchn.github.io/cg/changreelbg.jpg') fixed no-repeat center top";
  mainwrap.style['-webkit-background-size'] = 'cover';
  mainwrap.style['-moz-background-size'] = 'cover';
  mainwrap.style['-o-background-size'] = 'cover';
  mainwrap.style['background-size'] = 'cover';
}

if(window.location.pathname === '/photography.html' && mainwrap !== null){
  mainwrap.style.background = "#EDEDED";
  mainwrap.style['-webkit-background-size'] = 'cover';
  mainwrap.style['-moz-background-size'] = 'cover';
  mainwrap.style['-o-background-size'] = 'cover';
  mainwrap.style['background-size'] = 'cover';
}

if(window.location.pathname === '/art.html' && wsitecontent !== null){
  wsitecontent.style.width = "100%";
}


if(window.location.pathname === '/' && headerwrap !== null){
  headerwrap.style.height = '100%';
}
if(window.location.pathname === '/' && mainwrap !== null){
  mainwrap.remove();
}
if(window.location.pathname === '/' && footerwrap !== null){
  footerwrap.remove();
}

