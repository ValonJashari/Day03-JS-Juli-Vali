/*
var result = prompt("type a grade")

if(result <= 60 && result < 80){
    document.getElementById('red').innerHTML = "You had yellow";
} else if(result >= 80){
    document.getElementById("red").innerHTML="You had Green";

}else{
    document.getElementById('red').innerHTML="You had Red";
}

var a = 10; var b ="12";
if(a === b){
    console.log("hehwhei")
}*/ 

 let colors = ["red", "blue", "greem"];
 colors.forEach(function(x,y){ 
     console.log(x,y)

 })
colors.forEach((value, index)=>{
    console.log(value, index);
})