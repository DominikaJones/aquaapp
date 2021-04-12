var domain = ""

window.onload = function()
{    
    console.log("DOM LOADED");    
    var username = document.getElementById("username");
    var password = document.getElementById("password");
}

function submit()
{

    var  username= username.value
    var password = password.value
    console.log(username)
    console.log(password)

    var xhttp = new XMLHttpRequest(); 
    var url = domain+"/confirmlogin"+"?name="+username+"&password="+l; 
    console.log(url)
    xhttp.open("GET", url , true);
    xhttp.setRequestHeader("Content-type", "application/json;charset=UTF-8");
    xhttp.responseType = 'json';
    xhttp.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200) {  
            console.log(this.response)
            if(this.response["status"]=="success")
            {
                console.log(this.response)
                window.location.replace("http://127.0.0.1:5000/static/welcome.html");
            }            
        }
    }  
    xhttp.send();
}