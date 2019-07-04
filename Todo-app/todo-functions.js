const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos')

    if (todosJSON !== null) {
        return JSON.parse(todosJSON)
    } else {
        return []
    }

}

const completeTodo = function (id, ) {
    const todoIndex = todos.findIndex(function (todo) {
        return todo.id === id
    })
    if (todoIndex > -1) {
        if (todos[todoIndex].completed === false) {
            todos[todoIndex].completed = true;
        } else {
            todos[todoIndex].completed = false;
        }
    }
}

const removeTodo = function (id) {
    const todoIndex = todos.findIndex(function (todo) {
        return todo.id === id
    })
    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

function filterSavedTodos(todos, filter) {
    const filteredTodo = todos.filter(function (todo) {
        if (filter.hideCompleted === true) {
            return (todo.text.toLowerCase().includes(filter.searchText.toLowerCase()) && !todo.completed)
        } else {

            return todo.text.toLowerCase().includes(filter.searchText.toLowerCase())
        }
    })
    return filteredTodo
}

function generateSummaryDOM(incompleteTodos) {
    const summary = document.createElement('h3')
    summary.textContent = `You have ${incompleteTodos.length} todos left`;
    document.querySelector('.todos').appendChild(summary)

}

function generateTodoDOM(todo) {
    const todoEl = document.createElement('div');
    const delButton = createElement('delButton')
    const completeCheckbox = createElement('completeCheckbox')

    delButton.addEventListener('click', function (e) {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filterTodos)
    })

    if (todo.completed === true) {
        completeCheckbox.checked = true;
    }

    completeCheckbox.addEventListener('change', function (e) {

        completeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filterTodos)

    })


    if (todo.text.length  > 0) {
        todoEl.textContent = todo.text
    } else {
        todoEl.textContent = 'Unnamed todo'
    }

    todoEl.prepend(delButton)
    todoEl.append(completeCheckbox)

    return todoEl
}

function createElement(elementType) {
    switch (elementType) {
        case 'completeCheckbox':
            const completeCheckbox = document.createElement('input');
            completeCheckbox.type = 'checkbox';

            return completeCheckbox
            break;
        case 'delButton':
            const delButton = document.createElement('button');
            delButton.textContent = 'x'
            delButton.id = 'delButton';

            return delButton
            break;
        default:
            console.log('No element')
            break;
    }
}

function renderTodos(todos, filter) {
    const filteredTodo = filterSavedTodos(todos, filter);

    const incompleteTodos = filteredTodo.filter(function (todo) {
        
        return !todo.completed;
    })

    document.querySelector('.todos').textContent = ''

    generateSummaryDOM(incompleteTodos)

    filteredTodo.forEach(element => {
        const todoEl = generateTodoDOM(element)
        document.querySelector('.todos').appendChild(todoEl)
    });
}

function saveTodos(todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}