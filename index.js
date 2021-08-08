//grab elements from the DOM

const loadingBar = document.querySelector(".load__bar");
const title = document.getElementById("title");

//loadingBar.style.position = "fixed";

//test area
console.log(title);
console.log(loadingBar);

let width = 1;

let activeLoadBar = setInterval (function() {
    if (width >= 100) {
clearInterval(activeLoadBar);
    } else {
        width++;
        loadingBar.style.width = width;
    }
}, 50)

console.log(activeLoadBar);

title.addEventListener('click', function(e) {
    e.preventDefault();
    console.log("e listener worked");
    return activeLoadBar;
})