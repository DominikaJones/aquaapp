var domain = "http://127.0.0.1:5000"

window.onload = function()
{    
    console.log("DOM LOADED");    
    console.log("signup.js"); 
    var username = document.getElementById("username")
    var password = document.getElementById("password")
}

function signup()
{

    console.log("signup")
    var username = username.value
    var password = password.value
    params = "username="+n+"&password="+p
    console.log(username)
    console.log(password)

    var xhttp = new XMLHttpRequest(); 
    var url = domain+"/add?"+params      
    console.log(url)
    xhttp.open("POST", url , true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.responseType = 'json';
    xhttp.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200) {  
            console.log(this.response)
            if(this.response["status"]=="success")
            {
                console.log(this.response)
                window.location.replace("http://127.0.0.1:5000/static/quiz/quiz.html");
            }  
        }
    }  
    console.log(params)
    xhttp.send();
}