let currentTabIndex = 1;

function select(index){
    if(currentTabIndex !== index){
        //Get previous and new active tabs
        const previouslySelected = document.querySelector(`.nav-items .nav-item:nth-child(${currentTabIndex})`);
        const newlySelected = document.querySelector(`.nav-items .nav-item:nth-child(${index})`);
        //Update classes
        previouslySelected.classList.remove("active");
        newlySelected.classList.add("active");
        currentTabIndex = index;
    }
}