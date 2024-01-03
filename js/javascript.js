function init(){
    let btnMinus = document.getElementsByClassName("minus");
    let btnPlus = document.getElementsByClassName("plus");


for(let i=0; i<btnMinus.length; i++){
    btnMinus[i].onclick = function(e){
    let countnumObj = e.target.nextElementSibling;
    let countnum = parseInt(countnumObj.value);
    if(countnum>0){
        countnumObj.value = countnum -1
    }
}
    btnPlus[i].onclick = function(e){
    let countnumObj = e.target.previousElementSibling;
    let countnum = parseInt(countnumObj.value);
        countnumObj.value = countnum +1
    }
}
}
window.addEventListener("load", init, false);
