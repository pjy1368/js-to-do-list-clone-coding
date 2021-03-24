// selectors
const todoInput = document.querySelector('.todo_input');
const todoButton = document.querySelector('.todo_button');
const todoList = document.querySelector('.todo_list');
const filterOption = document.querySelector('.filter_todo');

// event listeners
todoButton.addEventListener("click", addTodo)
todoList.addEventListener("click", deleteCheck)
filterOption.addEventListener("click", filterTodo)

// functions
function addTodo(event) {
    event.preventDefault();

    // todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo'); // <div class="todo"></div>
    // todoDiv.classList.add('todo2'); -> 클래스를 여러 개 가질 수 있음.

    // todo LI 
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo_item'); // <li class="todo_item"</li>
    todoDiv.appendChild(newTodo); // div 여는 tag와 닫는 tag 사이에 li가 들어감.
    if (todoInput.value === "") {
        return null
    }

    // check mark BUTTON
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete_btn')
    todoDiv.appendChild(completedButton);

    // delete BUTTON
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add('delete_btn')
    todoDiv.appendChild(deleteButton);

    // Append to Actual LIST
    todoList.appendChild(todoDiv);

    // Clear todo input VALUE
    todoInput.value = ""
}

// DELETE & CHECK
function deleteCheck(e) {
    const item = e.target; // 이벤트를 실행한 주체

    // DELETE ITEM
    if (item.classList[0] === "delete_btn") {
        const todo = item.parentElement; // item이 <botton>이고, 이것의 부모인 <div>가 todo.

        // ANIMATION TRANSITION
        todo.classList.add("fall")
        todo.addEventListener('transitionend', function () {
            todo.remove()
        })
    }

    // COMPLETE ITEM
    if (item.classList[0] === "complete_btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completedItem")
    }
}

// FILTERING THE TASKS ACCORDING THE OPTION
function filterTodo(e) {
    const todos = todoList.childNodes;
    for (let i = 0; i < todos.length; i++) {
        switch (e.target.value) {
            case "all":
                todos[i].style.display = "flex";
                break;
            case "completed":
                if (todos[i].classList.contains('completedItem')) {
                    todos[i].style.display = "flex";
                } else {
                    todos[i].style.display = "none";
                }
                break;
            case "uncompleted":
                if (!todos[i].classList.contains('completedItem')) {
                    todos[i].style.display = "flex";
                } else {
                    todos[i].style.display = "none";
                }
                break;
        }
    }
}
