let current = document.querySelector("#current");
let slike = document.querySelectorAll(".thumb");

for (let i = 0; i < slike.length; i++) {
    slike[i].addEventListener('click', display);
    }

function display() {
    let sl = this.getAttribute("src");
    current.setAttribute("src", sl);
}