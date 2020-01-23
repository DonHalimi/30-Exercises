let a = prompt("insert a number");

let Header = document.getElementById("Header");

if (a>=100){
    Header.innerText = "The number is cool!";
    
}
else {
    Header.innerText = "The number is not cool!";
}