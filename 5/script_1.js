'use strict'

function chessBoard() {

    let board = '<table><tbody>';

    for (let y = 0; y < 9; y++) {
        board += '<tr>'
        for (let x = 0; x < 9; x++) {
            if (y == 0) {
                board += '<td>';
                if (x > 0) {
                    board += config.letters[x-1];
                }
            }
            else {
                if (x == 0) {
                    board += '<td>' + (9 - y);
                }
                else {
                    board += '<td class="' + ((x + y % 2) % 2  ? 'black' : 'white') + '">';
                }
            }
            board += '</td>'
        }
    }

    board += '</tbody></table>';

    let task_1 = document.getElementById('task_1');
    task_1.insertAdjacentHTML('afterBegin', board);
}

chessBoard();