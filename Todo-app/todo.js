class Todo {
    constructor(text, completed) {
        this.text = text,
            this.completed = completed
    }
}

const todo1 = new Todo('Order cat food', false)
const todo2 = new Todo('Clean kitchen', true)
const todo3 = new Todo('Buy food', true)
const todo4 = new Todo('Do work', false)
const todo5 = new Todo('Exercise', true)


const todos = [todo1, todo2, todo3, todo4, todo5]

const incompleteTodos = todos.filter(function (todo) {
    return !todo.completed;
})


const summary = document.createElement('h3')
summary.textContent = `You have ${incompleteTodos.length} todos left`;
document.querySelector('body').appendChild(summary)


todos.forEach( (todo) => {
    const p = document.createElement('p')
    p.textContent = todo.text
    document.querySelector('body').appendChild(p)
})

document.querySelector('.addTodo').addEventListener('click', function (e) {
    e.target.textContent = 'Button clicked'
})

document.querySelector('input').addEventListener('keyup', function (e) {
    console.log(e.target.value)
})