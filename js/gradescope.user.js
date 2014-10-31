// ==UserScript==
// @name         Gradescope next page
// @namespace    http://zchn.github.io/
// @version      0.5
// @description  enter something useful
// @author       Kevin Chen
// @match        https://www.gradescope.com/courses/*/questions/*/submissions/*/grade
// @grant        none
// @run-at       document-end
// @updateURL    http://zchn.github.io/js/gradescope.user.js
// ==/UserScript==

$(document).keypress(function(e){
  if (e.which == 221){
    $('.page-icon.disabled.active').next().children()[0].click();
    }
  }
);

