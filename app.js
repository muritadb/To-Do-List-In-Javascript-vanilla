const inputAddTodo = document.querySelector('.form-add-todo')
const todosContainer = document.querySelector('.todos-container')
const InputSearchTodo = document.querySelector('.form-search input')

const addTodo = event => {
  event.preventDefault()

  const eventValue = event.target.add.value.trim()
  if (eventValue.length) {
    todosContainer.innerHTML += `
    <li class="list-group-item d-flex justify-content-between align-items-center" data-todo="${eventValue}">
      <span>${eventValue}</span>
      <i class="far fa-trash-alt" data-trash="${eventValue}"></i>
    </li>
    `
  }
  inputAddTodo.reset()
}

const removeTodo = event => {
  const clickedElement = event.target
  const trashIconElement = clickedElement.dataset.trash

  if (trashIconElement) {
    document.querySelector(`[data-todo="${trashIconElement}"]`).remove()
  }
}




const searchTodoItem = event => {
  const eventValue = event.target.value.toLowerCase().trim()

  Array.from(todosContainer.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(eventValue))
    .forEach(todo => {
      todo.classList.remove('d-flex')
      todo.classList.add('hidden')
    })
  Array.from(todosContainer.children)
    .filter(todo => todo.textContent.toLowerCase().includes(eventValue))
    .forEach(todo => {
      todo.classList.remove('hidden')
      todo.classList.add('d-flex')
    })
}



inputAddTodo.addEventListener('submit', addTodo)
todosContainer.addEventListener('click', removeTodo)
InputSearchTodo.addEventListener('input', searchTodoItem)
