let pound, second; //declare variables 'pound' and 'second'
let compute = 0; //initialized 'compute' variable to store the results of the conversion.
let kg = 0.45359237; //Define the conversion factor from founds to kg.
function computeValue(){ //To calculate and display the value of pounds in kilogram
    
    pound = parseInt(document.getElementById("pounds").value); //Get the input value from the element with id 'pound' and convert it to the an integer. 
    compute = pound * kg; //Multiply the input value
    document.getElementById("output").value = compute; 
}

document.getElementById("btncompute").addEventListener("click", computeValue);