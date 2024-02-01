import { 
    createArrowUp, 
    createArrowDown, 
    createDone, 
    createRemove 
} from "./utils/buttons.js"

let todoArr = []
let doneTodoArr = []

const addTodoForm = document.getElementById("addTodoForm")
addTodoForm.addEventListener("submit", function handleNewTodo(e) {
    e.preventDefault()
    const newTodo = e.target.elements[0].value
    addNewTodo(newTodo)
    const container = document.querySelector(".todoListContainer")
    container.innerHTML = ""
    renderTodoList()
})

function addNewTodo(newTodo) {
    todoArr.unshift(newTodo)
}

function completeTodo(todo) {
    console.log("todo completed: ", todo)
}

function renderTodoList() {
    const container = document.querySelector(".todoListContainer")
    const todoList = document.createElement("ul")
    
    todoArr.forEach((todoItem) => {
        const todo = document.createElement("li")
        const todoContainer = document.createElement("div")
        const todoText = document.createElement("span")
        const arrowUpButton = createArrowUp()
        const arrowDownButton = createArrowDown()
        const doneButton = createDone()
        const removeButton = createRemove()

        todoText.innerText = todoItem
        doneButton.addEventListener("click", () => completeTodo(todoItem))

        todoContainer.append(
            todoText, 
            arrowUpButton, 
            arrowDownButton, 
            doneButton,
            removeButton 
        )
        todo.appendChild(todoContainer)
        todoList.appendChild(todo)
    })
    container.appendChild(todoList)
}
