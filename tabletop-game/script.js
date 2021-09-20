function focusOnClose() {
  var close = document.getElementById("close");
  close.focus();
}

function toggle(img) {
  var popup = document.querySelector(".popup");
  popup.innerHTML = `<img
    id="img2"
    src="${img}"
    alt="Image of Board Game"
  /> <a onclick="toggle()" onkeydown="toggle()" id="close" tabindex="0">
    X Close</a
  >`;
  popup.classList.toggle("active");
}