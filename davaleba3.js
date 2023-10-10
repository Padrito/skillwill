// დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს n ცალ რიცხვს (n > 2). ფუნქციამ
// უნდა დააბრუნოს 2 - ელემენტიანი მასივი,
// სადაც პირველი ელემენტია პირველი და
// მეორე პარამეტრის ჯამი, ხოლო მეორე
// ელემენტი - მესამე ელემენტიდან
// დაწყებული ყველა დანარჩენის ნამრავლი

const array = []

function calculate(num1, num2, ...args){
    let sum
    let multiply = 1

    for (const a of args){
        sum = num1 + num2,
        multiply *= a
    }

    array[0] = sum
    array[1] = multiply
    return array
    
}

console.log(calculate(1,2,3,4,5,6,7,8,9,10))


// დავუშვათ გვინდა ობიექტიდან
// წავიკითხოთ შემდეგი ველი:
// user.banks[2].address.city. დაწერე ფუნქცია,
// რომელიც პარამეტრად მიიღებს user
// ობიექტს და დააბრუნებს city-ს. გამოიყენე
// destructuring-ი. თუ ასეთი ველი არ
// არსებობს უნდა დაბრუნდეს undefined
const user = {
    banks: ['TBC', 'BOG', 
        {
            address: {
                city: 'Tbilisi'
            }
        }
    ]

}

const read = (user) => {
    const {banks: [, , { address: {city} = {} }]} = user
    return city
}

console.log(user.banks[2].address.city)
console.log(read(user))



// დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს ნებისმიერ ობიექტს და
// დააბრუნებს იგივე მნიშვნელობების მქონე
// ახალ (განსხვავებულ) ობიექტს
const a = {
    name: "Sandro",
    lastName: "Kakhadze",
    profile: {
        age: 31,
        hobby: "Skying"
    },
    address: {
        city: "tbilisi"
    }
}


let copyA = {}

const copy = (original) => {
    copyA = {
        ...a,
        profile: {
            ...a.profile
        },
        address: {
            ...a.address
        }
    }
    return copyA
}


console.log(copy(a))
a.profile.age = 55
console.log(a)
console.log(copyA)




