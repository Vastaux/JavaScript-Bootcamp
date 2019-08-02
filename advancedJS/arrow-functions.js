const people = [{
    name: 'Andrew',
    age: 27
}, {
    name: 'Stuart',
    age: 28
}, {
    name: 'Vikras',
    age: 22
}]

const isTwentyTwo = people.filter((person) => person.age === 22)
console.log(isTwentyTwo)