let add= document.querySelector('.increment');
let minus= document.querySelector('.decrement');
let screen = document.querySelector('.number');

let integer = 0;


add.addEventListener('click', function(){
    integer +=1;
    screen.innerHTML=integer;
});

minus.addEventListener('click', function(){
    integer -=1;
    screen.innerHTML=integer;
});