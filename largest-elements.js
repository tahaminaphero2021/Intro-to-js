function largestElement(numbers){
    let largest = 0;
    for(let i = 0; i< numbers.length; i++){
        //console.log(i);
        const element = numbers[i];
        //console.log(element);
        //largest number
        if(element > largest){
            largest = element;
        }
        
    }
    return largest;
}

const ages =[12, 54, 2, 0, 69, 20, 11];
const oldest = largestElement(ages);
const oldest2 =largestElement([-2, -10, -15]);
console.log(oldest2, "oldest2")
console.log(oldest, "oldest")