// var i = 0;
// while(i < 10){
//     console.log(i);
//     if(i == 5){
//         break;
//     }
//     i++;
// }
//for loop
// for ( var i =0; i<= 20; i++){
//     console.log(i);
//     if(i > 8){
//     // if(i == 8){
//         break;
//     }
// }
//array
var numbers = [54, 11, 22, 117, 110, 55, 101, 111, 58];
// for ( var i =0; i< numbers.length; i++){
//     var number = numbers[i];
//      console.log(number);
//         if(number > 54){
//         // if(i == 8){
//             break;
//         }
//     }
//for loop continue method
for ( var i =0; i< numbers.length; i++){
    var number = numbers[i];
     if(number > 90){
            continue;
        }
     console.log(number);
       
    }