//    chrome.browserAction.setTitle({title:"New title"}); //Устанавливает новый всплывающий при наведении на иконку текст
//    chrome.browserAction.setPopup({popup:"new_popup.html"}); //Устанавливает новое всплывающее окно при клике на иконке
//    chrome.browserAction.setIcon({path:"new_icon.png"}); //Устанавливает новую иконку
//    chrome.browserAction.setBadgeText({text:"text"}); //Устанавливает текст поверх иконки
//    chrome.browserAction.setBadgeBackgroundColor({color:[0,0,0]}); //Устанавливает фон текста поверх иконки

var userWins  = localStorage["userWins"]  ? localStorage["userWins"]  : 0;
var enemyWins = localStorage["enemyWins"] ? localStorage["enemyWins"] : 0;

chrome.browserAction.setBadgeBackgroundColor({color:[200,0,0,0]});
chrome.browserAction.setBadgeText({text: userWins + ":" + enemyWins});