/* Defining Table
 * Input: no user input
 * Processing: Test the countEvens and multiply functions by calling them.
 * Output: The values returned from the countEvens and multiply functions.
 */
function test() {
  let list1 = [17, 8, 9, 5, 20];
  let list2 = [12, 4, 8, 15, 17, 5, 20, 11];

  // Test the countEvens function by calling it two times.
  let count1 = countEvens(list1);
  let count2 = countEvens(list2);

  // Test the multiply function by calling it two times.
  let mult1 = multiply(list1, 3);
  let mult2 = multiply(list2, 4);

  // Build a string to display to the user.
  let output = count1 + "<br>" + count2 + "<br>" + mult1 + "<br>" + mult2;

  // Display the output string for the user to see.
  document.getElementById("output").innerHTML = output;
}

function countEvens(list) {
  //This function counts and returns the number of even integers in an array.
  //INPUT passed in from test() function

  let count = 0;
   /*PROCESSING Determine if an element is even, if yes count.
   Otherwise, skip and proceed to evaluate the next element */

  for (let i = 0; i < list.length; i++) {
    if (list[i] % 2 == 0) {
      count = count + 1;
    } else {
      continue;
    }
  }
   //OUTPUT: return output to test() function call point.
  return count;
}
//function to multiply each element in an array by some value and to return the products in an array.
function multiply(list, multiplier) {
  let mult = [];
  //INPUT passed in from test() function

  /*PROCESSING multiply each element of the array by the multiplier and replace
   the element with the product in a new array, mult[] */
  for (let i = 0; i < list.length; i++) {
    let swap = list[i] * multiplier;
    list[i] = mult[i];
    mult[i] = swap;
  }
  //OUTPUT: return output to test() function call point.
  return mult;
}




