let currentTabIndex = 1;

function select(index){
    console.log("selected " + index);
    console.log("this", this);
    if(currentTabIndex !== index){
        const previouslySelected = document.querySelector(`.nav-items .nav-item:nth-child(${currentTabIndex})`);
        const newlySelected = document.querySelector(`.nav-items .nav-item:nth-child(${index})`);
        console.log(previouslySelected);
        previouslySelected.classList.remove("active");
        newlySelected.classList.add("active");
        currentTabIndex = index;
    }
}