var tasklist = [];

function updatePage() {
  event.preventDefault();
  var task = document.getElementById("tasktxt").value;
  var ppl = document.getElementById("taskform").elements["owner"].value;
  var diff = document.getElementById("taskdiff").value;
  tasklist.push({task: task, owner:ppl, diff: diff});
  drawToPage();
  document.getElementById("tasktxt").value = "";
}
function drawToPage(){
  var todo = document.getElementById("todo");
  todo.innerHTML = "";
  for(var i = 0; i < tasklist.length; i++){
    var newNode = document.createElement("li");
    newNode.innerHTML = "Owner: " + tasklist[i].owner;
    var smallNodes = document.createElement("ul");
    newNode.appendChild(smallNodes);
    var smallNode1 = document.createElement("li");
    smallNodes.appendChild(smallNode1);
    smallNode1.innerHTML = "Task: " + tasklist[i].task;
    var smallNode2 = document.createElement("li");
    smallNodes.appendChild(smallNode2);
    smallNode2.innerHTML = "Difficulty: " + tasklist[i].diff;
    todo.appendChild(newNode);
    }
  document.getElementById("taskform").reset();
  }