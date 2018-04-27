var arr = [-5, -3, -6, 0, -1];

var currentNum = arr[0];
for (var i = 0; i < arr.length; i++) {
    if(currentNum < arr[i]){
        currentNum = arr[i];

    }
}
console.log(currentNum);
