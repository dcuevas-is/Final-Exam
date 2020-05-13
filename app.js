function inRange() {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    if(num1 < 2 || num1 > 100 || num2 < 2 || num2 > 100){
        document.getElementById('message').innerHTML = `${document.getElementById(num1).name} 
        input ${document.getElementById(num1).value} is not in the range 2 and 100`;

    }
    else if(num1 >= 2 && num1 <= 100 && num2 >= 2 && num2 <= 100){
        createArray(num1,num2);
    }
}

function evenNum(num){
    var result = true;
    for (var i=2; i <= Math.ceil(num); i++) {
        if (num % 2 === 1){
            result = false;
            break;
        }
    }
    return result;
}

function createArray(firstInput, secondInput){
    var numArray = [];
    var smallNum = 0;
    var largeNum = 0;
    if(firstInput < secondInput){
        smallNum = firstInput
        largeNum = secondInput
    }
    else if(firstInput > secondInput){
        largeNum = firstInput
        smallNum = secondInput
    }

    while(smallNum <= largeNum){
        if(evenNum(smallNum) == true){
            numArray.push(smallNum)
            smallNum += 1
        }
        else if(evenNum(smallNum) == false){
            smallNum += 1
        }
    }
    document.getElementById('evens').innerHTML = "There are " + numArray.length + " even numbers";
    document.getElementById('message').innerHTML = numArray; 
}