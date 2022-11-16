function newTask() {
    const list = document.createElement('li');
    const listValue = document.todo_list.task.value;
    const inputText = document.createTextNode(listValue);
    list.appendChild(inputText);
    document.querySelector('ul').appendChild(list);
    document.todo_list.task.value = "";
  
    deleteTask(list);
  }

  function deleteTask(list) {
    const elementTask = document.createElement('span');
    const symbol = document.createTextNode('\n\u2717');

    elementTask.className = 'delete';
    elementTask.appendChild(symbol);
    list.appendChild(elementTask);

    elementTask.onclick = () => elementTask.parentElement.style.display = 'none';

  }

  function deleteAllTasks() {
    document.querySelectorAll("li").forEach(e => e.remove());
  }