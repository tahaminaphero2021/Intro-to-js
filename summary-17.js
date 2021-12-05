var skyColor= "browser";
var phones =['iphone', 'mi', 'redmi', 'lg']
phones[3] = "walton";
//check oppo exists in an array
if(phones.indexOf('oppo') == -1){
    console.log("opps! this is not just cup tea")
}
//if LG is available
if(phones.indexOf('lg') !=-1){
    console.log("lg! this is LG")
}

//loop
var num = 0;
while(num <= 10){
    console.log(num)
    num++;
}
for(var i =0; i <phones.length; i++){
    console.log(i)
}
//conditional(function)
function addThreeNumbers(number1, number2, number3){
    console.log(number1, number2, number3);
    var total = number1 + number2 + number3;
    return total;

}
addThreeNumbers(21, 12, 105);

//object
var microphone ={
    color: 'black',
    price: 120,
    brand: "blue yeti"
}