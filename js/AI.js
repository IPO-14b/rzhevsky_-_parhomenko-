var userWins  = localStorage["userWins"]  ? localStorage["userWins"]  : 0;
var enemyWins = localStorage["enemyWins"] ? localStorage["enemyWins"] : 0;

$(function() {
    $('.uw').text(userWins);
    $('.ew').text(enemyWins);
});

var mystep = 1;
var steps = 9;
var cell_step =
    [
        0, 0, 0, 0, 0, 0, 0, 0, 0
    ];

function userStep(cell) {
    if (mystep != 1)
        alert('Сейчас не Ваш ход');
    else {
        var cell_num = cell.attr('id');
        cell_num--;
        if (cell_step[cell_num] > 0)
            alert('Эта клетка уже занята');
        else {
            //TODO
        }
    }
}

