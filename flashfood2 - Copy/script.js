var div1 = document.getElementById("divToShowHide1");
var div2 = document.getElementById("divToShowHide2");

div1.style.display = "none";
div2.style.display = "none";

var showButton = document.getElementById("showButton");

showButton.addEventListener("click", function () {
  if (div1.style.display === "none") {
    div1.style.display = "flex";
    div2.style.display = "flex";
    this.textContent = "see less";
  } else {
    div1.style.display = "none";
    div2.style.display = "none";
    this.textContent = "show ";
  }
});
function showDropdown() {
  document.getElementById("dropdownContent").style.display = "block";
}

function hideDropdown() {
  document.getElementById("dropdownContent").style.display = "none";
}
