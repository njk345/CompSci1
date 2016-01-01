function acslRun ()

var fs = require('fs');

function main() {
    var input = readInput();
    word = input.word;
    tests = input.tests;
    var output = [];

    for (var i = 0; i < tests.length; i++) {
        best = 0;
        var scores = [];
        for (var j = 0; j < tests[i].length; j++) {
            var pos = tests[i][j][0];
            var dir = tests[i][j][1];
            var squares = getSquares(word.length, pos, dir);
            var pts = score(word, squares);
            scores.push(pts);
            if (pts > best) {
                best = pts;
            }
        }
        output.push(best);
    }
    return output;
}

function readInput() {
    var data = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
    var word = data[0].split(',').join('');
    var tests = [];
    for (var i = 1; i < data.length; i++) {
        var test1 = [];
        var line = data[i].split(',');
        for (var j = 0; j < line.length; j += 2) {
            test1.push([+line[j], line[j + 1]]);
        }
        tests.push(test1);
    }
    return {word: word, tests: tests};
}

function getSquares(n, pos, dir) {
    if (dir === 'H') {
        inc = 1;
    }
    else {
        inc = 10;
    }

    var rv = [];
    for (var i = 0; i < n; i++) {
        rv.push(pos + i * inc);
    }
    return rv;
}


function score(word, squares) {
    var total = 0;
    var wordMult = 1;
    for (var i = 0; i < word.length; i++) {
        var lval = letterValue(word[i]);
        var bonus = bonusValues(squares[i]);
        total += lval * bonus[0];
        wordMult *= bonus[1];
    }
    total *= wordMult;
    return total;
}

function letterValue(c) {
    if (c === 'A') {
        return 1;
    }
    if (c === 'D' || c === 'R') {
        return 2;
    }
    if (c === 'B' || c === 'M') {
        return 3;
    }
    if (c === 'V' || c === 'Y') {
        return 4;
    }
    if (c === 'J' || c === 'X') {
        return 8;
    }
    return 0;
}

function bonusValues(sq) {
    if (sq % 3 === 0 && sq % 6 !== 0) {
        return [2, 1];
    }
    if (sq % 5 === 0) {
        return [3, 1];
    }
    if (sq % 7 === 0) {
        return [1, 2];
    }
    if (sq % 8 === 0) {
        return [1, 3];
    }
    return [1, 1];
}

var rv = main();

rv = rv.join("\n");

alert(rv);
