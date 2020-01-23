let textarea51 = document.querySelectorAll('textarea')[0];
let counter = 0
counter = Number(counter);
document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        counter++
        document.getElementById("changing-text").innerHTML++
    }
};