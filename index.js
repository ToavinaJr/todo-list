let inputTodo = document.getElementById('input-todo');
let btnTodo = document.getElementById('btn-todo');
let main = document.getElementById('main');

btnTodo.addEventListener('click' , addTask);


function addTask() {
      if (inputTodo.value !== "" && inputTodo.value.trim() !== "") {
            let task = document.createElement('div');
            task.classList.add("task");
      
            let title = document.createElement('div');
            title.classList.add("title");
            title.textContent = inputTodo.value.trim();
            inputTodo.value = ""
      
            let del = document.createElement('div');
            del.classList.add('delete');
            del.textContent = 'Delete';
      
            let edit = document.createElement('div');
            edit.classList.add('edit');
            edit.textContent = 'Edit';
      
            task.append(title, del, edit);
            main.append(task);
      
            del.addEventListener('click', () => {
                  main.removeChild(task)
            })
      
            edit.addEventListener('click', () => {
                  let modif = prompt('Edit your task name');
      
                  while (modif === "") {
                        modif = prompt('Edit your task name ');
                  }
      
                  title.textContent = modif;
            })
      }
      else {
            inputTodo.value = "";
      }   
}

document.getElementById("erase").addEventListener('click', () => {
      for (item of main.querySelectorAll(".task"))  {
            main.removeChild(item);
      }
}) 