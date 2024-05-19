const bgimages = [
    'url("img/sideimg.jpg")',
    'url("img/sideimg1.jpg")',
    'url("img/sideimg2.jpg")',
    'url("img/sideimg3.jpg")'
]

let currentIndex = 0;
const container = document.getElementById("sideimg");

function changeBackground() {
    currentIndex = (currentIndex + 1) % bgimages.length;
    container.style.backgroundImage = bgimages[currentIndex];
}

setInterval(changeBackground, 4000);

const saleDate = new Date("June 15, 2024 00:00:00").getTime();

function padWithZero(number) {
    return number.toString().padStart(2, '0');
}


const countDown = setInterval(() =>{
    const currentTime = new Date().getTime();
    const distance = saleDate - currentTime;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = padWithZero(days);
    document.getElementById("hours").innerText = padWithZero(hours);
    document.getElementById("minutes").innerText = padWithZero(minutes);
    document.getElementById("seconds").innerText = padWithZero(seconds);
},1000);

document.addEventListener("DOMContentLoaded", function() {
    const track = document.querySelector('.track');
    const products = document.querySelectorAll('.product');
    let currentIndex = 0;

    function moveToIndex(index) {
        const width = products[0].offsetWidth;
        track.style.transform = `translateX(-${index * width}px)`;
    }

    function moveLeft() {
        if (currentIndex > 0) {
            currentIndex--;
            moveToIndex(currentIndex);
        }
    }

    function moveRight() {
        if (currentIndex < products.length - 1) {
            currentIndex++;
            moveToIndex(currentIndex);
        }
    }

    document.getElementById('carouselbuttonleft').addEventListener('click', moveLeft);
    document.getElementById('carouselbuttonright').addEventListener('click', moveRight);

const container = document.querySelectorAll(".prodimg");
container.forEach(container => {
    const img = container.querySelector(".actimg");
    container.addEventListener("mousemove", onZoom);
    container.addEventListener("mouseover", onZoom);
    container.addEventListener("mouseleave", offZoom);

    function onZoom(e) {
        const rect = container.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const offsetY = e.clientY - rect.top;
        const scale = 2.5;
        const scaleX = container.offsetWidth / img.offsetWidth * scale;
        const scaleY = container.offsetHeight / img.offsetHeight * scale;

        img.style.transformOrigin = `${offsetX}px ${offsetY}px`;
        img.style.transform = `scale(${scaleX}, ${scaleY})`;
    }

    function offZoom(e) {
        img.style.transformOrigin = `center center`;
        img.style.transform = "scale(1)";
    }
});


const closebutton = document.querySelector(".closebutton");
const modal = document.querySelector(".modal");
const subbutton = document.querySelector(".messagebutton");
const nameinput = document.querySelector(".namebox");
const emailinput = document.querySelector(".emailbox");
const messageinput = document.querySelector(".messagebox");


function clearinput(){
    messageinput.value = "";
    nameinput.value = "";
    emailinput.value = ""
    modal.style.display = "flex";
}
subbutton.addEventListener('click', clearinput);
closebutton.addEventListener('click', function() {
    modal.style.display = "none";
})

});

