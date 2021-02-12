/*JavaScript program helps a user choose the correct footwear for the
   weather.*/

   function rightFootWear() {
    
	/*INPUT: User provides the weather type*/
	 let x = document.getElementById('selectedWeather').value;
     
/*PROCESSING: Program accepts weather conditions input from user and 
output the appropriate shoes.*/
    
               
            if(x === "Hot") {
                document.getElementById('output').innerHTML = "The correct footwear is sandals!";
               
            } else if (x === "Rain"){
              document.getElementById('output').innerHTML = "The correct footwear is galoshes!";

            } else if (x === "Snow"){
              document.getElementById('output').innerHTML = "The correct footwear is boots!";
                    
            } else {
               document.getElementById('output').innerHTML = "The correct footwear is shoes!";
            }
/*PROCESSING: Program accepts weather conditions input from user and 
identifies the appropriate shoes.*/

                    
//OUTPUT: Displays the appropriate footwear.
       
        }
    