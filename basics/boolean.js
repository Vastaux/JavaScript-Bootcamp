let age = 45

let child = age <= 7
let senior = age >= 65
let adult = child === false && senior === false

if (child) {
    console.log("You are entitled to child discount")
} else if (senior) {
    console.log("You are entitled to senior discount")
}

