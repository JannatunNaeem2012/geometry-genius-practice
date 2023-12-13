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

// parallelogram area finder
function parallelogramAreaCalculate(){
    // get base 
    const parallelogramBase = getInputValue('parallelogram-base')
    // get height
    const parallelogramHeight = getInputValue('parallelogram-height')
    const parallelogramArea = parallelogramBase * parallelogramHeight

    // set the value
    setElementText('parallelogram-area-value', parallelogramArea)
}

// common function to get value from the input field
function getInputValue(inputFieldId){
    const inputField = document.getElementById(inputFieldId)
    const inputFieldValueString = inputField.value 
    const inputFieldValue = parseFloat(inputFieldValueString)
    return inputFieldValue
}

// common function to set the area value
function setElementText(elementId, calculatedArea){
    const element = document.getElementById(elementId)
    element.innerText = calculatedArea
}