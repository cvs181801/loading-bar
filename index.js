//grab elements from the DOM

const loadingBar = document.querySelector(".load__bar");
const title = document.getElementById("title");
const barContainer = document.querySelector(".container");
//const body = document.getElementsByTagName("body");




//affix / pin the load bar to top of screen
barContainer.style.position = "fixed";
loadingBar.style.position = "fixed";


//test area
console.log(title);
console.log(loadingBar);

//make the loading bar work
let width = 0;

// let activeLoadBar = setInterval (function() {
//     if (width >= 100) {
// clearInterval(activeLoadBar);
//     } else {
//         width++;
//         loadingBar.style.width = width + "%";
//     }
// }, 10)

//we can try another method


// document.onscroll = function(e) {
//     if (width < 100) {
//     (width ++);
//     loadingBar.style.width = width + "%";
//     } else if (width === 100) {
//     console.log(e.target.scrollTop);
//     (width - 2);
//     loadingBar.style.width = width + "%";
//     }

//     console.log("yay it worked");
//     console.log(width);
// }


//test area
//console.log(activeLoadBar);

//make it so the loading bar loads upong clicking

// title.addEventListener('click', function(e) {
//     e.preventDefault();
//     console.log("e listener worked");
//     return activeLoadBar;
// })

// try again

// using the 'hack' to find height of the browser/client
let body = document.body;
let html = document.documentElement; //returns the element that is the root element of the documents

let height = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
);
//(finds the largest of all these)

const activeLoadBar = () => {
    let scrollFromTop = (html.scrollTop || body.scrollTop) + html.clientHeight;
    let width = (scrollFromTop / height) * 100 + "%";
    loadingBar.style.width = width;
}

window.addEventListener('scroll', activeLoadBar);
