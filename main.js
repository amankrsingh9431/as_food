const active = document.getElementById("active");
const header = document.getElementById("header");
const open = document.getElementById("open");
const class2 = document.getElementById("class2");
const sideimg = document.getElementById("sideimg")
const additem = document.getElementById("additem");
const first = document.getElementById("first");

const foodcart = document.getElementById("foodcart");
let wrap2 = document.getElementById("wrap2");
const wrap4 = document.getElementById("wrap4");
const wrap3 = document.getElementById("wrap3");
const item1 = document.getElementById("item1");
const ordernumber = document.getElementById("ordernumber");
function chng() {
  header.style.display = "block";
}
function create() {
  class2.style.display = "none";
  open.style.display = "block";
}
function justlog() {
  open.style.display = "none";
  class2.style.display = "block";
}
const imageload = () => {
  setTimeout(() => {
    sideimg.src = "image/burger.png";
  }, 0);
  setTimeout(() => {
    sideimg.src = "image/roll.png";
  }, 2000);
  setTimeout(() => {
    sideimg.src = "image/hen.png";
  }, 4000);
  setTimeout(() => {
    sideimg.src = "image/ice-cream.png";
  }, 6000);
  setTimeout(() => {
    sideimg.src = "image/toastbread.png";
  }, 8000);
}
imageload();
setInterval(imageload, 12000);

const scroll = document.querySelector(".wrapper")
const scrolls = document.querySelector(".wrap2")
const swipeleft = document.getElementById("left");
const swiperight = document.getElementById("right");
swipeleft.addEventListener("click", () => {
  scroll.scrollLeft -= 100;
  scrolls.scrollLeft -= 100;
});
swiperight.addEventListener("click", () => {
  scroll.scrollLeft += 100;
  scrolls.scrollLeft += 100;
});
function addfood() {
  if (additem.style.display == "none") {
    additem.style.display = "flex";
  }
  else {
    additem.style.display = "none";
  }
}


let generatebox = () => {
  wrap2.innerHTML = shopcart.map((x) => {

    let { id, price, img, title } = x;
    return `
     <div id="batch" id=product-id-${id}>
                <img onclick=" ad_create('${id}','${img}','${price}','${title}')" id="imgwrap" src="${img}">
                <p id="title">${title}</p>
                <div class="rupee">
                    <img src="image/ruppe.png">
                    <p id="moneywrap">${price} for one</p>
                </div>
            </div>
     `
  })
}
let generatbox2 = () => {
  wrap4.innerHTML = shopcart2.map((x) => {

    let { id, price, img, title } = x;
    return `
     <div id="batch" id=product-id-${id}>
                <img onclick="ad_create('${id}','${img}','${price}','${title}')" id="imgwrap" src="${img}">
                <p id="title">${title}</p>
                <div class="rupee">
                    <img src="image/ruppe.png">
                    <p id="moneywrap">${price} for one</p>
                </div>
            </div>
     `
  })
}
let generatbox3 = () => {
  wrap3.innerHTML = favouriate.map((x) => {

    let { id, price, img, title } = x;
    return `
     <div id="batch"  id=product-id-${id}>
                <img class="icon" id="imgwrap" src="${img}">
                <div class="cup">
                    <div class="star">
                        <p> ${title}</p>
                        <span class="str">4.2
                            <img src="image/star.png">
                        </span>
                    </div>
                    <div class="time">
                        <img src="image/clock.png">
                        <p>31 min. 25km</p>
                    </div>
                    <div class="money">
                        <img src="image/ruppe.png">
                        <p id="moneywrap">${price} for one</p>
                    </div>
                    <div class="sale">
                        <img src="image/sale.png">
                        <p>50% OFF up to rs100</p>
                    </div>
                    <span onclick="ad_create('${id}','${img}','${price}','${title}')" id="add">Add to cart</span>
                </div>
            </div> 
     `
  })
}
generatebox();
generatbox2();
generatbox3();

const secondthis=document.getElementById("Message");
function submitconfirmation(){
  console.log(secondthis.value)
}
