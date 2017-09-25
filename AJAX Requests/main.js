var requestBtn = document.querySelector("#requestButton");

requestBtn.addEventListener('click', function (){
    console.log("Clicked");
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://www.github.com", true);
    
    xhr.onload = function(){
        console.log("onload callback");
        if(this.status === 200){
            console.log(this.responseText);
        }
    }

    xhr.onerror = function(){

    }

    console.log("Sending the request");
    xhr.send();
})