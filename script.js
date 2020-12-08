var val = document.getElementById("niveau");
var store =document.getElementsByClassName('store')[0];
var lt = document.getElementsByClassName('latte');
function action(){
    console.log(val.value * 10);
    if(val.value == 0) {
        for(i = 0; i < lt.length; i++){
            lt[i].setAttribute("id","close");
        }
    } 
    else{
        store.style.marginTop = -val.value*30+'px';
        for(i = 0; i < lt.length; i++){
            lt[i].setAttribute("id","");
        }
    } 
};


val.onchange = () =>{action()};