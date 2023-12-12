function triangleAreaCalculate(){
    // get triangle base value
    const baseField = document.getElementById('triangle-base')
    const baseValue = baseField.value 
    const base = parseFloat(baseValue)

    // get triangle height value
    const heightField = document.getElementById('triangle-height')
    const heightValue = heightField.value
    const height = parseFloat(heightValue)
    
    const triangleArea = 0.5 * base * height
    
    // show the result
    const areaSpanTriangle = document.getElementById('triangle-area-value')
    areaSpanTriangle.innerText = triangleArea
}

function rectangleAreaCalculate(){
    // get rectangle width value
    const widthField = document.getElementById('rectangle-width')
    const widthValue = widthField.value 
    const width = parseFloat(widthValue)

    // get rectangle length value
    const lengthField = document.getElementById('rectangle-length')
    const lengthValue = lengthField.value
    const length = parseFloat(lengthValue)
    
    const rectangleArea = width * length
    
    // show the result
    const areaSpanrectangle = document.getElementById('rectangle-area-value')
    areaSpanrectangle.innerText = rectangleArea
}