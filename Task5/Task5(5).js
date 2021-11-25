let a = prompt("Введите название товара ");
a = a.toLowerCase();
let b = 0;
switch(a){
    case 'cat':
        b = 200;
        break;
    case 'bird':
        b = 500;
        break;
    case 'dog':
        b = 1000;
        break;
    default:
        b = 0;
}
if(b>0){
    let c = prompt(`Введите 1, если хотите отменить заказ, или 2 если хотите продолжить:`);
    if(c==1){
        alert('Отменено!');
    }
    else{
        alert(`Cтоимость ${a} будет составлять ${b} грн`);
    }
}
else{
    alert('Невозможно приобрести товар');
}
