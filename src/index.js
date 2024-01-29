let todoList = []

const addTodoForm = document.getElementById("addTodoForm")
addTodoForm.addEventListener("submit", function handleNewTodo(e) {
    e.preventDefault()
    const newTodo = e.target.elements[0].value
    addNewTodo(newTodo)
})

function addNewTodo(newTodo) {
    todoList.push(newTodo)
    return todoList
}
