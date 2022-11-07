const hamburger = document.querySelector(".hamburger");
const headerList = document.querySelector(".nav-menu");
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    headerList.classList.toggle("active");
})

var video = document.getElementById('video');
var volu3 = document.getElementById('vol-control');

window.setInterval(changevolume(), 1);

function changevolume() {

 var x = volu3.value;
 var y = x / 100;

 video.volume = y;

}