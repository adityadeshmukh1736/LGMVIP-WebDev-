const enrolledStudents = document.querySelector(".record");

const studentList = [];


const generateStudentCard = (details) => {
  enrolledStudents.insertAdjacentHTML(
    "afterbegin",
    `<div class="student-card">
      <img alt="Avatar" height="225px" src="https://joeschmoe.io/api/v1/random" width="225px" />
      <h3>
          <em>${details.name}</em>
      </h3>
      <h3>
          <em>${details.gender}</em>
      </h3>
      <h3>
          <em>${details.email}</em>
      </h3>
      <h3>
          <em>${details.website}</em>
      </h3>
      <h3>
          <em>${details.skills}</em>
      </h3>
    </div>`
  );
};

const studentAdded = (e) => {
  e.preventDefault();
  const details = {
    id: `${Date.now()}`,
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    website: document.getElementById("website").value,
    gender: document.querySelector("input[name='gender']:checked").value,
    skills: document.querySelector("input[name='skills']:checked").value,
  };

  generateStudentCard(details);

  studentList.push(details);
  localStorage.setItem("studentList", JSON.stringify(studentList));
};

let submitButton = document.getElementById("submit");
submitButton.addEventListener("click", studentAdded);