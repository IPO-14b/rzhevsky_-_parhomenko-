var userWins  = localStorage["userWins"]  ? localStorage["userWins"]  : 0;
var enemyWins = localStorage["enemyWins"] ? localStorage["enemyWins"] : 0;

$(function() {
    $('.uw').text(userWins);
    $('.ew').text(enemyWins);
});
function enemyStep() {
    if (mystep == 1)
        return;

    attack = checkAttack();
    if (attack == 'false') {
        defence = checkDefence();
        if (defence == 'false') {
            do {
                next_step = getRandomCell();
            } while (cell_step[next_step-1] > 0);
        } else {
            next_step = defence;
        }
    } else {
        next_step = attack;
    }

    $('#'+next_step).css('color', '#a00').html('O');
    next_step--;
    cell_step[next_step] = 2;
    if (checkWin() == 'false') {
        mystep = 1;
        steps--;
        if (steps < 1) {
            alert('Ничья');
            reset();
            return 'false';
        }
    } else {
        return 'false';
    }
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