const inputBox = document.getElementById("inputbox");
const listContainer = document.getElementById("list_Container");

function addTask() {
  if (inputBox.value === "") {
    alert("OOPS ! YOU FORGOT TO ADD TASK");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    // Adding the Delete button
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  // whenever we will add data this function will be called to store the data
  savedata();
}
// for removing and completing effect or funcanality
listContainer.addEventListener(
  "click",
  function (a) {
    if (a.target.tagName === "LI") {
      a.target.classList.toggle("checked");
      // whenever we will checked or unchecked the data this function will be called to store the data
      savedata();
    } else if (a.target.tagName === "SPAN") {
      a.target.parentElement.remove();
      // whenever we will remove the data this function will be called to store the new data
      savedata();
    }
  },
  false
);

function savedata() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function displayTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
displayTask();
