"use strict";

let table = document.getElementById("course-table");
fetch("http://localhost:8081/api/courses")
    .then(response => response.json())
    .then(data => {
        for(let i=0; i<data.length; i++) {
           let row = table.insertRow(-1);
           let cell1 = row.insertCell(0);
           let cell2 = row.insertCell(1);
           let cell3 = row.insertCell(2);
           let cell4 = row.insertCell(3);
           
           cell1.innerHTML = data[i].dept;
           cell2.innerHTML = data[i].courseNum;
           cell3.innerHTML = data[i].courseName;
        
           //Creating anchor tag for 4th cell
           //const detailsCell = row.insertCell();
           let anchor = document.createElement("a");
           anchor.href = `details.html?cid=${data[i].id}`;
           anchor.text = "See details";  
           cell4.appendChild(anchor);
           

        }
     });
