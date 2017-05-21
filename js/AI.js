/**
* Счет побед пользователя
*
* Используем для определения счета побед пользователя
* Содержит числовое значение
*
* @var		int userWins
*/
var userWins  = localStorage["userWins"]  ? localStorage["userWins"]  : 0;

/**
* Счет побед компьютера
*
* Используем для определения счета побед компьютера
* Содержит числовое значение
*
* @var		int enemyWins
*/
var enemyWins = localStorage["enemyWins"] ? localStorage["enemyWins"] : 0;

/**
* Индикатор хода пользователя
*
* Используем для определения разрешен ли ход пользователю
* Содержит числовое значение между 0 и 1
* Ход пользователя разрешен при значении 1 и запрещен при значении 0
*
* @var		int mystep
*/
var mystep = 1;

/**
* Счетчик оставшихся ходов
*
* Используем для определения количества оставшихся ходов
* Содержит числовое значение не болше количества ячеек в поле
*
* @var		int steps
*/
var steps = 9;

/**
* Массив состояний ячеек
*
* Используем для определения крестиков или ноливков в клетках
* Содержит массив числовых значений 0 1 2
*
* @var		int[] cell_step
*/
var cell_step =
    [
        0, 0, 0, 0, 0, 0, 0, 0, 0
    ];

/**
* Обработка шага пользователя
*
* Если ход пользователю разрешен то
* проверяется свободна ли клетка выбранная пользователем и
* если она свободна то проставляется крестик или нолик выбранный пользователем
* и проверяется победил пользователь или игра еще не окончена
*
* @param object cell Обьект ячейки на поле для отрисовки хода
* @return string 	 Возвращает 'false' если результат игры ничья или победа пользователя
*/
function userStep(cell) {
    if (mystep != 1)
        alert('Сейчас не Ваш ход');
    else {
        var cell_num = cell.attr('id');
        cell_num--;
        if (cell_step[cell_num] > 0)
            alert('Эта клетка уже занята');
        else {
             cell.css('color', '#0a0').html('X');
            cell_step[cell_num] = 1;
            if (checkWin() == 'false') {
                mystep = 0;
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
    }
}


$(function() {
    $('.uw').text(userWins);
    $('.ew').text(enemyWins);
});

/**
* Обработка шага компьютера
*
* Если ход компьютеру разрешен то вызываются функции checkAttack и
* checkDefence определяющие нужно компьютеру блокировать линию ходов 
* пользователя либо атаковать и совершается соответствующее действие
*  
* @return string 	 Возвращает 'false' если результат игры ничья или победа компьютера
*/
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
}

<<<<<<< HEAD
/**
* Проверка далжен ли компьютер блокировать серию ходов пользователя
* 
* Проверяется состояние ячеек на поле и есть 2 ячейки заполненные крестиками либо ноликами пользователя
* то возвращается номер ячейки необходимый для блокирвоки хода пользователя.
*
* @return mixed 	 Возвращает номер ячейки необходимый для защиты либо false если угрозы нет
*/
=======
>>>>>>> origin/master
	function checkDefence() {
	if ((cell_step[0] == 1 && cell_step[1] == 1 && cell_step[2] == 0) || (cell_step[5] == 1 && cell_step[8] == 1 && cell_step[2] == 0) || (cell_step[4] == 1 && cell_step[6] == 1 && cell_step[2] == 0))
        return 3;
    if ((cell_step[0] == 1 && cell_step[2] == 1 && cell_step[1] == 0) || (cell_step[4] == 1 && cell_step[7] == 1 && cell_step[1] == 0))
        return 2;
    if ((cell_step[1] == 1 && cell_step[2] == 1 && cell_step[0] == 0) || (cell_step[3] == 1 && cell_step[6] == 1 && cell_step[0] == 0) || (cell_step[4] == 1 && cell_step[8] == 1 && cell_step[0] == 0))
        return 1;
    if ((cell_step[3] == 1 && cell_step[4] == 1 && cell_step[5] == 0) || (cell_step[2] == 1 && cell_step[8] == 1 && cell_step[5] == 0))
        return 6;
    if ((cell_step[3] == 1 && cell_step[5] == 1 && cell_step[4] == 0) || (cell_step[1] == 1 && cell_step[7] == 1 && cell_step[4] == 0))
        return 5;
    if ((cell_step[4] == 1 && cell_step[5] == 1 && cell_step[3] == 0) || (cell_step[0] == 1 && cell_step[6] == 1 && cell_step[3] == 0))
        return 4;
    if ((cell_step[6] == 1 && cell_step[7] == 1 && cell_step[8] == 0) || (cell_step[2] == 1 && cell_step[5] == 1 && cell_step[8] == 0) || (cell_step[0] == 1 && cell_step[4] == 1 && cell_step[8] == 0))
        return 9;
    if ((cell_step[6] == 1 && cell_step[8] == 1 && cell_step[7] == 0) || (cell_step[1] == 1 && cell_step[4] == 1 && cell_step[7] == 0))
        return 8;
    if ((cell_step[7] == 1 && cell_step[8] == 1 && cell_step[6] == 0) || (cell_step[0] == 1 && cell_step[3] == 1 && cell_step[6] == 0) || (cell_step[2] == 1 && cell_step[4] == 1 && cell_step[6] == 0))
        return 7;
    return 'false';
	}
	
<<<<<<< HEAD
/**
* Выбор ячейки для хода
* 
* Проверяется состояние ячеек на поле и есть 2 ячейки заполненные крестиками либо ноликами компьютера
* то возвращается номер ячейки необходимый для хода для необходимой победы
*
* @return mixed 	 Возвращает номер ячейки необходимый для атаки либо false если таких ячеек нет
*/
=======

>>>>>>> origin/master
function checkAttack() {
	if (cell_step[4] == 0)
    return 5;

    if ((cell_step[0] == 2 && cell_step[1] == 2 && cell_step[2] == 0) || (cell_step[5] == 2 && cell_step[8] == 2 && cell_step[2] == 0) || (cell_step[4] == 2 && cell_step[6] == 2 && cell_step[2] == 0))
        return 3;
    if ((cell_step[0] == 2 && cell_step[2] == 2 && cell_step[1] == 0) || (cell_step[4] == 2 && cell_step[7] == 2 && cell_step[1] == 0))
        return 2;
    if ((cell_step[1] == 2 && cell_step[2] == 2 && cell_step[0] == 0) || (cell_step[3] == 2 && cell_step[6] == 2 && cell_step[0] == 0) || (cell_step[4] == 2 && cell_step[8] == 2 && cell_step[0] == 0))
        return 1;
    if ((cell_step[3] == 2 && cell_step[4] == 2 && cell_step[5] == 0) || (cell_step[2] == 2 && cell_step[8] == 2 && cell_step[5] == 0))
        return 6;
    if ((cell_step[3] == 2 && cell_step[5] == 2 && cell_step[4] == 0) || (cell_step[1] == 2 && cell_step[7] == 2 && cell_step[4] == 0))
        return 5;
    if ((cell_step[4] == 2 && cell_step[5] == 2 && cell_step[3] == 0) || (cell_step[0] == 2 && cell_step[6] == 2 && cell_step[3] == 0))
        return 4;
    if ((cell_step[6] == 2 && cell_step[7] == 2 && cell_step[8] == 0) || (cell_step[2] == 2 && cell_step[5] == 2 && cell_step[8] == 0) || (cell_step[0] == 2 && cell_step[4] == 2 && cell_step[8] == 0))
        return 9;
    if ((cell_step[6] == 2 && cell_step[8] == 2 && cell_step[7] == 0) || (cell_step[1] == 2 && cell_step[4] == 2 && cell_step[7] == 0))
        return 8;
    if ((cell_step[7] == 2 && cell_step[8] == 2 && cell_step[6] == 0) || (cell_step[0] == 2 && cell_step[3] == 2 && cell_step[6] == 0) || (cell_step[2] == 2 && cell_step[4] == 2 && cell_step[6] == 0))
        return 7;
    return 'false';
	}

<<<<<<< HEAD
/**
* Сброс поля
* 
* Очищается поле и игра начинается заново
*/
=======

>>>>>>> origin/master
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

    if (mystep == 0)
        enemyStep();
}
	
<<<<<<< HEAD
/**
* Выбор случайной ячейки
*
* Выбирается случайная ячейка с помощью генератора случайных чисел
* 
* @return int Возвращает номер выбранной ячейки
*/
=======

>>>>>>> origin/master
	function getRandomCell() {
    	return Math.floor(Math.random() * 9) + 1;
	}
	

<<<<<<< HEAD
/**
* Определение хода противника или игрока
* 
* Определяет кто сейчас совершает ход
*/
=======
>>>>>>> origin/master
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
