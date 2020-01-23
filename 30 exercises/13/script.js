function sumPos() {
    var sum = 0;
    var trash = 0
    for(i = 0; i < arguments.length; i++) {

        if(Math.sign(arguments[i])==1){

            sum += arguments[i];
    }
        else{
            trash+=arguments[i];
    }
} 
    console.log(`the summed up positive numbers are ${sum}`);

    console.log(`the remaining negatives are ${trash}`);
}
sumPos(5,9,-7,-78,5,8,6);