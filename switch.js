var color = 'yellow';

if(color == 'blue'){
    console.log('color is blue');
}
else if(color == 'red'){
    console.log('color is red');
}
else if(color == 'green'){
    console.log('color is green');
}
else if(color == 'white'){
    console.log('color is white');
}
else if(color == 'yellow'){
    console.log('color is yellow');
}
else{
    console.log('color is orange');
}

//switch
switch(color){
    case 'blue':
        console.log('color is blue');
        break;
    case 'red':
        console.log('color is red');
        break;
    case 'yellow':
    case 'green':
        console.log('color is green and yellow');
        break;
    
        // console.log('color is ');
        // break;
}