const instagramChat = "https://ig.me/m/world.cup2026.store";

const products = [
  {
  name: "بلوزة البرازيل الصفراء",
  player: "Neymar Jr. / رقم 10",
  price: 130,
  front: "images/brasil-yellow-vini10-front.png",
  back: "images/brasil-yellow-neymar10-back.png",
  soldOut: false
  },
  {
  name: "بلوزة البرازيل الصفراء",
  player: "Vini Jr. / رقم 10",
  price: 100,
  front: "images/brasil-yellow-vini10-front.png",
  back: "images/brasil-yellow-vini10-back.png",
  soldOut: false
  },
  {
  name: "بلوزة البرازيل الزرقاء",
  player: "Neymar Jr. / رقم 10",
  price: 130,
  front: "images/brasil-black-front.jpg",
  back: "images/brasil-blue-neymar10-back.png",
  soldOut: true
  },
  {
    name: "بلوزة البرازيل الزرقاء",
    player: "Raphinha / رقم 11",
    price: 130,
    front: "images/brasil-raphinha11-front.png",
    back: "images/brasil-raphinha11-back.png",
    soldOut: false
  },
  {
    name: "بلوزة البرازيل الزرقاء",
    player: "Raphinha / رقم 10",
    price: 100,
    front: "images/brasil-black-front.jpg",
    back: "images/brasil-black-back.jpg",
    soldOut: false
  },
  {
    name: "بلوزة البرازيل الزرقاء",
    player: "Vini Jr. / رقم 10",
    price: 100,
    front: "images/brasil-vini10-front.png",
    back: "images/brasil-vini10-back.png",
    soldOut: false
  },
  {
    name: "بلوزة الأرجنتين",
    player: "Messi / رقم 10",
    price: 130,
    front: "images/argentina-front.jpg",
    back: "images/argentina-back.jpg",
    soldOut: true
  },
    {
    name: "بلوزة فرنسا الزرقاء",
    player: "Mbappe / رقم 10",
    price: 130,
    front: "images/france-front.png",
    back: "images/france-back.png",
    soldOut: false
  },
  {
    name: "بلوزة كرواتيا",
    player: "Modrić / رقم 10",
    price: 130,
    front: "images/croatia-modric10-front.png",
    back: "images/croatia-modric10-back.png",
    soldOut: false
  },
    {
    name: "بلوزة ألمانيا البيضاء",
    player: "Musiala / رقم 10",
    price: 130,
    front: "images/germany-front.jpg",
    back: "images/germany-back.jpg",
    soldOut: true
  },
  {
    name: "بلوزة البرازيل الصفراء",
    player: "Vini Jr. / رقم 7",
    price: 130,
    front: "images/brasil-yellow-front.jpg",
    back: "images/brasil-yellow-back.jpg",
    soldOut: true
  },
  {
    name: "بلوزة البرتغال",
    player: "Ronaldo / رقم 7",
    price: 130,
    front: "images/portugal-front.jpg",
    back: "images/portugal-back.jpg",
    soldOut: true
  },

];

const productsGrid = document.getElementById("productsGrid");

function renderProducts() {
  productsGrid.innerHTML = "";

  products.forEach((product, index) => {
    const card = document.createElement("div");
    card.className = product.soldOut ? "product-card sold-out" : "product-card";

    card.innerHTML = `
      ${product.soldOut ? `<div class="sold-out-badge">SOLD OUT</div>` : ""}

      <img 
        src="${product.back}" 
        alt="${product.name}" 
        class="product-image" 
        id="product-img-${index}"
      />

      <div class="product-info">
        <h3>${product.name}</h3>
        <p>${product.player}</p>

        <div class="price-row">
          <span>السعر</span>
          <strong>${product.price} شيكل</strong>
        </div>

        <button 
          class="order-btn"
          ${product.soldOut ? "disabled" : `onclick="orderProduct(${index})"`}
        >
          ${product.soldOut ? "نفدت الكمية" : "اطلب الآن"}
        </button>
      </div>

      <div class="image-switch">
        <button onclick="changeImage(${index}, 'front')">الواجهة</button>
        <button onclick="changeImage(${index}, 'back')">الخلف</button>
      </div>
    `;

    productsGrid.appendChild(card);
  });
}

function changeImage(index, side) {
  const img = document.getElementById(`product-img-${index}`);
  img.src = side === "front" ? products[index].front : products[index].back;
}

function orderNow() {
  const message = "مرحبا، بدي أطلب بلوزة من بلوزات كأس العالم 2026";
  navigator.clipboard.writeText(message);
  window.open(instagramChat, "_blank");
}

function orderProduct(index) {
  const product = products[index];

  if (product.soldOut) return;

  const message = `مرحبا، بدي أطلب ${product.name} - ${product.player}`;
  navigator.clipboard.writeText(message);
  window.open(instagramChat, "_blank");
}

renderProducts();