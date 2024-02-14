function calculateRectangleArea(){
    // rectangle length
const rectangleLengthInput = document.getElementById('rectangle-length');
const rectangleLengthValue = rectangleLengthInput.value;
const length = parseFloat(rectangleLengthValue);

// rectangle width 
const rectangleWidthInput = document.getElementById('rectangle-width');
const rectangleWidthValue = rectangleWidthInput.value;
const width = parseFloat(rectangleWidthValue);

// calculate rectangle
const area = length * width;
console.log('area of the rectangle is:', area)

 // display triangle area
 const rectangleAreaSpan = document.getElementById('rectangle-area');
 rectangleAreaSpan.innerText = area;
}