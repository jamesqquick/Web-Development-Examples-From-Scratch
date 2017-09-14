var rightSide = document.querySelector('#right-side');
var leftSide = document.querySelector('#left-side');

var sideMinWidth = 250;

//Margins must be set in JS before they can be referenced below...weird
rightSide.style.marginLeft = '250px';

/* 
    clientWidth includes the Width and vertical padding.
    offsetWidth includes the Width, vertical padding, and vertical borders.
    scrollWidth includes the Width of the contained document (would be greater than just Width in case of scrolling), vertical padding, and vertical borders.
*/


//This function will change the width of the side-panel as well as the the width and 
//margin-left properties of the main content
function resizeLeftRight(event) {
    var mainMarginLeft = parseInt(rightSide.style.marginLeft);

    if(leftSide.clientWidth + event.offsetX > sideMinWidth &&
            rightSide.clientWidth - event.offsetX > sideMinWidth){
    
        leftSide.style.width = leftSide.clientWidth + event.offsetX + 'px';
        rightSide.style.marginLeft = mainMarginLeft + event.offsetX + 'px';
        rightSide.style.width = rightSide.clientWidth - event.offsetX + 'px';

    }
}