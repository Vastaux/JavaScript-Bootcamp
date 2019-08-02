class Todo {
    constructor(id, text, completed) {
        this.id = id,
        this.text = text,
        this.completed = completed
    }
}

const todos = getSavedTodos();

const filterTodos = {
    searchText: '',
    hideCompleted: false
}



document.querySelector('.searchTodos').addEventListener('input', (e) => {
    filterTodos.searchText = e.target.value
    renderTodos(todos, filterTodos)
})

document.querySelector('#addTodoForm').addEventListener('submit',(e) => {
    e.preventDefault()
    const text = e.target.elements.addTodo.value
    const newTodo = new Todo(uuidv4(), text, false)
    todos.push(newTodo)
    saveTodos(todos)
    renderTodos(todos, filterTodos)
    e.target.elements.addTodo.value = ''
})

document.querySelector('#hideCompleted').addEventListener('change', (e) => {
    filterTodos.hideCompleted = e.target.checked
    console.log(e.target)
    renderTodos(todos, filterTodos)
})

renderTodos(todos, filterTodos)