document.getElementById("form").addEventListener("submit", validateInputHere)
    function validateInputHere (){
            
        var username= document.getElementById('username').value;
        var useremail= document.getElementById('useremail').value;
        var usermessage1= document.getElementById('usermessage1').value;
       
        alert("You were born on " + username + "/" +useremail + "/" + usermessage1)
            }