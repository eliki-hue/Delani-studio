document.getElementById("form").addEventListener("submit", validateInputHere)
    function validateInputHere (){
            
        var username= document.getElementById('username').value;
        var useremail= document.getElementById('useremail').value;
             
        alert("hello, " + username + " we have received your message. Thank you for reaching out to us.")
            }

$(document).ready(function(){
    $('p').click(function(){
        alert("this is a paragraph")
    });
    $('#whatWeDo11').click(function(){
        alert("you touched me")
    })
    $('#whatWeDo12').click(function(){
        alert("you touched me")
    })
    $('#whatWeDo13').click(function(){
        alert("you touched me")
    })
})