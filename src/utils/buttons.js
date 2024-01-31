export function createArrowUp() {
    const container = document.createElement("div")
    const arrowUpButton = document.createElement("span")
 
    container.setAttribute("class", "arrowUpContainer")
    arrowUpButton.setAttribute("class", "material-icons")

    arrowUpButton.innerText = "arrow_upward"
    
    container.appendChild(arrowUpButton)
    return container
}

export function createArrowDown() {
    const container = document.createElement("div")
    const arrowDownButton = document.createElement("span")
 
    container.setAttribute("class", "arrowDownContainer")
    arrowDownButton.setAttribute("class", "material-icons")

    arrowDownButton.innerText = "arrow_downward"
    
    container.appendChild(arrowDownButton)
    return container
}

export function createRemove() {
    const container = document.createElement("div")
    const removeButton = document.createElement("span")
 
    container.setAttribute("class", "arrowUpContainer")
    removeButton.setAttribute("class", "material-icons")

    removeButton.innerText = "delete"
    
    container.appendChild(removeButton)
    return container
}

export function createDone() {
    const container = document.createElement("div")
    const doneButton = document.createElement("span")
 
    container.setAttribute("class", "arrowUpContainer")
    doneButton.setAttribute("class", "material-icons")

    doneButton.innerText = "done"
    
    container.appendChild(doneButton)
    return container
}

