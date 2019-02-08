const todos = [
    {
        dayDue: 'Monday',
        text: 'Walk the dog',
        complete: false
    },
    {
        dayDue: 'Tuesday',
        text: 'Wash up',
        completed: true
    },
    {
        dayDue: 'Wednesday',
        text: 'Sleep',
        completed: false
    },
    {
        dayDue: 'Thursday',
        text: 'Delete todos',
        completed: false
    },
    {
        dayDue: 'Friday',
        text: 'Go to school',
        completed: true
    }
]

const removeTodo = function (todos) {
    for (let index = 0; index < 2; index++) {
    const index = todos.findIndex(function (todo, index) {
        return todo.completed === true
    })
    todos.splice(index,1)
}
}
    
// const findNote = function (notes, noteTitle) {
//     const index = notes.findIndex(function (note, index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return notes[index]
// }

console.log(todos)
removeTodo(todos)
console.log(todos)

