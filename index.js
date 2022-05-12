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
let flexers = document.querySelector(".flexers");
let cartView = document.querySelector(".cart-view");
let container2 = document.querySelector(".container2");
let times2 = document.getElementById("times2");
let prev = document.getElementById("prev");
let forward = document.getElementById("forward");

let bigImage = document.querySelector(".center-image");
let firstBgImg = document.querySelector(".bg-images");
smallImages.forEach((img) => {
    img.addEventListener("click", function(event) {
        container2.style.display = "flex";
        let source = event.target.src;

        if (
            source === "http://127.0.0.1:5500/images/image-product-4-thumbnail.jpg"
        ) {
            bigImage.src = "images/image-product-4.jpg";
        } else if (
            source === "http://127.0.0.1:5500/images/image-product-3-thumbnail.jpg"
        ) {
            bigImage.src = "images/image-product-3.jpg";
        } else if (
            source === "http://127.0.0.1:5500/images/image-product-2-thumbnail.jpg"
        ) {
            bigImage.src = "images/image-product-2.jpg";
        } else if ("http://127.0.0.1:5500/images/image-product-1-thumbnail.jpg") {
            bigImage.src = "images/image-product-1.jpg";
        }
    });
});
prev.addEventListener("click", () => {
    if (bigImage.src === "http://127.0.0.1:5500/images/image-product-4.jpg") {
        bigImage.src = "http://127.0.0.1:5500/images/image-product-3.jpg";
    } else if (
        bigImage.src === "http://127.0.0.1:5500/images/image-product-3.jpg"
    ) {
        bigImage.src = "http://127.0.0.1:5500/images/image-product-2.jpg";
    } else if (
        bigImage.src === "http://127.0.0.1:5500/images/image-product-2.jpg"
    ) {
        bigImage.src = "http://127.0.0.1:5500/images/image-product-1.jpg";
    }
});

forward.addEventListener("click", () => {
    if (bigImage.src === "http://127.0.0.1:5500/images/image-product-1.jpg") {
        bigImage.src = "http://127.0.0.1:5500/images/image-product-2.jpg";
    } else if (
        bigImage.src === "http://127.0.0.1:5500/images/image-product-2.jpg"
    ) {
        bigImage.src = "http://127.0.0.1:5500/images/image-product-3.jpg";
    } else if (
        bigImage.src === "http://127.0.0.1:5500/images/image-product-3.jpg"
    ) {
        bigImage.src = "http://127.0.0.1:5500/images/image-product-4.jpg";
    }
});
previous.addEventListener("click", () => {
    if (firstBgImg.src === "http://127.0.0.1:5500/images/image-product-4.jpg") {
        firstBgImg.src = "http://127.0.0.1:5500/images/image-product-3.jpg";
    } else if (
        firstBgImg.src === "http://127.0.0.1:5500/images/image-product-3.jpg"
    ) {
        firstBgImg.src = "http://127.0.0.1:5500/images/image-product-2.jpg";
    } else if (
        firstBgImg.src === "http://127.0.0.1:5500/images/image-product-2.jpg"
    ) {
        firstBgImg.src = "http://127.0.0.1:5500/images/image-product-1.jpg";
    }
});

next.addEventListener("click", () => {
    if (firstBgImg.src === "http://127.0.0.1:5500/images/image-product-1.jpg") {
        firstBgImg.src = "http://127.0.0.1:5500/images/image-product-2.jpg";
    } else if (
        firstBgImg.src === "http://127.0.0.1:5500/images/image-product-2.jpg"
    ) {
        firstBgImg.src = "http://127.0.0.1:5500/images/image-product-3.jpg";
    } else if (
        firstBgImg.src === "http://127.0.0.1:5500/images/image-product-3.jpg"
    ) {
        firstBgImg.src = "http://127.0.0.1:5500/images/image-product-4.jpg";
    }
});
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
        cartView.innerHTML = `<div class ="flexer"><p> Your cart is empty</p>
      <img src="images/icon-close.svg" alt="" class="closecart" />
        </div>`;
    }
});
let closecart = document.querySelector(".closecart");
console.log(closecart);