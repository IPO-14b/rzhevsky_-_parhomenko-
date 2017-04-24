var userWins  = localStorage["userWins"]  ? localStorage["userWins"]  : 0;
var enemyWins = localStorage["enemyWins"] ? localStorage["enemyWins"] : 0;

$(function() {
    $('.uw').text(userWins);
    $('.ew').text(enemyWins);
});
$(function() {
    mystep = Math.floor(Math.random() * (1 + 1));
    if (mystep == 0)
        enemyStep();
    $('.cell').live('click', function() {
        if (userStep($(this)) != 'false') {
            enemyStep();
        }
    });
});