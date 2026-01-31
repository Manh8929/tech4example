/* ===== HEART EFFECT ===== */

const heartsContainer = document.querySelector(".hearts");

function createHeart(){
  if(!heartsContainer) return;

  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "❤️";

  const size = Math.random()*10 + 35;
  heart.style.fontSize = size + "px";
  heart.style.left = Math.random()*100 + "%";
  heart.style.animationDuration = (Math.random()*3 + 4) + "s";

  heartsContainer.appendChild(heart);

  setTimeout(()=>heart.remove(),8000);
}

setInterval(createHeart,300);


/* ===== PIN PAGE ONLY ===== */

let pin = [];

const correctPin = "1106";

const pinBox = document.getElementById("pinBox");
const loading = document.getElementById("loading");

function renderPin(){
  if(!pinBox) return;

  const dots = pinBox.querySelectorAll("span");
  dots.forEach((dot,i)=>{
    dot.classList.toggle("filled", i < pin.length);
  });
}

function press(num){
  if(!pinBox) return;

  if(pin.length >= 4) return;
  pin.push(num);
  renderPin();
}

function clearPin(){
  if(!pinBox) return;

  pin = [];
  renderPin();
}

function checkPin(){
  if(!pinBox) return;

  if(pin.length < 4) return;

  if(pin.join("") === correctPin){
    loading.style.display = "block";

    setTimeout(()=>{
      window.location.href = "anniversary.html";
    },1200);

  }else{
    alert("Sai mật mã rồi 😭");
    clearPin();
  }
}
