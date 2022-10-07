var output=[];
var count=1;

function fizBuzz(){
    while (count<=100){
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
    
    }
    console.log(output); 

}

fizBuzz();
