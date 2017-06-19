var tasklist = [];

window.onload = function(){
  console.log("in window.onload")
  drawToPage();
  var addtask = document.getElementById("addtask");
  addtask.onclick = updatePage;
}
function updatePage() {
  console.log("pushing element to list");
  var task = document.getElementById("tasktxt").value;
  var ppl = document.getElementById("taskform").elements["owner"].value;
  var diff = document.getElementById("taskdiff").value;
  console.log(tasklist);
  tasklist.push({task: task, owner:ppl, diff: diff});
  drawToPage();
  document.getElementById("tasktxt").value = "";
}
function drawToPage(){
  console.log("in drawToPage");
  var todo = document.getElementById("todo");
  todo.innerHTML = "";
  for(var i = 0; i < tasklist.length; i++){
    var newNode = document.createElement("p");
    newNode.innerHTML = "Owner: " + tasklist[i].owner + " Difficulty: " + tasklist[i].diff +" Task: " + tasklist[i].task;
    todo.appendChild(newNode);
    }
  }