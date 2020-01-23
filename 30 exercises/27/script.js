document.getElementById("checker").addEventListener("click", function(){
    let numberHolder = document.getElementById("numberHolder").value;
    
    if(numberHolder<100){
        document.getElementById("Header").innerHTML = "";
        console.log("ERROR");
    }
    else{
    console.log("we're good");
    }
});

