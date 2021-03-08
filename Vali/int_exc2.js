for(let i=1; i<101;i++){
    if(i%3==0 && i%5==0) {
        console.log(i);
        document.getElementById("Fizz").innerHTML+="FizzBuzz<br>";
    }
    else if(i%3==0){
        console.log("Fizz");
        document.getElementById("Fizz").innerHTML+="Fizz<br>";
    }
    else if(i%5==0){
        console.log("Buzz");
        document.getElementById("Fizz").innerHTML+="Buzz<br>";
    }
    else {
        document.getElementById('Fizz').innerHTML+=i+"<br>";
    }

}


// Exerise 3
var b = ""
for(let i=0; i<6;i++)
{    b +='*';
    document.getElementById('Star').innerHTML+=b+"<br>"
    console.log("*")
   
    
}



