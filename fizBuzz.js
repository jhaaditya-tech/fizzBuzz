//Prints number from 1 to infinity. For the multiple of three it pushes Fizz and the multiple of 5 it prints Buzz. For the multiple of both 3 and 5 It pushes FizzBuzz in the array.

var output=[];
var count=1;

function fizBuzz(){
    
    if (count%3===0 || count%5===0){
        if (count%3===0 && count%5===0){
            output.push("FizzBuzz");
        }
        else if (count%3===0){
            output.push("Fizz");
        }
        else{
            output.push("Buzz");
        }
    }
    else{
        output.push(count);
    }
    count+=1;
    console.log(output);
}

fizBuzz();
