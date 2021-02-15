 /*This javaScript programme performes arithmetic operation on two numbers and the arithmetic operator
  provided by the user. The result   of the calculation is then compared with that of the user and 
  then a declaration is made  as to whether the user is correct or wrong*/

function calculate() {
    /*INPUT: User provides the numbers to be operated upon and chooses the operator.
user also inputs the result*/
    let x = parseFloat(document.getElementById('number1').value);
    let y = document.getElementById('operator').value;
    let z = parseFloat(document.getElementById('number2').value);
    let w = parseFloat(document.getElementById('result').value);

   
   

    //PROCESSING: Calculation is done based on the four variables provided.
   
    let r = 0;  

    switch (y) {
        case '+':
            r = x + z;
            break
        case '-':
            r = x - z;
            break
        case '/':
            r = x / z;
            break
        case '*':
            r = x * z;
            
    }
 //Compare program result with that of user.
  //OUTPUT: Indicate if user is right or otherwise.

 
    if(r === w) {
        document.getElementById('output').innerHTML = "Correct!";
       
    } else {
      document.getElementById('output').innerHTML = "Incorrect!";
    }
    
   
}