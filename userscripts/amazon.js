// ==UserScript==
// @name         amazon_autobuy
// @namespace    amazon_autobuy
// @version      1.0
// @description  Amazon Auto Purchase Bot
// @author       Jaewan Yun
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js
// @resource     HTML https://raw.githubusercontent.com/Jaewan-Yun/gpudrops/main/userscripts/amazon.html
// @grant        GM_getResourceText
// @match        https://www.amazon.com/*

// ==/UserScript==
(function () {
    'use strict';
    $('body').append(GM_getResourceText('HTML'));
})();
