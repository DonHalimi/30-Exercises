function avgFinder() {
    var sum = 0;
    
    for(i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    let average = sum/arguments.length;
    console.log(average);
}
avgFinder(5,9,7,7,5,8,6);