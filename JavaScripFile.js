function upDate(previewPic) {
    console.log("Mouse over event triggered.");
    
    // Log the alt and src attributes of the hovered image
    console.log("Alt text: " + previewPic.alt);
    console.log("Source: " + previewPic.src);
        
    let imageDiv = document.getElementById('image');
    imageDiv.innerHTML = previewPic.alt;
    
    // Change the background image of the element with the id of 'image'
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    imageDiv.style.backgroundSize = "cover";  // Make sure the image fits the div
}

function undo() {
    let imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = "none";
    
    imageDiv.innerHTML = "Hover over an image below to display here.";
}
