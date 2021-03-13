/* This function uses another reusable function to take a temperature in Fahrenheit and 
    wind speed in miles per hour as parameters,calculate the wind chill factor as a temperature
     in Fahrenheit and output the wind chill factor in Fahrenheit */

     function doInputOutput() {
        // Input:// Get temperature and speed from the user.
        let tempF = parseInt(document.getElementById("temperature").value);
        let speed = parseInt(document.getElementById("windspeed").value);
  
        /* Processing: If temperature in farenheit is equal to or less than 50 and wind in 
        miles per hour is greater than or equal to 3, Call the windChill function. 
        */
  
        let factor = windChill(tempF, speed);
  
        if (tempF <= 50 && speed >= 3) {
          document.getElementById("output").innerHTML = factor;
        } else {
          document.getElementById("output").innerHTML =
            "Input values are not within specification!";
        }
  
        /* Output:The function windChill returns the wind chill in faremheit to the
        first function and same is provided as output */
  
        function windChill(tempF, speed) {
          let factor =
            35.74 +
            0.6215 * tempF -
            35.75 * speed ** 0.16 +
            0.4275 * tempF * speed ** 0.16;
          return factor;
        }
      }