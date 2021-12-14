/* 
[1]Use Sweet Alert If is Empty
[2]

*/


//Setting Up variables
let theInput = document.querySelector(".add-task input") 
let   theAddButton = document.querySelector(".add-task .plus") 
let    tasksCountainer =  document.querySelector(".task-content")

let    taskCount = document.querySelector("tasks-count span")
let    tasksComleted = document.querySelector(".tasks-completed span");
let  contDll = document.querySelector(".continer-dll") 
    // Foucus on input Filed


    window.onload = function () {
        theInput.focus();
    };

    //Adding The Task
    theAddButton.onclick =function () {

        // if input Empty [1]
        if(theInput.value === '') {

            console.log("No Value");

        }else {

            let  noTasksMsg = document.querySelector(".no-task-message") 

            if (document.body.contains(document.querySelector(".no-task-message"))) {

             // Remove No Tasks messge
            noTasksMsg.remove();

            }
            

            //craete Span Element 
            let mainSpan = document.createElement("span");

            //craete Delete Button 
            let deleteElement = document.createElement("span");

            //craete Text To Span
            let text = document.createTextNode(theInput.value);

             //craete Text To Delete Button
            let deleteText = document.createTextNode("Delete");

            // Add Text to Span 
            mainSpan.appendChild(text)
            
            //Add Class To Span
            mainSpan.className ='task-box';

             // Add Text to Delete Button
            deleteElement.appendChild(deleteText);

            // Add class to Delete Button
            deleteElement.className='delete';

             //// Add Delete Button To Main Span
            mainSpan.appendChild(deleteElement);

             //Add The Task To Continaer
            


            tasksCountainer.appendChild(mainSpan);

                
             //Empty The input
            theInput.value = '';

            theInput.focus();

            calculateTasks();
        } 
    
    };
    
       //Add Delete All 

            let mainDiv = document.createElement('div')
            let textDell = document.createTextNode("Delete All");
            mainDiv.className = 'dell-all'
            mainDiv.appendChild(textDell)
            contDll.appendChild(mainDiv)



    document.addEventListener('click', function (e) {

        //Delete Task
        if (e.target.className == 'delete') {

            //Remove
            e.target.parentNode.remove();


            //Check Number Of Tasks Inside The Contianer 
            if (tasksCountainer.childElementCount == 0) {

                createNoTask()
            }

        }

         //Finish Task
        if (e.target.classList.contains('task-box') ){

            //toggle class finshed
            e.target.classList.toggle("finished");

        }
        calculateTasks();
    
});

// Function To Craete No Tasks message
function createNoTask() {

    //Crate Message Span Element
    let msgspan = document.createElement("span");

    // creat text message
    let msgText = document.createTextNode("No Task To Show");

    // Add Text to Message
    msgspan.appendChild(msgText);

    //Add Class To Message Span 
    msgspan.className = 'no-tasks-message';

    // Append The Message Span Elemnts
    tasksCountainer.appendChild(msgspan);

}

//Function To Calculate Tasks
function calculateTasks() {

    //Calculate All Tasks
    taskCount.innerHTML = document.querySelectorAll('task-content task-box').length;

     //Calculate Completed Tasks
    tasksComleted.innerHTML = document.querySelectorAll('.task-content .finished').length;
}