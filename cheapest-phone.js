const phones =[
    {name: 'samsung s5', price: 45000, camera: 10, storage: 32},
    {name: 'walton', price: 55000, camera: 8, storage: 16},
    {name: 'shaomi 5d', price: 35000, camera: 9, storage: 4},
    {name: 'redmi i10', price: 44000, camera: 20, storage: 32},
    {name: 'nokia n35', price: 50000, camera: 10, storage: 8},
    {name: 'htc h81', price: 40000, camera: 10, storage: 12},
];
let cheapest = phones[0];
for(const phone of phones){
    //console.log(phone);
    //compare price only
    if(phone.price < cheapest.price){
        cheapest = phone;
    }
}
console.log(cheapest);