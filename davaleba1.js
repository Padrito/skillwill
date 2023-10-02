// function to check if a is equal to b
function equal(a, b) {
    if (a === b) {
        console.log ('equal') 
    } else {
        console.log ('not equal')
    }
}

equal (5, '5');


// Faranheit to Celsius
function faranheitToCelsius(f) {
    if (typeof f === "number") {
        let celsius = (f - 32) * 5/9;
        console.log('temperature is ' + celsius + " celsius");
    } else {
        console.log("please enter number")
    }
}

faranheitToCelsius("100")




// calculator 
let operation = "%" 
let answer

function calculator (a,b) {
    if (typeof a === "number" && typeof b === "number" ) {
        if ( operation === "+") {
            answer = a + b
            console.log(a + operation + b + "=" + answer)
        }
        if ( operation === "-"){
            answer = a - b
            console.log(a + operation + b + "=" + answer)
        }
        if ( operation === "*") {
            answer = a * b
            console.log(a + operation + b + "=" + answer)
        }
        if ( operation === "/" ) {
            answer = a / b
            console.log(a + operation + b + "=" + answer)
        }else {
            console.log("false")
        }
    } else {
        console.log("false")
    }
}

calculator(4,"7")