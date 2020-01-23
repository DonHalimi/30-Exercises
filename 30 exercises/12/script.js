function sumAll() {
    var sum = 0;
    for(i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    console.log(sum);
}
sumAll(5,9,7,78,5,8,6);