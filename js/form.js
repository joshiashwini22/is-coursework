/*External JavaScript for form contact validation*/
function validateForm()
{
  var name = document.forms["contactForm"]["name"].value;
  var email = document.forms["contactForm"]["email"].value;
  var message = document.forms["contactForm"]["message"].value;

  //alert message if name email and message have values or not
  if(name=="" || email=="" || message=="")
  {
   alert("Please enter the values!!");
  }
  else
  {
    alert("Thank you for your feedback!!!");
  }
}