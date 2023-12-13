// Build a simple loop, inside a function, that takes an array and prints the value of the array to the console. 

function printArray (val) {
    for (let a = 0; a < val.length; a++){
        console.log(val[a]);
    }
}
printArray(["WTF", "class", "of", 2024]);