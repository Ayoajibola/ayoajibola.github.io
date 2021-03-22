/* This function accepts user inputs. Using another function, it displays the payment per period */

function doPayment() {
  // Input:// Accepts principal, annual rate, number of years and periods per year from user.
  let principal = parseInt(document.getElementById("principal").value);
  let annualRate = parseFloat(document.getElementById("annualRate").value);
  let years = parseInt(document.getElementById("years").value);
  let periodsPerYear = parseInt(
    document.getElementById("periodsPerYear").value
  );
  let p = computePayment(principal, annualRate, years, periodsPerYear);

  /* Processing: Call the function computePayment () which computes and returns the payment per period*/

  function computePayment(principal, annualRate, years, periodsPerYear) {
    let r = annualRate / periodsPerYear;
    let n = years * periodsPerYear;

    let p = ((principal * r) / (1 - Math.pow(1 + r, -n))).toFixed(2);

    return p;
  }

  /* Output: */
  document.getElementById("output").innerHTML =
    "The payment per period is " + p;
}

function doBalance() {
  let principal = parseInt(document.getElementById("principal").value);
  let annualRate = parseFloat(document.getElementById("annualRate").value);
  let years = parseInt(document.getElementById("years").value);
  let periodsPerYear = parseInt(
    document.getElementById("periodsPerYear").value
  );

  /* This function calculates the remaining payment balance after certain number of payments

     */

  // Input:// Accepts principal, annual rate, number of years and periods per year from user.
  // Accepts output from function doPayment() as additional input.

  let balance = computeBalance(
    principal,
    annualRate,
    years,
    periodsPerYear,
    numberOfPaymentPaidToDate
  );

  function computeBalance(
    principal,
    annualRate,
    years,
    periodsPerYear,
    numberOfPaymentPaidToDate
  ) {
    let a = principal;
    let r = annualRate / periodsPerYear;
    let n = years * periodsPerYear;

    let d = parseInt(
      document.getElementById("numberOfPaymentPaidToDate").value
    );
    let p = ((principal * r) / (1 - Math.pow(1 + r, -n))).toFixed(2);
    

    let balance = (a * Math.pow(1 + r, d) - (p *(Math.pow(1 + r, d) - 1)) / r ).toFixed(2);

    
    return balance;
  }

  /* Output: */
  document.getElementById("output").innerHTML =
    "The Payoff amount is " + balance;
}
