import { createArrowUp, createArrowDown, createDone, createRemove } from "./utils/buttons.js"

let todoArr = []

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

function renderTodoList() {
    const container = document.querySelector(".todoListContainer")
    const todoList = document.createElement("ul")
    
    todoArr.forEach((todoItem) => {
        const todo = document.createElement("li")
        const todoContainer = document.createElement("div")
        const todoText = document.createElement("span")
        const arrowUpButton = createArrowUp()
        const arrowDownButton = createArrowDown()
        const removeButton = createRemove()
        const doneButton = createDone()

        todoText.innerText = todoItem

        todoContainer.append(todoText, arrowUpButton, arrowDownButton, removeButton, doneButton)
        todo.appendChild(todoContainer)
        todoList.appendChild(todo)
    })
    container.appendChild(todoList)
}
