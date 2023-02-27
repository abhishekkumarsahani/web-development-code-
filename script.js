
//create function with name 
function validateForm()
			{
				var firstName = document.forms["messageForm"]["fname"].value;
				var lastName = document.forms["messageForm"]["lname"].value;
				var gender = document.forms["messageForm"]["genderDetails"].value;
				var messageDetails = document.forms["messageForm"]["message"].value;

				//alert(messageDetails);
				if (firstName == "" || lastName == "" || messageDetails == "") 
				{
					alert("Empty fields are present!!! Please enter the values...");
				}

				else
				{
					alert("Thank you for your feedback!!!")
				}
			}
			//date function
function displayDate(){
			document.getElementById('showdate').innerHTML = Date();
				setTimeout(displayDate,1000)
}