/* Defining Table
 * Input: no user input
 * Processing: Test the addEnds and getMiddle functions by calling them.
 * Output: The values returned from the addEnds and getMiddle functions.
 */
function test() {
  let list1 = [17, 8, 9, 5, 20];
  let list2 = [12, 4, 8, 15, 17, 5, 20, 11];

  // Test the addEnds function by calling it two times.
  let sum1 = addEnds(list1);
  let sum2 = addEnds(list2);

  // Test the getMiddle function by calling it two times.
  let mid1 = getMiddle(list1);
  let mid2 = getMiddle(list2);

  // Build a string to display to the user.
  let output = sum1 + "<br>" + sum2 + "<br>" + mid1 + "<br>" + mid2;

  // Display the output string for the user to see.
  document.getElementById("output").innerHTML = output;

  //This function adds up the first and last element of an array.
  function addEnds(list) {
    //INPUT: Input provided by function test().
    //Processing: Identify the first and last element.
    //then add together.
    let sum = list[0] + list[list.length - 1];
    //OUTPUT: Return result to the call point.
    return sum;
  }

  //This function determines the middle element of an array.
  function getMiddle(list) {
    //INPUT: Input provided by function test().
    //Processing: Determine if array lenght is odd or even,
    //then find the middle number.
    // sampleArray[0 1 2 3 4 5]
    if (list.length % 2 == 0) {
      let mid = (list[list.length / 2] + list[list.length / 2 - 1]) / 2;
      return mid;
    } else {
      let mid = list[((list.length + 1) / 2)-1];
      // Output: Return result to call point.
      return mid;
    }
  }
}
