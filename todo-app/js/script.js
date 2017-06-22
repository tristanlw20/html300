var tasklist = [];

// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});

document.getElementById("taskform").addEventListener("submit",function(event){
  event.preventDefault()
});

function updatePage() {
  var task = document.getElementById("tasktxt").value;
  var ppl = document.getElementById("taskform").elements["owner"].value;
  var diff = document.getElementById("taskdiff").value;
  tasklist.push({task: task, owner:ppl, diff: diff});
  drawToPage();
  document.getElementById("tasktxt").value = "";
  document.getElementById("taskform").reset();
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
     // Set a callback to run when the Google Visualization API is loaded.
     google.charts.setOnLoadCallback(drawChart);
  }
  
      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {

        var ec = 0;
        var ac = 0;
        var hc = 0;

        if(tasklist.length>0){
          for (var i = 0; i < tasklist.length; i++){
            if (tasklist[i].diff == "Easy") {
              ec+=1;
            }else if (tasklist[i].diff == "Average"){
              ac+=1;
            }else if (tasklist[i].diff == "Hard"){
              hc+=1;
            }
          }
        }
        
        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Difficulty');
        data.addColumn('number', 'Frequency');
        
        data.addRows([
          ['Easy', ec],
          ['Average', ac],
          ['Hard', hc]
        ]);
        

        // Set chart options
        var options = {'title':'Ratio of Task Difficulty',
                       'width':400,
                       'height':300};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }