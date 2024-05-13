"use strict";


function addNewCourse(){

    let bodyData = {
        
        dept: document.getElementById("department").value,
        courseNum: document.getElementById("coursenum").value,
        courseName: document.getElementById("coursename").value,
        instructor: document.getElementById("inst").value,
        startDate: document.getElementById("sd").value,
        numDays: document.getElementById("nod").value,

    }
    
    // Send the request
    fetch("http://localhost:8081/api/courses", {
        method: "POST",
        body: JSON.stringify(bodyData),
        headers: {"Content-type": 
                  "application/json; charset=UTF-8"},
      })
      .then(response => response.json()) 
      .then(json => {
        // If the POST finishes successfully, display a message
        let confirmationMessage = 
           document.getElementById("confirmationMessage");
        confirmationMessage.innerHTML = "New Course added";
      })
      .catch(err => {
        
        // If the POST returns an error, display a message
        let confirmationMessage = 
           document.getElementById(confirmationMessage);
        confirmationMessage.innerHTML = "Unexpected error";
      });
}