// disabled right click
document.addEventListener(
  "contextmenu",
  function (e) {
    e.preventDefault();
  },
  false
);

function slider(anything) {
  document.querySelector(".one").src = anything;
}

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("open");
};

let darkmode = document.querySelector("#darkmode");

darkmode.onclick = () => {
  if (darkmode.classList.contains("bx-moon")) {
    darkmode.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add("color");
  } else {
    darkmode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("color");
  }
};
