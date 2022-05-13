let bar = document.querySelector(".bar-icon");
let nav = document.getElementById("nav");
let times = document.getElementById("close-icon");
let navLinks = document.querySelectorAll("li");
let cart = document.getElementById("see-cart");
let previous = document.getElementById("previous");
let next = document.getElementById("next");
let smallImages = document.querySelectorAll(".small-image");
let itemAmount = document.getElementById("item-amount");
let minus = document.getElementById("minus");
let add = document.getElementById("add");
let button = document.getElementById("btn");
let img1 = "images/image-product-1.jpg";
let img2 = "images/image-product-2.jpg";
let img3 = "images/image-product-3.jpg";
let img4 = "images/image-product-4.jpg";
const img = [img1, img2, img3, img4];
let flexers = document.querySelector(".flexers");
let cartView = document.querySelector(".cart-view");
let container2 = document.querySelector(".container2");
let times2 = document.getElementById("times2");
let prev = document.getElementById("prev");
let forward = document.getElementById("forward");

let bigImage = document.querySelector(".center-image");
let firstBgImg = document.querySelector(".bg-images");
let current = 0;
smallImages.forEach((img) => {
    img.addEventListener("click", function(event) {
        container2.style.display = "flex";
        let source = event.target.src;
        bigImage.src = source;
    });
});

function nextImage() {
    bigImage.classList.add("fade-in");
    setTimeout(() => bigImage.classList.remove("fade-in"), 500);
    if (current < img.length - 1) {
        bigImage.src = img[current + 1];
        current++;
    } else {
        current = 0;
        bigImage.src = img[current];
    }
}
let turrent = 3;

function nextImageMobile() {
    firstBgImg.classList.add("fade-in");
    setTimeout(() => firstBgImg.classList.remove("fade-in"), 500);
    if (current < img.length - 1) {
        firstBgImg.src = img[current + 1];
        current++;
    } else {
        current = 0;
        firstBgImg.src = img[current];
    }
}

function prevImage() {
    bigImage.classList.add("fade-in");
    setTimeout(() => bigImage.classList.remove("fade-in"), 500);
    if (turrent < img.length && turrent > 0) {
        bigImage.src = img[turrent];
        turrent--;
    } else if (turrent === 0) {
        turrent = img.length - 1;
        bigImage.src = img[turrent];
    }
}

function prevImageMobile() {
    firstBgImg.classList.add("fade-in");
    setTimeout(() => firstBgImg.classList.remove("fade-in"), 500);
    if (turrent < img.length && turrent > 0) {
        firstBgImg.src = img[turrent];
        turrent--;
    } else if (turrent === 0) {
        turrent = img.length - 1;
        firstBgImg.src = img[turrent];
    }
}
forward.addEventListener("click", nextImage);
previous.addEventListener("click", prevImageMobile);
prev.addEventListener("click", prevImage);
next.addEventListener("click", nextImageMobile);
bar.addEventListener("click", () => (nav.style.display = "flex"));
times2.addEventListener("click", () => (container2.style.display = "none"));
times.addEventListener("click", () => (nav.style.display = "none"));
itemAmount.innerText = 0;
minus.addEventListener("click", () => {
    if (itemAmount.innerText > 0) {
        itemAmount.innerText = item.innerText - 1;
    }
});
add.addEventListener("click", () => {
    itemAmount.innerText = itemAmount.innerText * 1 + 1;
});
cartView.classList.add("none");
button.addEventListener("click", (event) => {
    let result = "";

    let itemNom = parseInt(itemAmount.innerText);
    let priceTag = itemNom * 125;
    result += `
       <div class="flexers"
        data-id="1">
         
           <div class="flexer">
              <img src= "images/image-product-1-thumbnail.jpg" alt="" />
             <div class="ps">
            <p>"Fall Limited Edition Sneakers"</p>
             <p>$125x<span>${itemNom}  $${priceTag}</span></p>
           </div>
            <img src="images/icon-close.svg" alt="" class="closecart" />
         </div>
         <small class="remove">remove from cart</small>
         <button id="button" class="btn">Checkout</button>
        </div>`;

    if (itemNom > 0) {
        cartView.classList.remove("none");
        cartView.innerHTML = result;
        cartView.classList.add("hey");
    }
});
cart.addEventListener("click", () => {
    cartView.classList.remove("none");
    if (cartView.classList.contains("hey")) {} else {
        cartView.innerHTML = `<div class ="flexer2"><p> Your cart is empty</p>
      <img src="images/icon-close.svg" alt="" class="closecart" />
        </div>`;
    }
});
cartView.addEventListener("click", (event) => {
    if (event.target.classList.contains("closecart")) {
        cartView.classList.add("none");
    }
    if (event.target.classList.contains("remove")) {
        itemAmount.innerText = 0;
        cartView.innerHTML = `<div class ="flexer2"><p> Your cart is empty</p>
      <img src="images/icon-close.svg" alt="" class="closecart" />
        </div>`;
    }
});

function fadeIn() {
    bigImage.classList.add("fade-in");
    firstBgImg.classList.add("fade-in");
}
let timeout = setTimeout(() => {
    firstBgImg.classList.remove("fade-in");
}, 500);