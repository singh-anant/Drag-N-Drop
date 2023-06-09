let lists = document.getElementsByClassName("list");
let left = document.getElementById("left-container");
let right = document.getElementById("right-container");

for (list of lists) {
  list.addEventListener("dragstart", function (e) {
    let selectedicon = e.target;

    right.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    right.addEventListener("drop", function (e) {
      right.appendChild(selectedicon);
      selectedicon = null;
    });
  });
}

function reload() {
  window.location.reload("Refresh");
}
