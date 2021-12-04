//1.variable
var favoriteBook = '4 hour work week';
//2.array
var bookList = ['positioning', 'hooked', 'start with why', 'shoe dog'];
var shoeDogIndex = bookList.indexOf('shoe dog');
bookList[2] = 'story Brand';
bookList.push('small gaints');
bookList.pop();

//3.conditionals
if(bookList[1] == 'hooked'){
    console.log('I am hooked');
}
else{
    console.log('i am not hooked')
}
//4.while loop
var i = 0;
while(i < 15){
    console.log(i);
    console.log('looping looping11');
    i++
}
//4.For loop

for(i = 0; i < 15; i++){
    console.log(i);
    console.log('looping looping11');
    
}