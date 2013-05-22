// ==UserScript==
// @name    remove yahoo header (flickr)
// @match   http://www.flickr.com/*
// @version 1.0
// ==/UserScript==

(function(){
  var yahooHeader = document.getElementById("yucs-top-bar");
  yahooHeader.parentNode.removeChild(yahooHeader)
  var flickrHeader = document.getElementById("global-nav");
  flickrHeader.style.top = 0;
  document.body.style.backgroundPositionY = "0px"
})();
