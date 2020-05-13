function inRange() {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    if(num1 < 2 || num1 > 100 || num2 < 2 || num2 > 100){
        document.getElementById('result').innerHTML = `${document.getElementById(num1).name} 
        input ${document.getElementById(num1).value} is not in the range 2 and 100`;

    }
    else if(num1 >= 2 && num1 <= 100 && num2 >= 2 && num2 <= 100){
        createArray(num1,num2);
    }
}