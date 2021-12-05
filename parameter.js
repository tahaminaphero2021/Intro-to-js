function bringSingara(taka){
   
    console.log("I like singara", taka);
    console.log("mama ,give me some singara!!")
    //variable
    var singaraPrice = 10;
    var singaraQuantity = taka / singaraPrice;
    return singaraQuantity;
}
// bringSingara(100); OR both are same
// var money = 250;
// bringSingara(money);
var money = 250;
var singara = bringSingara(money);
console.log('Take your Singara Apu!!', singara);