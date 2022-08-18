


function ValidateEmail(email)
{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.value.match(mailformat))
    {   return true;    }
    else{
        document.getElementById('error').innerHTML = 'Please provide a valid email';
        document.getElementById('error-icon').style.visibility ="visible";
        document.getElementById('email-input').style.border = "2px solid hsl(0, 93%, 68%)"
        setTimeout(function(){
            document.getElementById('error').innerHTML = '&nbsp';
        document.getElementById('error-icon').style.visibility ="hidden";
        },3000)
        return false;
    }
}