var line = document.getElementById("line");

var menuItems = document.querySelectorAll('header .navigation li a');

menuItems.forEach((li) => {
  li.addEventListener("click", (e) => {
    console.log("clicked");
    changeLineWidth(e.target);
  });
});

function changeLineWidth(e){
  line.style.width = e.offsetWidth + "px";
  line.style.left = e.offsetLeft + "px";
  line.style.zIndex = "1000";
}
