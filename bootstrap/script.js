document.getElementById("form").addEventListener("submit", validateInputHere)
    function validateInputHere (){
            
        var username= document.getElementById('username').value;
        var useremail= document.getElementById('useremail').value;
             
        alert("hello, " + username + " we have received your message. Thank you for reaching out to us.")
            }

$(document).ready(function(){
   
  
    $('#whatWeDo1').click(function(){
        $(this).hide()
        $('#hidden1').show()
        
    })
    $('#whatWeDo2').click(function(){
        $(this).hide()
        $('#hidden2').show()
        
    })
    $('#whatWeDo3').click(function(){
        $(this).hide()
        $('#hidden3').show()
        
    })


    $('#hidden1').click(function(){
        $(this).hide()
        $('#whatWeDo1').show()
        
    })
    $('#hidden2').click(function(){
        $(this).hide()
        $('#whatWeDo2').show()
        
    })
    $('#hidden3').click(function(){
        $(this).hide()
        $('#whatWeDo3').show()
        
    })
    
        
   
})