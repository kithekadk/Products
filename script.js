let taskname = document.getElementById('taskname')
let description = document.querySelector('#desc')
let deadline = document.getElementById('deadline')
let submitbtn = document.querySelector('.btnsubmit');
let createTodoForm = document.getElementById('createTodoForm')

let Todos = [];

createTodoForm.addEventListener('submit', (e)=>{
    e.preventDefault()

    task = taskname.value
    desc = description.value
    dateline = deadline.value

    let todo = {
        todoname: task,
        tododescription: desc,
        tododeadline: dateline
    }
    console.log(Todos);

    Todos.push(todo)

    console.log(Todos);

    displayTodos()
})


function displayTodos(){

    let todosContainer = document.querySelectorAll('.todosContainer .singletodo')

    todosContainer.forEach(element=>{
        element.remove()
    })

    Todos.forEach(el=>{

        let name = document.createElement('p')
        name.textContent = el.todoname

        let description = document.createElement('p')
        description.textContent = el.tododescription

        let deadline = document.createElement('p')
        deadline.textContent = el.tododeadline

        let todoDiv = document.createElement('div')
        todoDiv.className = 'singletodo'

        todoDiv.appendChild(name)
        todoDiv.appendChild(description)
        todoDiv.appendChild(deadline)


        let todosContainer = document.querySelector('.todosContainer')
        todosContainer.appendChild(todoDiv)
    })

}