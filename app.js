const addTodo = document.querySelector('.form-add-todo')
const todosContainer = document.querySelector('.todos-container')

// console.log(form)

addTodo.addEventListener('submit', event => {
  event.preventDefault()

  const eventValue = event.target.add.value.trim()

  //acidiona itens a lista do TODO
  todosContainer.innerHTML += ` <li class="list-group-item d-flex justify-content-between align-items-center" data-todo="${eventValue}">
  <span>${eventValue}</span>
  <i class="far fa-trash-alt delete" data-trash="${eventValue}"></i>
</li>`
})

todosContainer.addEventListener('click', event => {
  const eventTarget = event.target

  if (eventTarget.dataset.trash) {
    document.querySelector('li[data-todo]').remove()
  }
})