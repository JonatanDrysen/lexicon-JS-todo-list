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
    e.target.elements[0].value = ""
})

function addNewTodo(newTodo) {
    todoArr.unshift(newTodo)
}

function completeTodo(todo) {
    const index = todoArr.indexOf(todo)
    doneTodoArr.unshift(todo)
    todoArr.splice(index, 1)
    renderTodoList()
    renderDoneTodoList()
}

function removeTodo(todo) {
    console.log("remove todo...")
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

function renderDoneTodoList() {
    const container = document.querySelector(".doneTodoListContainer")
    const doneTodoList = document.createElement("ul")
    
    doneTodoArr.forEach((doneTodoItem) => {
        const doneTodo = document.createElement("li")
        const doneTodoContainer = document.createElement("div")
        const doneTodoText = document.createElement("span")
        const removeButton = createRemove()

        doneTodoText.innerText = doneTodoItem
        removeButton.addEventListener("click", () => removeTodo())

        doneTodoContainer.append(doneTodoText, removeButton)
        doneTodo.appendChild(doneTodoContainer)
        doneTodoList.appendChild(doneTodo)
    })
    container.appendChild(doneTodoList)
}
