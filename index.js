let inputTodo = document.getElementById('input-todo');
let btnTodo = document.getElementById('btn-todo');
let main = document.getElementById('main');

btnTodo.addEventListener('click' , addTask);


function addTask() {
      let task = document.createElement('div');
      task.classList.add("task");

      let title = document.createElement('div');
      title.classList.add("title");
      title.textContent = inputTodo.value;
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
            const modif = prompt('EDit your task ');
            title.textContent = modif;
      })
}

document.getElementById("erase").addEventListener('click', () => {
      for (item of main.querySelectorAll(".task"))  {
            main.removeChild(item);
      }
})