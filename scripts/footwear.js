/*JavaScript program helps a user choose the correct footwear for the
   weather.*/

   function rightFootWear() {
    
	/*INPUT: User provides the weather type*/
	 
   
   /*PROCESSING: Program accepts weather conditions input from user and 
identifies the appropriate shoes.*/
let x = document.getElementById('selectedWeather').value;
                    
//OUTPUT: Displays the appropriate footwear.
               
            if(x === "Hot") {
                document.getElementById('output').innerHTML = "The correct footwear is sandals!";
               
            } else if (x === "Rain"){
              document.getElementById('output').innerHTML = "The correct footwear is galoshes!";

            } else if (x === "Snow"){
              document.getElementById('output').innerHTML = "The correct footwear is boots!";
                    
            } else {
               document.getElementById('output').innerHTML = "The correct footwear is shoes!";
            }

       
        }
    