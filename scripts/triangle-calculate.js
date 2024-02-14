function calculateTriangleArea() {
    //get triangle base value
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText)
    // console.log(base);

    // get triangle height value
    const triangleHightInput = document.getElementById('triangle-hight');
    const triangleHeightText = triangleHightInput.value;
    const hight = parseFloat(triangleHeightText);
    // console.log(hight);

    // calculate triangle area
    const area = 0.5 * base * hight
    console.log('area of the triangle is:',area);

    // display triangle area
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;
}