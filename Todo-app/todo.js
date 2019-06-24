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

const hideCompleted = []

const filterTodos = {
    searchText: ''
}



function renderTodos(todos, filter) {
    const filteredTodo = todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filter.searchText.toLowerCase())
    })

    const incompleteTodos = filteredTodo.filter(function (todo) {
        return !todo.completed;
    })

    document.querySelector('.todos').textContent = ''

    const summary = document.createElement('h3')
    summary.textContent = `You have ${incompleteTodos.length} todos left`;
    document.querySelector('.todos').appendChild(summary)

    filteredTodo.forEach(element => {
       const p = document.createElement('p')
       p.textContent = element.text
       document.querySelector('.todos').appendChild(p)
    });
}

document.querySelector('.searchTodos').addEventListener('input', function (e) {
    filterTodos.searchText = e.target.value
    renderTodos(todos, filterTodos)
})

document.querySelector('#addTodoForm').addEventListener('submit', function (e) {
    e.preventDefault()
    const text = e.target.elements.addTodo.value
    const newTodo = new Todo(text, false)
    todos.push(newTodo)
    renderTodos(todos, filterTodos)
    e.target.elements.addTodo.value = ''
})

document.querySelector('#hideCompleted').addEventListener('change', function (e) {
    console.log(e.target.checked)
})

renderTodos(todos, filterTodos)