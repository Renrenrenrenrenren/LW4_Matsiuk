let a = prompt("Введите 1 число: ");
let b = prompt("Введите 2 число: ");
let c = prompt("Введите 3 число: ");
if(a%2==0 && b%2==0 && c%2 ==0){
    console.log('3 четные числа');
}
else if(a%2==1 && b%2==1 && c%2==1){
    console.log('нет четных чисел');
}
else{
    console.log('2 четные числа')
}