var topContent = document.querySelector("#top");
var bottomContent = document.querySelector("#bottom");

var topAndBottomMinHeight = 200;

/* 
    clientHeight includes the height and vertical padding.
    offsetHeight includes the height, vertical padding, and vertical borders.
    scrollHeight includes the height of the contained document (would be greater than just height in case of scrolling), vertical padding, and vertical borders.
*/

//This function will update the height of the top and bottom panel as we drag the resize dragger
function resizeTopBottom(event){
    
    //Check to make sure we haven't gone past minimum heights
    if(topContent.clientHeight + event.offsetY > topAndBottomMinHeight && 
        bottomContent.clientHeight - event.offsetY > topAndBottomMinHeight ){
    
        topContent.style.height = topContent.clientHeight + event.offsetY + 'px';
        bottomContent.style.height = bottomContent.clientHeight - event.offsetY + 'px';

    }

}