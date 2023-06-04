var stroringData = [
]

var form = document.getElementById('userForm');

form.addEventListener('submit', storingData)

function storingData(event) {

  event.preventDefault();
  var taskName = document.getElementById('name').value;
  var taskDescription = document.getElementById('description').value;
  var assignTo = document.getElementById('assign').value;
  var dueDate = document.getElementById('date').value;
  var status = document.getElementsByName('status');

  // if (taskName.trim() === '' || taskDescription.trim() === '' || assignTo.trim() === '' || dueDate.trim() === '' || taskstatus === "") {
  //   alert('Please fill in all the required fields.');
  //   return;
  // }

  // if (taskName.split(' ').length > 200) {
  //   alert('Message exceeds the word limit of 200 words.');
  //   return;
  // }



  
  var taskstatus

  for (var i = 0; i < status.length; i++) {
    if (status[i].checked) {
      taskstatus = status[i].value;
      break;
    }
  }

  var userInput = {
    name: taskName,
    description: taskDescription,
    assign: assignTo,
    date: dueDate,
    status: taskstatus,
  };


  stroringData.push(userInput);

  form.reset();


  console.log(stroringData);

  let taskParent = document.querySelector("#taskParent");
  taskParent.innerHTML = "";
  for (var i = 0; i < stroringData.length; i++) {

    var task = stroringData[i];

    let newUserhtml = `
      <div class="col col-xs-12 col-sm-12 col-md-4 col-lg-4">
        <div class="card m-auto text-white bg-success mb-3" style="max-width: 18rem;">
          <div class="card-header">Task 1</div>
            <div id = "storingData" class="card-body">
              <p class="card-text">Name: ${task.name}</p>
              <p class="card-text">Description: ${task.description}</p>
              <p class="card-text">Assigned to: ${task.assign}</p>
              <p class="card-text">Due Date: ${task.date}</p>
              <p class="card-text">Status: ${task.status}</p>
              <button class="delete-button btn btn-danger btn-sm" name="delete" id="deleteBtn">DELETE</button>
            </div>
        </div>
      </div>`
    taskParent.innerHTML += newUserhtml;
  }

}


// date and time function 
const dateElement = document.querySelector("#showDate");
const timeElement = document.querySelector("#showTime");

function tickingTime() {
  let timeNow = new Date();
  return (timeElement.innerText = `${timeNow.getHours()}:${timeNow.getMinutes()}:${timeNow.getSeconds()}`);
}
let d = new Date();

tickingTime();
setInterval(tickingTime, 1000);
dateElement.innerText = `${d.getDate()} / ${d.getMonth() + 1} / ${d.getFullYear()}`;

// date and time function 



function resetForm() {
  document.getElementById("userForm").reset();
}

