"use strict";

window.onload = function (){

    const urlParams = new URLSearchParams(location.search);
	// location.search returns the query string part of the URL
    let cid = -1;
    if (urlParams.has("cid") === true)
        {
            cid = urlParams.get("cid")
            // call a method that fetches this course
            getCourse(cid);
        }

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