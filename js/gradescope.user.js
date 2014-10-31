// ==UserScript==
// @name         Gradescope next page
// @namespace    http://zchn.github.io/
// @version      0.1
// @description  enter something useful
// @author       Kevin Chen
// @match        https://www.gradescope.com/courses/*/questions/*/submissions/*/grade
// @grant        none
// ==/UserScript==

$(document).bind('keydown',']',function(){$('.page-icon.disabled.active').next().children()[0].click();});

