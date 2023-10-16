// davaleba 1


function replace (string, valueToReplace, valueToReplaceWith) {
    let result = '';
    let index = 0;

    for (let i = 0; i < string.length; i++){
        if (string.slice(i, i + valueToReplace.length) === valueToReplace){
            result += string.slice(0, i) + valueToReplaceWith
            index = i + valueToReplace.length;
        }
    }

    result += string.slice(index)
    return result

}

console.log(replace("Lorem Ipsum", "em", "dum"))


// davaleba 2
const capitalString = (string) => {
            return string.map((string) => string.split(" ")
            .map((x) => x[0].toUpperCase() + x.slice(1))
            .join(" ")
        )
}



// davaleba 3
console.log(capitalString(["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."]))


const array = [{name: "Lasha", age: 30},
                 {name: "Saba", age: 20}]

array.sort(function(a,b) {return a.age - b.age}  )

console.log(array)