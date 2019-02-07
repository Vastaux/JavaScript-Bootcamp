const todos = [
    {
        dayDue: 'Monday',
        text: 'Walk the dog',
        complete: false
    },
    {
        dayDue: 'Tuesday',
        text: 'Wash up',
        completed: false
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
    }
]

function deleteSelected(todoArray, todoText) {
    const index = todoArray.findIndex(function (todo, index) {
        return todo.text === todoText
})
todoArray.slice(index, 1)
}

console.log(todos)
console.log(deleteSelected(todos, 'Sleep'))
console.log(todos)

// function printList(todoArray) {
//     let itemPos = 1
//     todoArray.forEach(function (item, index) {
//     console.log(`${itemPos}. ${item}`)
//     itemPos += 1

// })
// }

// printList(todos)

// function printList1(todoArray) {
//     for (let index = 0; index < todoArray.length; index++) {
//         const item = todoArray[index];
//         console.log(`${index + 1}. ${item}`)
        
//     }
    
// }

// printList1(todos)