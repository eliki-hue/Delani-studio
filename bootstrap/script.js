$(document).ready(function(){
   
    var elementNumbers = ["1", "2", "3","4", "5", "6", "7", "8"]
  
      elementNumbers.forEach(function(element) {
          $("#whatWeDo"+ element).click(function() {
              $(this).hide()
              $('#hidden' + element ).show()
              
          })
  
          $('#hidden' + element).click(function(){
              $(this).hide()
              $('#whatWeDo' + element).show()
        
            });
      })

      elementNumbers.forEach(function(element) {
        $("#project"+ element).click(function() {
            
            $('#projectName' + element ).show()
            
        })

        $('#hidden' + element).click(function(){
            $(this).hide()
            $('#whatWeDo' + element).show()
      
          });
    })

      


  
  
  

  

 document.getElementById("form").addEventListener("submit", validateInputHere)
    function validateInputHere (){
            
        var username= document.getElementById('username').value;
        var useremail= document.getElementById('useremail').value;
             
        alert("hello, " + username + " we have received your message. Thank you for reaching out to us.")
            }


   
})