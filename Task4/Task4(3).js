let x = prompt("Введите число: ");
if(!parseInt(x)){
    console.log('вы ввели не число')
}
else{
    if(x>=15 && x<=30 && x%2==0){
        console.log(x*x*x);
    }
    else{
        console.log(x);
    }
}
