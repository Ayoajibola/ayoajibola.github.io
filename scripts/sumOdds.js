function sumOdds() {
    /*This program asks the user for an integer n and then outputs the sum of all the
       odd integers between 1 and n, inclusive. */

    //INPUT Program accepts input from user.
    let n = parseInt(document.getElementById("number").value);

    /*PROCESSING For the entered integer, add all odd numbers between 1 and the integer
    inclusive */
    let sum = 0;
    let message;

    for (let i = 1; i <= n; i += 2) {
      sum += i;
    }
    sum = parseInt((document.getElementById("output").innerHTML = ('The sum of the odd numbers is ' +  sum)));

    //OUTPUT Display the sum of the added numbers.
    message = sum;
  }