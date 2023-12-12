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
    
}