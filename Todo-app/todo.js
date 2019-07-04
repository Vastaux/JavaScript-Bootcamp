class Todo {
    constructor(text, completed) {
        this.text = text,
        this.completed = completed
    }
}

const todos = getSavedTodos();

const filterTodos = {
    searchText: '',
    hideCompleted: false
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
    saveTodos(todos)
    renderTodos(todos, filterTodos)
    e.target.elements.addTodo.value = ''
})

document.querySelector('#hideCompleted').addEventListener('change', function (e) {
    filterTodos.hideCompleted = e.target.checked

    renderTodos(todos, filterTodos)
})

renderTodos(todos, filterTodos)