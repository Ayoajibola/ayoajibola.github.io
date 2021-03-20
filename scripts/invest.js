/* This function accepts user inputs. Using another function, it displays the future value after 
    the specified total number of periods */

    function doFV() {
        // Input:// Accepts principal, annual rate, number of years and periods per year from user.
        let principal = parseInt(document.getElementById("principal").value);
        let annualRate = parseFloat(document.getElementById("annualRate").value);
        let years = parseInt(document.getElementById("years").value);
        let periodsPerYear = parseInt(document.getElementById("periodsPerYear").value);
  
        /* Processing: Call the function computeFutureValue () which computes and returns the future
         value of an investment. */
  
        let futureValue = computeFutureValue(
          principal,
          annualRate,
          years,
          periodsPerYear
        );
  
        function computeFutureValue(
          principal,
          annualRate,
          years,
          periodsPerYear
        ) {
          let futureValue = (
            principal *
            (1 + annualRate / periodsPerYear) ** (years * periodsPerYear)
          ).toFixed(2);
  
          return futureValue;
        }
  
        /* Output:The function doFV() outputs the future value based on the 
        period specified */
        document.getElementById("output").innerHTML =
          "The future value after " + years + " is " + futureValue;
      }