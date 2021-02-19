function amountDue() {
    /*  This program determines what discount to give 
    customers at certain days of the week*/

     /*INPUT: 
     Customer’s subtotal, 
     Current day of the week from the Computer.*/
     
     let x = parseFloat(document.getElementById('subtotal').value);
     let dayOfWeek = new Date().getDay();         
     let y;
    

  // PROCESSING
  if ((x > 50) && ((dayOfWeek == 2) || (dayOfWeek == 3))) {
     y = (x - 0.1*x) + 0.06*(x - 0.1*x);
  } else {
     y = x + 0.06*x;
  }

  // OUTPUT: The total amount due by adding sales tax of 6% to the subtotal.
  document.getElementById('output').innerHTML= 'Amount due is $' + y.toFixed(2);
    
  }