//Element Selection

let counter = document.querySelector("#counter");
let increment = document.querySelector("#inc");
let decrement = document.querySelector("#de");
let reset = document.querySelector("#reset");

//Manipulation

let a = 0 ;

increment.addEventListener("click",function(){
    a++;
    counter.innerHTML = a;
});

decrement.addEventListener("click",function(){
    if(a > 0){
        a--;
        counter.innerHTML = a;
    } 
});

reset.addEventListener("click",function(){
    a = 0 ;
    counter.innerHTML = a ;
})







