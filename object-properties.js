var computer ={
    price: 50000,
    storage: "156gb",
    color: 'golden',
    processor: 'intel i5'
}
//set a object property value
// console.log(computer)
// console.log(computer.processor);
var computerPrice = computer.price;
// console.log(computerPrice);

//different ways to set a value an object property
//1. set a value an object property
computer.price = 50000;
//2.
computer["price"] = 103000;
computer["storage"] = '512gb';
// console.log(computer);
//3.
var colorProperty = 'color';
computer[colorProperty] = 'sliver';
console.log(computer);

