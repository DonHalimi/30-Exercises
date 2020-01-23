document.getElementById("calculate").addEventListener("click", function(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let operator = document.getElementById("operator").value;

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    console.log(num1);
    console.log(num2);
    console.log(operator);

    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("operator").value = "";

    
    let result = 0;
    
    switch (operator) {
        case (operator = "+"):
            result = num1 + num2;
        break;
        case (operator = "/"):
            result = num1 / num2;
        break;
        case (operator = "*"):
            result = num1 * num2;
        break;
        case (operator = "%"):
            result = num1 % num2;
        break;
        case (operator = "-"):
            result = num1 - num2;
        break;
    }

    document.getElementById("result").innerHTML = result;

})