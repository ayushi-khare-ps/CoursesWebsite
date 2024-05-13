
"use strict";

let cid = -1;

window.onload = function (){

    const urlParams = new URLSearchParams(location.search);
	// location.search returns the query string part of the URL
    
    if (urlParams.has("cid") === true)
        {
            cid = urlParams.get("cid")
            // call a method that fetches this course
            getCourse(cid);
        }
    
        let deleteCourse = document.getElementById("deleteCourse");
        deleteCourse.onclick = deleteCourseConfirmed;
}

function getCourse(cid){

    fetch('http://localhost:8081/api/courses/' + cid)
   .then(response => response.json())
   .then(course => {
      // this returns a single course!
      const container = 
         document.getElementById('courseContainerDiv');

      // display one course property in a <p>
      const courseName = document.createElement('p');
      courseName.textContent = `Name: ${course.courseName}`;
      container.appendChild(courseName);
  
      const instructor = document.createElement('p');
      instructor.textContent = `Instructor: ${course.instructor}`;
      container.appendChild(instructor);

      const startDate = document.createElement('p');
      startDate.textContent = `Start Date: ${course.startDate}`;
      container.appendChild(startDate);

      const numDays = document.createElement('p');
      numDays.textContent = `Duration: ${course.numDays}`;
      container.appendChild(numDays);

    //   const deptP = document.createElement('p');
    //   deptP.textContent = `Name: ${course.courseName}`;
    //   container.appendChild(deptP);


   })


}

function deleteCourseConfirmed(){

console.log(cid);

    fetch("http://localhost:8081/api/courses/" + cid, {
      method: "DELETE",
   })
   .then(response => response.json()) 
   .then(json => {
       // If the DELETE is successful, display a message
       let confirmationMessage = 
          document.getElementById("confirmationMessage");
       confirmationMessage.innerHTML = "Course deleted";
    //window.alert("Course Deleted")
    //window.location.replace("http://127.0.0.1:3004/index.html");
    })
    .catch(err => {
       // If the DELETE returns an error, display a message
       console.log(err);
       let confirmationMessage = 
          document.getElementById("confirmationMessage");
       confirmationMessage.innerHTML = "Unexpected error.";
       //window.location.replace("http://127.0.0.1:3004/index.html");
  });



}