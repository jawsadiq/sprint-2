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

  if (taskName.length < 8){
    document.getElementById('taskError').innerHTML = "Please enter more than 8 characters"
    return;
  }
  if (taskDescription.length < 8 || taskDescription.length > 30 ){
    document.getElementById('descriptionError').innerHTML = "Please enter between  8-30 characters"
    return;
  }
  if (dueDate.valueOf() =='' ){
    document.getElementById('dateError').innerHTML = "Please pick a date"
    return;
    
  } else{
    document.getElementById('dateError').innerHTML ='';
    document.getElementById('descriptionError').innerHTML = '';
    document.getElementById('taskError').innerHTML = '';
  }

  var taskstatus

  for (var i = 0; i < status.length; i++) {
    if ([i].checked) {
      taskstatus = [i].value;
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
          
            <div id = "storingData" class="card-body">
              <p class="card-text">Name: ${task.name}</p>
              <p class="card-text">Description: ${task.description}</p>
              <p class="card-text">Assigned to: ${task.assign}</p>
              <p class="card-text">Due Date: ${task.date}</p>
              <p class="card-text">Status: ${task.status}</p>
              <button class="delete-button btn btn-danger btn-sm" name="delete" id="deleteBtn" onclick="return this.parentNode.remove();">DELETE</button>
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


// // vlidate on keyon when type 
// let taskError = document.getElementById('taskError');
// let descriptionError = document.getElementById('descriptionError');
// let dateError = document.getElementById('dateError');

// function validateName(){
//   let name1 = document.getElementById('name').value;

//   if (name1.length < 10){
//     taskError.innerHTML = "Please enter more than 10 characters"
//     return false;
//   }
//   taskError.innerHTML = 'valid';
//   return true;
// }


// function validateDescription(){
//   let description1 = document.getElementById('description').value;
  
//   if (description1.length < 20){
//     descriptionError.innerHTML = "Please enter more than 20 characters"
//     return false;
//   }
//   descriptionError.innerHTML = 'valid';
//   return true;
// }
