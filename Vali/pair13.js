// Basic Exercises 

// Exercise1
var min = -5;
var max = 25;
//var c = prompt("Type a degree temperature")

  
var random =Math.floor(Math.random() * (+max - +min)) + +min; 
//document.write("The generated random temperature is:", random)

document.write("The generated temperature is:",random +"c")
if ( random <= 10) 
{
    document.getElementById('temperature').innerHTML = "The weather is cold";
} 
else 
{
    document.getElementById('temperature').innerHTML = "The weather is moderate";
}
    
// Exercise 2
var array = [1, 7, -3, 9];
if (array[0] < array[3] && array[1] < array[3] && array[2] < array[3]) {
    document.getElementById('highest_value').innerHTML ="The highest vaulue is: 9"
}

// Exercise 

function grades(Martin, Thomas, Klaus, Maria, David) 
{
    let grades_array = [Martin, Thomas, Klaus, Maria, David];
    value_of_grades = [76,85,65,93,81];
    document.getElementById('Uni_grades');
    document.getElementById("gradeF").innerHTML;
    document.getElementById("gradeD").innerHTML;
    document.getElementById("gradeC").innerHTML;
    document.getElementById("gradeB").innerHTML;
    document.getElementById("gradeB").innerHTML;

    for (value_of_grades of grades){
        if(value_of_grades < 60){
            document.getElementById("gradeF").innerHTML;
        }
        else if(value_of_grades <= 60 && value_of_grades< 70){
            document.getElementById("gradeD").innerHTML;
        }
        else if(value_of_grades <= 70 && value_of_grades< 80){
            document.getElementById("gradeC").innerHTML;
        }
        else if(value_of_grades <=80 && value_of_grades <90){
            document.getElementById("gradeB").innerHTML="The value of the grade is:";
        }
        else {
            document.getElementById('gradeA').innerHTML;
        }

    }
    
        
  
}
grades(76,85,65,93,81)
