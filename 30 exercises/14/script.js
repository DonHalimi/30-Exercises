function newArray() {
    let newArray = [];
    for(i = arguments.length; i > 0; i--) {
      newArray.push(arguments[i]);
    }
    console.log(newArray);
}
newArray(5,9,7,78,5,8,6);