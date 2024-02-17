
const basket = JSON.parse(localStorage.getItem('data')) || [];
    const ad_create = (id, title, price, img) => {
      basket.push({
        id: id,
        item: 1,
        title: title,
        price: price,
        img: img
      });
      localStorage.setItem('data', JSON.stringify(basket));
      calculate();
      generate_cart_item(); 
    }
    const calculate = () => {
      let ordernumber = document.getElementById("ordernumber");
      ordernumber.innerHTML=basket.length;
    }
     let generate_cart_item =() =>{
      item1.innerHTML=basket.map((x)=>{ 
        let{id,price,img,title}=x;
        return`
        <div id="foodcart"  id=product-id-${id}>
        <img src="${title}">
        <span onclick="minus(${id})" id="minus">-</span>
        <span id="number">1</span>
        <span onclick="add(${id})" id="add">+</span>
        <div class="foodabout">
            <h2>${img}</h2>
            <p>seller:as_food partner</p>
            <p>&#8377; ${price}</p>
            <button onclick="rmv(${id})" id="remove"> REMOVE</button>
        </div>
    </div>
        `
      }).join('');
      totalcart();
     
     }
    const minus = (id) => {
      const number = document.getElementById("number");
      if (number.innerHTML < 2) {
        const indexToRemove = (basket.findIndex(x => x.id == id));
        basket.splice(indexToRemove, 1);
        localStorage.setItem('data', JSON.stringify(basket));
        calculate();
        generate_cart_item();
      totalcart();
          
      } else {
        console.log(number.innerHTML)
          let digit = parseInt(number.innerHTML) - 1;
          console.log(digit)
          number.innerHTML = digit;
            // Update the quantity of the item in the basket
      const itemToUpdate = basket.find(a => a.id == id);
      // number.innerHTML = digit;
      itemToUpdate.item = digit;
      //   // Update the local storage with the modified basket
      localStorage.setItem('data', JSON.stringify(basket));    
      //   // Recalculate and update the cart

      totalcart();
      paymentprice();
      }
   }
  
     const add = (id) => {
      const number = document.getElementById("number");
      let digit = parseInt(number.innerHTML)+1;
      // number.innerHTML = digit;
    // console.log(number.innerHTML)
      // Update the quantity of the item in the basket
      const itemToUpdate = basket.find(a => a.id == id);
        number.innerHTML = digit;
      itemToUpdate.item = digit;
    //   // Update the local storage with the modified basket
      localStorage.setItem('data', JSON.stringify(basket));
    //   // Recalculate and update the cart
      totalcart();
      paymentprice();
     }
     const rmv = (id) => {
      const indexToRemove = (basket.findIndex(x => x.id == id));
       basket.splice(indexToRemove, 1);
       localStorage.setItem('data', JSON.stringify(basket));
       calculate();
       generate_cart_item();
     totalcart();
    
   }
   
     const item2=document.getElementById("item2");
  let  totalcart=() => {
   if(basket[0]==null){
    item2.innerHTML="We welcome your appetite. Now let's order our food and satisfy your stomach";
   }
   else{ let totalPrice = basket.reduce((acc, item) => {
    const total = parseInt(acc) + (parseInt(item.price) * parseInt(item.item)); 
    return total;
    
  }, 0)
    item2.innerHTML=`<span id="price">
   <p>Price (${basket.length} Items)</p>
   <p>&#8377; ${ totalPrice}</p>
</span>
<span id="price">
   <p>discount</p>
   <p>-&#8377;20 </p>
</span>
<span id="price">
   <p>Coupons for you</p>
   <p>-&#8377;39</p>
</span>
<span id="price">
   <p>Delivery charge</p>
   <p>+&#8377;20 </p>
</span>
<span id="price">
   <p>Secured Packaging fee</p>
   <p>+&#8377;0</p>
</span>
<span id="pricetotal">
   <p>Total Amount</p>
   <p id="amuntcg">${totalPrice-39+20} </p>
</span>
<span id="pricesave">
   <p>You will save &#8377;${totalPrice-(totalPrice-39+20)} on this order</p>
</span>
<div class="cobutton"><button id="countiueorder" onclick="plorder()"> Place your order</button></div>
`

 } }

   calculate();
   generate_cart_item();
   totalcart();
let countiueorder=document.getElementById("countiueorder");
let paymentoption=document.getElementById("paymentoption");
function plorder(){
    payment.style.display="flex";
    paymentprice();
}
function goback(){
  payment.style.display="none";
}
let paymentprice =()=>{
  paymentoption.innerHTML=`
 <p class="set">Payment option</p>
 <span id="ogpay">
  <input type="checkbox">
  <p>only Cash on Delivery </p>
 </span>
 <span id="pricedtl">
  <h2>Price Details</h2>
   <div class="st">
  <p>price(items)</p>
  <p>&#8377; ${amuntcg.innerHTML}</p>
</div>
  <div class="st" >
      <p>Delivery charges</p>
      <p><font color="orangered">FREE</font></p>
  </div>
<div class="st" >
  <p>Amount Payable</p>
  <p>&#8377;${amuntcg.innerHTML}</p>
</div>
</span>
 </span>
 <div id="shield">
  <div class="support">
      <img src="image/time-icon.svg" alt="" />
              <h1>Customer Support
              </h1>
  </div>
  <div class="support">
      <img src="image/security-icon.svg" alt="" />
              <h1>Secure Payment
              </h1>
  </div>
  <div class="support">
      <img src="image/dollar-icon.svg" alt="" />
      <h1>Return & Refund
      </h1>
  </div>
 </div>
 <div id="headback">
 <div class="cobutton"><button onclick="goback()" id="goback">goback</button></div> 
<div class="cobutton"><button onclick="goahead()" id="goahead">Continue</button></div> 
</div>`
}
const putemail= document.getElementById("putemail");
const emailsend=document.getElementById("emailsend")
const emailcheck=document.getElementById("emailcheck")
const sameemail=document.getElementById("sameemail")
paymentprice();
function goahead(){
  if(emailsend.value===""){
    alert("enetr your email id for confirm your order")
  }
  else{
  confirmation.style.display="flex";
  putemail.innerText=sameemail.innerText;
  sendConfirmationEmail(putemail.innerText);
 basket.map((x)=>{
 
        // sendConfirmationEmail(putemail.innerText,x.item,x.price,x.img);
        sendConfirmationEmail(putemail.innerText,x.item,x.price,x.img)
 })
  }
}
function takeout(){
  if(emailcheck.innerText==="ok"){
emailcheck.innerText="change";
emailsend.style.display="none"
sameemail.style.display="block"
sameemail.innerText=emailsend.value;
  }
  else{
    emailcheck.innerText="ok";
    emailsend.style.display="block"
sameemail.style.display="none"
  }
}
function sendConfirmationEmail(email,item,price,img) {
  emailjs.send("service_gey6q23","template_nq2ifgi",{
    reply_to: email,
    totalprice:amuntcg.innerHTML,
   item:item,
   price:price,
  img:img
  })
  .then((response) => {
    alert("Email sent successfully", response);
  }, (error) => {
    confirmation.style.display="none";
    alert("Error sending email", error);
  });
}
