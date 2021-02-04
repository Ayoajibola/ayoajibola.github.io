/*This JavaScript code accepts input as numbers in pounds
and convert to Kilogram*/
	function poundsToKilogram() {
	//INPUT: x is the number entered by user while y is the conversion factor
	 let x = parseFloat(document.getElementById("number").value);
	 const y = 0.453592;
    //PROCESSING: Convert number to kilogram by multiplying with the constant.
     let z = x*y;
	 let r = z.toFixed(1);
	//OUTPUT: Display the result in kilograms and rounded to 1 decimal place.
	 document.getElementById("output").innerHTML = r + " Kilograms";}
