class Todo {
    constructor(text, completed) {
        this.text = text,
        this.completed = completed
    }
}

let todos = []



const filterTodos = {
    searchText: '',
    hideCompleted: false
}

//Check for data

const todosJSON = localStorage.getItem('todos')

if (todosJSON !== null) {
    todos = JSON.parse(todosJSON)
}


function renderTodos(todos, filter) {
    const filteredTodo = todos.filter(function (todo) {
        if (filter.hideCompleted === true) {
            return (todo.text.toLowerCase().includes(filter.searchText.toLowerCase()) && !todo.completed)
        } else {

        return todo.text.toLowerCase().includes(filter.searchText.toLowerCase())
        }
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
       if (element.text.length  > 0) {
            p.textContent = element.text
       } else {
           p.textContent = 'Unnamed todo'
       }
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
    localStorage.setItem('todos', JSON.stringify(todos))
    renderTodos(todos, filterTodos)
    e.target.elements.addTodo.value = ''
})

document.querySelector('#hideCompleted').addEventListener('change', function (e) {
    filterTodos.hideCompleted = e.target.checked

    renderTodos(todos, filterTodos)
})

renderTodos(todos, filterTodos)