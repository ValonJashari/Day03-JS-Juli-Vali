function grades(Martin, Thomas, Klaus, Maria, David) 
{
    let a = [Martin, Thomas, Klaus, Maria, David];
    value_of_grades = [76,85,65,93,81];
    document.getElementById('students');
    document.getElementById('martin');
    document.getElementById('thomas');
    document.getElementById('klaus');
    document.getElementById('maria');
    document.getElementById('david');
    document.getElementById('Uni_grades');
    
    for(let points=0; points < grades.length; points++) {
        console.log("cd")
        if(a[points] <60){
            document.getElementById("output").innerHTML+="F<br>";
            

        }
        else if(a[points] >=60 && a[points] <70){
            document.getElementById("output").innerHTML+="D<br>";


        }
        else if(a[points] >=70 && a[points] <80){
            document.getElementById("output").innerHTML+="C<br>";

        }
        else if(a[points] >=80 && a[points] <90){
            document.getElementById("output").innerHTML+="B<br>";

        }
        else {
            document.getElementById("output").innerHTML+="A<br>";
        }
    }


    
    sum = (value_of_grades[0] + value_of_grades[1] +value_of_grades[2] + value_of_grades[3] +value_of_grades[4] )/5
    document.getElementById('avg_class').innerHTML="The average of the class: B";
    console.log(sum)
    
    
        
  
}
grades(76,85,65,93,81)
