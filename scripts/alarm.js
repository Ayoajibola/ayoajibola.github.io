//This program that determines if it is a day to sleep in or not. 

  //INPUT (Input from computer's clock)
  //'Sleep in' days: Weekends and Holiday (Jan 1st, July 4th, Dec 25th)
  let now = new Date();
  let month = now.getMonth();
  let dayOfMonth = now.getDate();
  let dayOfWeek = now.getDay();
  let message;

  // PROCESSING
  if (((month === 0) && (dayOfMonth == 1)) 
    || ((month == 6) && (dayOfMonth == 4))
    || ((month == 11) && (dayOfMonth == 25)) 
    || (dayOfWeek == 1) || (dayOfWeek ==  6)) {
      message = document.getElementById('output').innerHTML = 'Sleep In!';
  } else {
      message = document.getElementById('output').innerHTML = 'Get Up!';
  }

  // OUTPUT
  message = 'value';