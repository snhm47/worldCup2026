const instagramPage = "https://www.instagram.com/world.cup2026.store/";

const products = [
  {
    name: "بلوزة البرازيل السوداء",
    player: "Raphinha / رقم 10",
    price: 130,
    front: "images/brasil-black-front.jpg",
    back: "images/brasil-black-back.jpg"
  },
  {
    name: "بلوزة ألمانيا البيضاء",
    player: "Musiala / رقم 10",
    price: 130,
    front: "images/germany-front.jpg",
    back: "images/germany-back.jpg"
  },
  {
    name: "بلوزة الأرجنتين",
    player: "Messi / رقم 10",
    price: 130,
    front: "images/argentina-front.jpg",
    back: "images/argentina-back.jpg"
  },
  {
    name: "بلوزة البرازيل الصفراء",
    player: "Vini Jr. / رقم 7",
    price: 130,
    front: "images/brasil-yellow-front.jpg",
    back: "images/brasil-yellow-back.jpg"
  }
];

const productsGrid = document.getElementById("productsGrid");

function renderProducts() {
  productsGrid.innerHTML = "";

  products.forEach((product, index) => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img 
        src="${product.front}" 
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

        <button onclick="orderProduct('${product.name}')">
          اطلب الآن
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
  window.open(instagramPage, "_blank");
}

function orderProduct(productName) {
  alert("راح نفتحلك الإنستغرام. ابعتلنا رسالة واكتب: بدي " + productName);
  window.open(instagramPage, "_blank");
}

renderProducts();