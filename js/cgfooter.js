console.log('footerjs');
mainwrap = document.getElementById('main-wrap');
if(window.location.pathname === '/video-projects.html' && mainwrap !== null){
  mainwrap.style.background = "#000000 url('http://cdn1.editmysite.com/uploads/2/6/7/2/26720964/background-images/1940869920.jpg') fixed no-repeat center top";
  mainwrap.style['-webkit-background-size'] = 'cover';
  mainwrap.style['-moz-background-size'] = 'cover';
  mainwrap.style['-o-background-size'] = 'cover';
  mainwrap.style['background-size'] = 'cover';
}
