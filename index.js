//grab elements from the DOM

const loadingBar = document.querySelector(".load__bar");
const title = document.getElementById("title");
const barContainer = document.querySelector(".container");

barContainer.style.position = "fixed";
loadingBar.style.position = "fixed";


//test area
console.log(title);
console.log(loadingBar);

//make the loading bar work
let width = 0;

let activeLoadBar = setInterval (function() {
    if (width >= 100) {
clearInterval(activeLoadBar);
    } else {
        width++;
        loadingBar.style.width = width + "%";
    }
}, 10)

//test area
//console.log(activeLoadBar);

//make it so the loading bar loads upong clicking

// title.addEventListener('click', function(e) {
//     e.preventDefault();
//     console.log("e listener worked");
//     return activeLoadBar;
// })