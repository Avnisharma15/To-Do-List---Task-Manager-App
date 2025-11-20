const inputBox = document.getElementById("inputBox")
const addbtn = document.getElementById("addbtn")
const todolist = document.getElementById("todolist")

let editTodo = null;

// TO ADD TODO
function addTodo() {
   const inputText = inputBox.value.trim();
   if (inputText.length <= 0) {
      alert("You must write something in your ToDo")
      return false;
   }

   if (addbtn.value === "Save") {
      editTodo.target.previousElementSibling.innerHTML = inputText;
      addbtn.value = "Add Task";
      inputBox.value= "";
   }else{
      // Creating p tag
      const li = document.createElement("li");
      const p = document.createElement("p");
      p.innerHTML = inputText;
      li.appendChild(p);
      
      todolist.appendChild(li);
      inputBox.value = "";

      // Creating edit button
      const editbtn = document.createElement("button")
      editbtn.innerText = "Edit"
      editbtn.classList.add("btn")
      li.appendChild(editbtn)

      // Creating Delete button
      const deletebtn = document.createElement("button")
      deletebtn.innerText = "Delete"
      deletebtn.classList.add("btn")
      li.appendChild(deletebtn)

      saveData();
   }
}
addbtn.addEventListener('click', addTodo)

// TO UPDATE(EDIT/DELETE) TODO
function updateTodo(e) {
   if (e.target.innerHTML === "Delete") {
      todolist.removeChild(e.target.parentElement)
      saveData();
   }
   if (e.target.innerHTML === "Edit") {
      inputBox.value = e.target.previousElementSibling.innerHTML
      addbtn.value = "Save"
      editTodo = e;
      saveData();
   }
}
todolist.addEventListener('click', updateTodo)

function saveData(){
   localStorage.setItem("data" , todolist.innerHTML)
}
function showlist(){
   todolist.innerHTML = localStorage.getItem("data")
}
showlist();