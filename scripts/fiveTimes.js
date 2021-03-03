// This program displays five times table from 1 to 12.

//INPUT
//Program takes numbers 1 to 12 amd multilies each by 5.

/*PROCESSING 
    Starting with number 1, It is multiplied by 5, the result is displayed
    then the next number 2, and so on*/
let result = " ";
let i = 1;
for (; i <= 12; i++) {
  result += "5 x " + i + " = " + 5 * i + "<br>";
}

//OUTPUT: The twelve lines of results are displayed together, line after line.
document.getElementById("output").innerHTML = result;
