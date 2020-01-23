document.getElementById("Order").addEventListener("click", function(){
    let Size = document.getElementById("Size").value;
    let Color = document.getElementById("Color").value;
    
    //clearing the input //
    document.getElementById("Size").value = "";
    document.getElementById("Color").value = "";
    
    document.getElementById("ul").innerHTML += `<li style="color:${Color}">T-Shirt` + " " + Size;
});