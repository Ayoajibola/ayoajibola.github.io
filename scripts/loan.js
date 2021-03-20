/* This function accepts user inputs. Using another function, it displays the payment per period */

function doPayment() {
  // Input:// Accepts principal, annual rate, number of years and periods per year from user.
  let principal = parseInt(document.getElementById("principal").value);
  let annualRate = parseFloat(document.getElementById("annualRate").value);
  let years = parseInt(document.getElementById("years").value);
  let periodsPerYear = parseInt(
    document.getElementById("periodsPerYear").value
  );

  /* Processing: Call the function computePayment () which computes and returns the payment per period*/
  let paymentPerPeriod;

  function computePayment(principal, annualRate, years, periodsPerYear) {
    paymentPerPeriod = (
      (principal * (annualRate / periodsPerYear)) /
      (1 - (1 + (annualRate / periodsPerYear) ** -(years * periodsPerYear)))
    ).toFixed(2);

    return paymentPerPeriod;
  }

  /* Output: */
  document.getElementById("output").innerHTML =
    "The payment per period is " + paymentPerPeriod;
}

function doBalance() {
  /* This function calculates the remaining payment balance after certain number of payments
   */

  // Input:// Accepts principal, annual rate, number of years and periods per year from user.
  // Accepts output from function doPayment() as additional input.
  let numberOfPaymentPaidToDate = parseInt(
    document.getElementById("numberOfPaymentPaidToDate").value
  );

  let balance;

  function computeBalance(
    principal,
    annualRate,
    years,
    periodsPerYear,
    numberOfPaymentPaidToDate
  ) {
    let paymentPerPeriod = (
      (principal * (annualRate / periodsPerYear)) /
      (1 - (1 + (annualRate / periodsPerYear) ** -(years * periodsPerYear)))
    ).toFixed(2);

    balance = (
      principal *
        (1 + annualRate / periodsPerYear) ** numberOfPaymentPaidToDate -
      (paymentPerPeriod *
        (1 + annualRate / periodsPerYear) ** numberOfPaymentPaidToDate -
        1) /
        annualRate /
        periodsPerYear
    ).toFixed(2);

    return balance;
  }

  /* Output: */
  document.getElementById("output").innerHTML =
    "The Payoff amount is " + balance;
}
