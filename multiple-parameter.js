//function declare
//Even Number
function addTwoNumbers(number1, number2){
    console.log(number1, number2);
    var total = number1 + number2;
    return total;

}
var firstNumber = 35;
var secondNumber = 49;
//call the function
var result = addTwoNumbers(firstNumber, secondNumber);
console.log("result value", result)
// addTwoNumbers(21, 59);

//multiply
function multiplyTwoNumbers(num1, num2){
    var result = num1 * num2;
    return result;

}
var total = multiplyTwoNumbers(5, 100);
console.log('total after multiplication', total);

//odd
function oddTwoNumbers(num1, num2){
    var result = num1 - num2;
    return result;

}
var total = oddTwoNumbers(115, 100);
console.log('total after Odd number', total);
//Division Number
function divisionTwoNumbers(num1, num2){
    var result = num1 / num2;
    return result;

}
var total = divisionTwoNumbers(150, 10);
console.log('final after division number', total);
