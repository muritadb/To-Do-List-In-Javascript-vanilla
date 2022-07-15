const formTodo = document.querySelector('.form-add-todo')
const todosContainer = document.querySelector('.todos-container')
const searchTodo = document.querySelector('.form-search')
// const todo = document.querySelectorAll('li[data-todo]')

// console.log(form)
const addTodo = eventValue => {
  todosContainer.innerHTML += `
  <li class="list-group-item d-flex justify-content-between align-items-center" data-todo="${eventValue}">
  <span>${eventValue}</span>
  <i class="far fa-trash-alt delete" data-trash="${eventValue}"></i>
  </li>
  `

}


formTodo.addEventListener('submit', event => {
  event.preventDefault()

  const eventValue = event.target.add.value.trim()
  //acidiona itens a lista do TODO
  addTodo(eventValue)
  event.target.reset()
})

todosContainer.addEventListener('click', event => {
  const eventTarget = event.target

  if (eventTarget.dataset.trash) {
    document.querySelector(`li[data-todo]`).remove()
  }
})

searchTodo.addEventListener('input', event => {
  const inputValue = event.target.value.trim().toLowerCase()

  Array.from(todosContainer.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(inputValue))
    .forEach(todo => {
      todo.classList.remove('d-flex')
      todo.classList.add('hidden')
    })
  Array.from(todosContainer.children)
    .filter(todo => todo.textContent.toLowerCase().includes(inputValue))
    .forEach(todo => {
      todo.classList.remove('hidden')
      todo.classList.add('d-flex')
    })
})