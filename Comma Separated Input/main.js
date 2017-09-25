console.log("JS Working");

var textInput = document.querySelector("#textInput");
var catList = document.querySelector("#categoriesList");
var categories = [];

textInput.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 188) {
        if(this.value.length < 2){
            console.log("Category Name is required");
            this.value = "";
        }
        else {
            var category = this.value.substring(0, this.value.length-1);
            categories.push(category);
            this.value = "";
            reloadCategories();
        }
    }
});

function reloadCategories(){
    console.log(categories.length);
    catList.innerHTML = "";
    for(var i = 0; i < categories.length; i++){
        console.log(categories[i]);
        catList.innerHTML += `<li>${categories[i]}</li>`;
    }
}