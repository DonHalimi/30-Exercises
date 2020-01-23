function evenCount() {
    var oddNumbers = 0;
    var evenNumbers = 0;
    for(i = 0; i < arguments.length; i++) {

        if(arguments[i]%2 == 0){

            evenNumbers ++;
    }
        else{
            oddNumbers++;
    }
} 
    console.log(`the even numbers in the array are ${evenNumbers}`);

    console.log(`the odd numbers in the array are ${oddNumbers}`);
}
evenCount(5,9,7,78,5,8,6);