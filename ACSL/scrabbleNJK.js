/*TAKES COMMAND LINE ARGUMENTS AS INPUT -- STORES THEM IN ARRAYS TO BE ACTED UPON
THIS IS BEGINNING OF PROGRAM*/

//CODE TO BE EXECUTED
//some globals for the inputFill function
var argv1 = process.argv[2];
var argv2 = process.argv[3];
var argv3 = process.argv[4];
var argv4 = process.argv[5];
var argv5 = process.argv[6];
var argv6 = process.argv[7];
var input1 = [];
var input2 = [];
var input3 = [];
var input4 = [];
var input5 = [];
var input6 = [];
inputFill(input1,argv1);
inputFill(input2,argv2);
inputFill(input3,argv3);
inputFill(input4,argv4);
inputFill(input5,argv5);
inputFill(input6,argv6);

//defining special score squares
var doubleLetts= [];
var tripleLetts = [];
var doubleWords = [];
var tripleWords = [];
var allSpecial = [];
fillEmUp();


replItems(input1);


outPut1 = [];
outPut2 = [];
outPut3 = [];
outPut4 = [];
outPut5 = [];

scoreIt(input2,outPut1);
scoreIt(input3,outPut2);
scoreIt(input4,outPut3);
scoreIt(input5,outPut4);
scoreIt(input6,outPut5);

//FINAL CODE: RETURNS THE BIGGEST SCORE FOR EACH SET OF THREE PLACEMENTS
console.log(findBig(outPut1));
console.log(findBig(outPut2));
console.log(findBig(outPut3));
console.log(findBig(outPut4));
console.log(findBig(outPut5));

//HERE IS THE SCORING GENERATING SECTION
function replItems (array) {
	function lettScore (inLett) {
		var outScore;
		switch (inLett) {
			case "A":
				outScore = 1;
				break;
			case "E":
				outScore = 1;
				break;
			case "R":
				outScore = 2;
				break;
			case "D":
				outScore = 2;
				break;
			case "B":
				outScore = 3;
				break;
			case "M":
				outScore = 3;
				break;
			case "V":
				outScore = 4;
				break;
			case "Y":
				outScore = 4;
				break;
			case "J":
				outScore = 8;
				break;
			case "X":
				outScore = 8;
				break;
		}
		return outScore;
	}

	for (var i = 0; i < array.length; i++) {
		array[i] = lettScore(array[i]);
	}
}
	

function scoreIt (inArray,outArray) {
	var tempPlace1 = [];
	var tempPlace2 = [];
	var tempPlace3 = [];
	function pair (item1,item2,outArray) {
		if (inArray[item2] === "H") {
			outArray.push(+inArray[item1],(+inArray[item1] + 1),(+inArray[item1] + 2),(+inArray[item1] + 3));
			return outArray;
		}
		else if (inArray[item2] === "V") {
			outArray.push(+inArray[item1],(+inArray[item1] + 10),(+inArray[item1]+20),(+inArray[item1] + 30));
			return outArray;
		}
	}
	tempPlace1 = pair(0,1,tempPlace1);
	tempPlace2 = pair(2,3,tempPlace2);
	tempPlace3 = pair(4,5,tempPlace3);
	
	function score (inArray,tempArray) {
		var placeTot = 0;
		var doubWordCount = 0;
		var tripWordCount = 0;
		for (var i = 0; i < inArray.length; i++) {
			if (isSpecial(tempArray[i],2,"l")) {
				placeTot += inArray[i] * 2;
			}
			else if (isSpecial(tempArray[i],3,"l")) {
				placeTot += inArray[i] * 3;
			}
			else if (isSpecial(tempArray[i],2,"w")) {
				placeTot += inArray[i];
				doubWordCount++;
			}
			else if (isSpecial(tempArray[i],3,"w")) {
				placeTot += inArray[i];
				tripWordCount++;
			}
			else {
				placeTot += inArray[i];
			}
		}
		var factor = 1;
		if (doubWordCount !== 0) {
			factor *= Math.pow(2, doubWordCount);
		}
		if (tripWordCount !== 0) {
			factor *= Math.pow(3, tripWordCount);
		}
		return placeTot * factor;
	}
	
	var score1 = score(input1,tempPlace1);
	var score2 = score(input1,tempPlace2);
	var score3 = score(input1,tempPlace3);
	
	outArray.push(score1,score2,score3);
}


function findBig (array) {
	array.sort(function (a,b) {return b-a});
	var exitVal = array[0];
	return exitVal;
}





//AND THE FUNCTIONS THEREOF
function inputFill (inArray,ipSource) {
	var i = 0;
	var x = 0;
	while (i < ipSource.length) {
		inArray.push(ipSource[i]);
		i++;
		if (ipSource[i] === undefined) {
			break;
		}
		if (ipSource[i] !== "," && ipSource[i-1] !== ",") {
			inArray[x] += ipSource[i];
			i++;
			x++;
			continue;
		}
		x++;
	}
	for (var a = 0; a < inArray.length; a++) {
		//removes all the unnecessary commas from the array
		if (inArray[a] === ",") {
			inArray.splice(a,1);
		}
	}
}


function getBig (array) {
	array.sort(function (a,b) {return b-a});
	var exit = array[2];
	return exit;
}




/*DEFINE SPECIAL SQUARES PART OF PROGRAM
initialize arrays for all double and triple score spaces. allSpecial contains both double and triple score spaces - used to check if a given space already has a special marker.*/

function fillEmUp() { //this loads in all the double and triple score spaces. Also sorts them from least to greatest
	multsOf3();
	multsOf5();
	multsOf7();
	multsOf8();
	doubleLetts.sort(function (a,b) {return a-b});
	tripleLetts.sort(function (a,b) {return a-b});
	doubleWords.sort(function (a,b) {return a-b});
	tripleWords.sort(function (a,b) {return a-b});
}

function isSpecial(num,amount,length) {//can be run on a given number and triple or double value. Checks if it is a special square
	if (amount === 2 && length === "l") {
		for (var i = 0; i < doubleLetts.length; i++) {
			if (doubleLetts[i] === +num) {
				return true;
			}
		}
		return false;
	}
	else if (amount === 3 && length === "l") {
		for (var i = 0; i < tripleLetts.length; i++) {
			if (tripleLetts[i] === +num) {
				return true;
			}
		}
		return false;
	}
	else if (amount === 2 && length === "w") {
		for (var i = 0; i < doubleWords.length; i++) {
			if (doubleWords[i] === +num) {
				return true;
			}
		}
		return false;
	}
	else if (amount === 3 && length === "w") {
		for (var i = 0; i < tripleWords.length; i++) {
			if (tripleWords[i] === +num) {
				return true;
			}
		}
		return false;
	}
}



function existCheck (num, array) {
	for (var i = 0; i < array.length; i++) {
		if (array[i] === num) {
			return true;
		}
	}
	return false; //only happens if the score space number is not already marked
}

function multsOf3 () {
	for (var i = 3; i <= 40; i+=3) {
		if (i % 2 === 0) {
			continue; //skips over multiple of 3 if it is a multiple of 2 (every other mult of 3 is one)
		}
		else {
			doubleLetts.push(i);
			allSpecial.push(i);
		}
	}
}

function multsOf5 () {
	for (var i = 5; i<=40; i+=5) {
		if (existCheck(i,allSpecial) === false) {
			tripleLetts.push(i);
			allSpecial.push(i);
		}
		else {
			continue;
		}
	}
}

function multsOf7 () {
	for (var i = 7; i<=40; i+=7) {
		if (existCheck(i,allSpecial) === false) {
			doubleWords.push(i);
			allSpecial.push(i);
		}
		else {
			continue;
		}
	}
}

function multsOf8 () {
	for (var i = 8; i<= 40; i+=8) {
		if (existCheck(i,allSpecial) == false) {
			tripleWords.push(i);
			allSpecial.push(i);
		}
		else {
			continue;
		}
	}
}