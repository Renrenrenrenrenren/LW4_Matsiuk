let a = prompt("Введите 1 число: ");
let b = prompt("Введите 2 число: ");
let c = prompt("Введите 3 число: ");
if(a == b && b == c){
    console.log(0);
}
else{
    if(a >= b && a>=c){
        console.log(a);
    }
    else if(b >= c && b >= a){
        console.log(b);
    }
    else{
        console.log(c);
    }
}