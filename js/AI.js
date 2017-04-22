var userWins  = localStorage["userWins"]  ? localStorage["userWins"]  : 0;
var enemyWins = localStorage["enemyWins"] ? localStorage["enemyWins"] : 0;

$(function() {
    $('.uw').text(userWins);
    $('.ew').text(enemyWins);
});
