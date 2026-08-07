// creates an empty array //
let tasks = [];

// take what is in the array and makes it vivsible //
function displayTasks() {
  let html = ""; // this is where we write the list we want to actually do before it adds to the array //

  for (let i = 0; i < tasks.length; i++) {
    // this is adding each tasks one by one ,the array starts from index 0 and the i ++ means increment while the task length checks the number of elemnts already existing before adding another one 
    html += "<li>" + tasks[i] +
      "   <button onclick='removeTask(" + i + ")';> x</button></li>"; //this is what display the task and at the front of the text we add an x with the function to remove ,it would remove it using the index number from the array
  }

  document.getElementById("list").innerHTML = html; // it looks for the elemnt with id list once it finds it , it checks inside the html and puts whatever it finds there inside the list
}

function addTask() {
  let taskInput = document.getElementById("task"); // it searches for the elemnt with the id task which is the input 
  let text = taskInput.value;   // it reads what is there
  if (text === "") {
    return; // if it is empty do not return anything
  }
  tasks.push(text); // add the new task to the end of the array
  saveTasks(); // persist the updated array to localStorage
  displayTasks(); // re-render the list so the new task shows up
  taskInput.value = ""; // clear the input box so it's ready for the next task
}

function removeTask(i) { //the i tells us which index to delete and it is not in the add because we are adding and you do not add randomly but cann delete randomly
  tasks.splice(i, 1); // it does to the exact spot with the index and deltes only 1
  saveTasks();  // after deleting it saves the current state 
  displayTasks(); // after saving it then shows the current tasks with the already deleted task not there 
}

function clearAll() { // there is no index in this one because we are not delteing a spacific index just like we are not adding a spacific index we are delting everything
  tasks = []; // it clears everything in the array such that the array is back to 0 , empty
  saveTasks(); // save that empty state
  displayTasks();  // and then shows that the list is empty
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks)); // takes the tasks which is the array and because the computer cannot staore array it changes it to string and store it with the name tasks
}

function loadTasks() {
  let saved = localStorage.getItem("tasks"); // so this goes to the box setItem and tries to get the item with the name tasks, if we get something back or if we don not we save it in saved 
  if (saved !== null) {
    tasks = JSON.parse(saved); // so basically this checks if we have something stored in that name and if it is there we convert it back to array so that our previous intrustions can run
  }
}
loadTasks(); // after everthing has been done converting checking and all this is the one that actually loads it ,this would display what as already been stored there 
displayTasks(); //before it then displays 