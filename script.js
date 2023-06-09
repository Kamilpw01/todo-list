//selector
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-List');
const filterOption = document.querySelector('.filter-todo');

//event listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);


//functions

function addTodo(event) {
   //Prevent form from submitting
   event.preventDefault();

   //Todo DIV
   const todoDiv = document.createElement('div');
   todoDiv.classList.add('todo');

   //create LI
   const newTodo = document.createElement('li');
   newTodo.innerText = todoInput.value;
   newTodo.classList.add('todo-item');
   todoDiv.appendChild(newTodo);

   //CHECK MARK BUTTON
   const completeButton = document.createElement('button');
   completeButton.innerHTML = '<i class="fas fa-check"></i>';
   completeButton.classList.add('complete-btn');
   todoDiv.appendChild(completeButton);

   //CHECK trash BUTTON
   const trashButton = document.createElement('button');
   trashButton.innerHTML = '<i class="fas fa-trash"></i>';
   trashButton.classList.add('trash-btn');
   todoDiv.appendChild(trashButton);

   // APPEND DIV TO LIST
   todoList.appendChild(todoDiv);

   //clear todo INPUT VALUE
   todoInput.value = '';


}

function deleteCheck(e) {
   const item = e.target;
   //DELETE TODO
   if (item.classList[0] === 'trash-btn') {
      const todo = item.parentElement;
      //animation

      todo.classList.add("fall");
      todo.addEventListener('transitionend', function () {
         todo.remove();
      });

   }

   //CHECK MARK
   if (item.classList[0] === 'complete-btn') {
      const todo = item.parentElement;
      todo.classList.toggle('completed');
   }
}

function filterTodo(e) {
   const todos = todoList.childNodes;
   todos.forEach(function (todo) {
      switch (e.target.value) {
         case "all":
            todo.style.display = "flex";
            break;
         case "completed":
            if (todo.classList.contains("completed")) {
               todo.style.display = "flex";
            } else {
               todo.style.display = "none";
            }
      }
   });
}