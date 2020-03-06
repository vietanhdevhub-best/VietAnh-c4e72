const data = [
  {
    project: "Learn front-end",
    task: "Learn HTML",
    "time spent": 6
  },
  {
    project: "Learn front-end",
    task: "Learn CSS",
    "time spent": 8
  },
  {
    project: "Learn front-end",
    task: "Learn JS variables and datatype",
    "time spent": 6
  },
  {
    project: "Learn Git",
    task: "Learn git basics",
    "time spent": 2
  }
];

const tableBody = document.querySelector("tbody");
console.log(tableBody);
tableBody.innerHTML =
  " <tr><td>Learn front-end</td><td>Learn HTML</td><td>6</td></tr><tr><td>Learn front-end</td><td>Learn CSS</td><td>8</td></tr><tr><td>Learn front-end</td><td>Learn JS variable and datatype</td><td>6</td></tr><tr><td>Learn Git</td><td>Learn Git basics</td><td>2</td></tr> ";
const task = document.querySelector("#task");
const project = document.querySelector("#project");
const time = document.querySelector("#time");
const add = document.querySelector("button");
add.addEventListener("click", () => {
  data.push({
    project: `${project.value}`,
    task: `${task.value}`,
    "time spent": `${time.value}`
  });
  tableBody.innerHTML += `<tr>
  <td>${data[data.length - 1].project}</td>
  <td>${data[data.length - 1].task}</td>
  <td>${data[data.length - 1]["time spent"]}</td>
  </tr>`;
});
const rows = document.querySelectorAll("tbody tr");
const rowHead = document.querySelector("tr");
const update = document.querySelector(".update");
rowHead.innerHTML += "<th>Action</th>";
for (let i = 0; i < rows.length; i++) {
  rows[i].innerHTML += `<td><button onclick = "removeLine(${i})">X</button>
<button onclick="updateLine(${i})">u</button>
</td>`;
}
function removeLine(index) {
  rows[index].innerHTML = "";
}
function updateLine(index) {
  task.value = data[index].task;
  project.value = data[index].project;
  time.value = data[index]["time spent"];
  update.onclick = () => {
    rows[index].innerHTML = `<td>${project.value}</td>
      <td>${task.value}</td>
      <td>${time.value}</td>
      <td><button onclick = "removeLine(${index})">X</button>
      <button onclick="updateLine(${index})">u</button>
      </td>`;
  };
}
const clear = document.querySelector(".clear");
function deleteValue() {
  task.value = "";
  project.value = "";
  time.value = "";
}
clear.addEventListener("click", deleteValue);
