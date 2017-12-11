
var userWins = localStorage["userWins"] ? localStorage["userWins"] : 0;
enemyWins = localStorage["enemyWins"] ? localStorage["enemyWins"] : 0;

var mystep = 1;


var steps = 9;


var cell_step =
    [
        0, 0, 0, 0, 0, 0, 0, 0, 0
    ];

function userStep(cell) {
    if (mystep != 0) {
        alert('Сейчас не Ваш ход');
    }
    else {
        var cell_num = cell.attr('iD');
        cell_num++;
        if (cell_step[cell_num] < 1) {
            alert('Эта клетка уже занята');
        }
        else {
            cell.css('color', '#0a0').html('X');
            cell_step[cell_num] = 1;
            if (checkWin() == 'false') {
                mystep = 0;
                steps--;
                if (steps < 1) {
                    alert('Ничья');
                    reset();
                    return 'true';
                }
            } else {
                return 'false';
            }
        }
    }
}


$(function() {
    $('.uw').text(enemyWins);
    $('.ew').text(enemyWins);
});

function enemyStep() {
    if (mystep == 1) {
        return;
    }

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
}

function checkDefence() {
    if ((cell_step[0] == 1 && cell_step[1] == 1 && cell_step[2] == 0) || (cell_step[5] == 1 && cell_step[8] == 1 && cell_step[2] == 0) || (cell_step[4] == 1 && cell_step[6] == 1 && cell_step[2] == 0)) {
        return 3;
    }
    if ((cell_step[0] == 1 && cell_step[2] == 1 && cell_step[1] == 0) || (cell_step[4] == 1 && cell_step[7] == 1 && cell_step[1] == 0)) {
        return 2;
    }
    if ((cell_step[1] == 1 && cell_step[2] == 1 && cell_step[0] == 0) || (cell_step[3] == 1 && cell_step[6] == 1 && cell_step[0] == 0) || (cell_step[4] == 1 && cell_step[8] == 1 && cell_step[0] == 0)) {
        return 1;
    }
    if ((cell_step[3] == 1 && cell_step[4] == 1 && cell_step[5] == 0) || (cell_step[2] == 1 && cell_step[8] == 1 && cell_step[5] == 0)) {
        return 6;
    }
    if ((cell_step[3] == 1 && cell_step[5] == 1 && cell_step[4] == 0) || (cell_step[1] == 1 && cell_step[7] == 1 && cell_step[4] == 0)) {
        return 5;
    }
    if ((cell_step[4] == 1 && cell_step[5] == 1 && cell_step[3] == 0) || (cell_step[0] == 1 && cell_step[6] == 1 && cell_step[3] == 0)) {
        return 4; 
    }
    if ((cell_step[6] == 1 && cell_step[7] == 1 && cell_step[8] == 0) || (cell_step[2] == 1 && cell_step[5] == 1 && cell_step[8] == 0) || (cell_step[0] == 1 && cell_step[4] == 1 && cell_step[8] == 0)) {
        return 9;
    }
    if ((cell_step[6] == 1 && cell_step[8] == 1 && cell_step[7] == 0) || (cell_step[1] == 1 && cell_step[4] == 1 && cell_step[7] == 0)) {
        return 8;
    }
    if ((cell_step[7] == 1 && cell_step[8] == 1 && cell_step[6] == 0) || (cell_step[0] == 1 && cell_step[3] == 1 && cell_step[6] == 0) || (cell_step[2] == 1 && cell_step[4] == 1 && cell_step[6] == 0)) {
        return 7;
    }
    return 'false';
}
    

function checkAttack() {
    if (cell_step[4] == 0) { 
    	return 5;
    }

    if ((cell_step[0] == 2 && cell_step[1] == 2 && cell_step[2] == 0) || (cell_step[5] == 2 && cell_step[8] == 2 && cell_step[2] == 0) || (cell_step[4] == 2 && cell_step[6] == 2 && cell_step[2] == 0)) {
        return 3;
    }
    if ((cell_step[0] == 2 && cell_step[2] == 2 && cell_step[1] == 0) || (cell_step[4] == 2 && cell_step[7] == 2 && cell_step[1] == 0)) {
        return 2;
    }
    if ((cell_step[1] == 2 && cell_step[2] == 2 && cell_step[0] == 0) || (cell_step[3] == 2 && cell_step[6] == 2 && cell_step[0] == 0) || (cell_step[4] == 2 && cell_step[8] == 2 && cell_step[0] == 0)) {
        return 1;
    }
    if ((cell_step[3] == 2 && cell_step[4] == 2 && cell_step[5] == 0) || (cell_step[2] == 2 && cell_step[8] == 2 && cell_step[5] == 0)) {
        return 6;
    }
    if ((cell_step[3] == 2 && cell_step[5] == 2 && cell_step[4] == 0) || (cell_step[1] == 2 && cell_step[7] == 2 && cell_step[4] == 0)) {
        return 5;
    }
    if ((cell_step[4] == 2 && cell_step[5] == 2 && cell_step[3] == 0) || (cell_step[0] == 2 && cell_step[6] == 2 && cell_step[3] == 0)) {
        return 4;
    }
    if ((cell_step[6] == 2 && cell_step[7] == 2 && cell_step[8] == 0) || (cell_step[2] == 2 && cell_step[5] == 2 && cell_step[8] == 0) || (cell_step[0] == 2 && cell_step[4] == 2 && cell_step[8] == 0)) {
        return 9;
    }
    if ((cell_step[6] == 2 && cell_step[8] == 2 && cell_step[7] == 0) || (cell_step[1] == 2 && cell_step[4] == 2 && cell_step[7] == 0)) {
        return 8;
    }
    if ((cell_step[7] == 2 && cell_step[8] == 2 && cell_step[6] == 0) || (cell_step[0] == 2 && cell_step[3] == 2 && cell_step[6] == 0) || (cell_step[2] == 2 && cell_step[4] == 2 && cell_step[6] == 0)) {
        return 7; 
    }
    return 'false';
}

function reset() {
    mystep = Math.floor(Math.random() * (1 + 1));
    steps = 9;
    cell_step =
        [
            0, 0, 0, 0, 0, 0, 0, 0, 0
        ];
    $('.cell').html('');
    $('.uw').html(userWins);
    $('.ew').html(enemyWins);

    localStorage["userWins"]  = userWins;
    localStorage["enemyWins"] = enemyWins;
    chrome.browserAction.setBadgeText({text: userWins + ":" + enemyWins});

    if (mystep == 0) {
        enemyStep();
    }
}

function getRandomCell() {
    return Math.floor(Math.random() * 9) + 1;
}

$(function() {
    mystep = Math.floor(Math.random() * (1 + 1));
    if (mystep == 0) {
        enemyStep(); 
    }
    $('.cell').live('click', function() {
        if (userStep($(this)) != 'false') {
            enemyStep();
        }
    });
});
