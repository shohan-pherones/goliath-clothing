// Items
const items = [
  {
    title: "The Drop Women's Greta Fitted Square Neck Halter Sweater Bralette",
    price: 29.9,
    img: "https://m.media-amazon.com/images/I/816JswG0XbL._AC_UY550_.jpg",
  },
  {
    title:
      "Anne Cole Women's Solid Twist Front Shirred Bandeau Tankini Swim Top",
    price: 18.0,
    img: "https://m.media-amazon.com/images/I/71iFOb-FeSL._AC_UY550_.jpg",
  },
  {
    title:
      "Tommy Hilfiger Women's Bandeau Tube Top with Classic Tommy Jeans Color Block and Logo",
    price: 10.93,
    img: "https://m.media-amazon.com/images/I/81xHlTBI1rL._AC_UY550_.jpg",
  },
  {
    title: "The Drop Women's Christy Cowl Neck Cami Silky Stretch Top",
    price: 39.9,
    img: "https://m.media-amazon.com/images/I/81aw-E483-L._AC_UY550_.jpg",
  },
  {
    title: "Jessica Simpson Women's Melinda Scoop Neck Textured High Low Top",
    price: 9.0,
    img: "https://m.media-amazon.com/images/I/71efICFMXeL._AC_UY550_.jpg",
  },
  {
    title: "Seafolly Women's Banded Longline Triangle Bikini Top Swimsuit",
    price: 51.41,
    img: "https://m.media-amazon.com/images/I/71amt8sOe2L._AC_UX466_.jpg",
  },
  {
    title:
      "Rip Curl Women's Standard Classic Surf Cross Back Bikini, Adjustable Swim Suit Top",
    price: 25.3,
    img: "https://m.media-amazon.com/images/I/71KrW0xqq2L._AC_UY550_.jpg",
  },
  {
    title: "Levi's Women's Mid Length Shorts",
    price: 25,
    img: "https://m.media-amazon.com/images/I/51lrRUxVSNL._AC_UX522_.jpg",
  },
  {
    title: "Hanes Sport Men's Performance Muscle Tee",
    price: 8.39,
    img: "https://m.media-amazon.com/images/I/81BHZa2boZL._AC_UY550_.jpg",
  },
  {
    title:
      "Callaway Men's Pro Spin Fine Line Short Sleeve Golf Shirt (Size X-Small-4X Big & Tall)",
    price: 39.0,
    img: "https://m.media-amazon.com/images/I/61ZuFapuBlL._AC_UX522_.jpg",
  },
  {
    title: "Columbia Men's Leadville Ridge Short Sleeve Shirt Ii",
    price: 19.98,
    img: "https://images-na.ssl-images-amazon.com/images/I/71cloLsg-8L.__AC_SX300_SY300_QL70_FMwebp_.jpg",
  },
  {
    title: "Hugo Boss Men's Regular Fit Reversed Logo Short Sleeve Polo Shirt",
    price: 32.4,
    img: "https://m.media-amazon.com/images/I/81Nwu322xrL._AC_UY550_.jpg",
  },
  {
    title:
      "The Drop Women's Gabriela High Neck Cut-In A-Line Side Slit Maxi Sweater Dress",
    price: 49.9,
    img: "https://m.media-amazon.com/images/I/71ehqv1vzKL._AC_UY550_.jpg",
  },
  {
    title:
      "Warner's Women's Cloud 9 Super Soft Wireless Lightly Lined Comfort Bra Ro5691a",
    price: 16.0,
    img: "https://m.media-amazon.com/images/I/81YzTOVUjBL._AC_UX569_.jpg",
  },
  {
    title:
      "The Drop Women's Mariko Puff-Sleeve Crew-Neck Stretch Jersey T-Shirt",
    price: 16.3,
    img: "https://m.media-amazon.com/images/I/91w3TMrcOSL._AC_UY550_.jpg",
  },
  {
    title:
      "Floerns Women's Leopard Print Color Block T Shirts Short Sleeve Round Neck Tee Tops",
    price: 14.99,
    img: "https://m.media-amazon.com/images/I/81oHRhtTRvL._AC_UY550_.jpg",
  },
  {
    title:
      "ARRIVE GUIDE Crop Top Athletic Shirts for Women Cute Sleeveless Yoga Tops Running Gym Workout Shirts",
    price: 19.99,
    img: "https://m.media-amazon.com/images/I/61ZUo08E-ML._AC_SX522._SX._UX._SY._UY_.jpg",
  },
  {
    title:
      "SheIn Women's Casual Self Tie Waist Frill Double Pocket Short Skirt",
    price: 30.99,
    img: "https://m.media-amazon.com/images/I/71-q+J42ZMS._AC_SY550._SX._UX._SY._UY_.jpg",
  },
  {
    title:
      "eoeoo Women's Ruched Bodycon Skirt High Waist Elastic Tight Sexy Club Mini Skirt",
    price: 19.99,
    img: "https://m.media-amazon.com/images/I/51erJlSw+KL._AC_UY550_.jpg",
  },
  {
    title: "Shirts for Men Active Shirt Mens Large Tall Shirts",
    price: 16.24,
    img: "https://m.media-amazon.com/images/I/81AULfjj4MS._AC_UX522_.jpg",
  },
  {
    title: "Wacoal Women's Halo Underwire Bra",
    price: 24.66,
    img: "https://m.media-amazon.com/images/I/81YpsSSXlJS._AC_UX522_.jpg",
  },
  {
    title:
      "Warner's Women's Cloud 9 Super Soft Wireless Lightly Lined Comfort Bra Ro5691a",
    price: 16.0,
    img: "https://m.media-amazon.com/images/I/812S2+5OBWL._AC_UX425_.jpg",
  },
  {
    title:
      "LEVAO Women Lace Underwear Sexy Breathable Hipster Panties Stretch Seamless Bikini Briefs 6 Pack",
    price: 16.86,
    img: "https://m.media-amazon.com/images/I/711zS-zhg4L._AC_UX679_.jpg",
  },
  {
    title:
      "Donnalla Women Sexy Lingerie Set Two Piece Lace Bra and Panty Set Bralette Sleepwear",
    price: 16.99,
    img: "https://m.media-amazon.com/images/I/61xu2u8rVES._AC_UY550_.jpg",
  },
];

// Display items
function displayItems() {
  const itemsContainer = document.querySelector(".items");

  for (let i = 0; i < items.length; i++) {
    const itemEl = document.createElement("div");
    itemEl.classList.add(
      "item",
      "col",
      "max-w-xs",
      "bg-white",
      "overflow-hidden",
      "rounded-lg",
      "drop-shadow-md",
      "p-0"
    );

    itemEl.innerHTML = `
            <div class="overflow-hidden h-60 flex justify-start">
              <img src="${items[i].img}" class="w-full object-contain" />
            </div>
            <div class="item-body p-3 h-60 flex flex-col">
              <h3 class="text-lg mb-auto">${items[i].title}</h3>
              <div class="item-body-price-btn flex mb-3">
                <p class="text-4xl">$<span>${items[i].price}</span></p>
              <button
                class="text-lg text-cyan-500 hover:text-red-500 ease-in-out duration-300 buy-btn"
                >Buy &rarr;</button>
              </div>
            </div>
    `;

    itemsContainer.append(itemEl);
  }
}

displayItems();

// Display modal
function displayModal() {
  const buyBtn = document.querySelectorAll(".buy-btn");

  for (let i = 0; i < buyBtn.length; i++) {
    buyBtn[i].addEventListener("click", function () {
      for (let j = 0; j < items.length; j++) {
        if (i === j) {
          const overlay = document.querySelector(".overlayWindow");
          const modal = document.createElement("div");
          modal.classList.add(
            "modalWindow",
            "container",
            "drop-shadow-2xl",
            "rounded-xl",
            "p-5",
            "flex",
            "flex-col",
            "gap-3",
            "max-w-xs"
          );

          // Calculations
          const productTitle = items[j].title;
          const price = items[j].price;
          const shipping = Number(((price * 5) / 100).toFixed(2));
          const subTotal = Number((price + shipping).toFixed(2));

          // Show modal and overlay
          modal.style.opacity = 1;
          modal.style.visibility = "visible";
          overlay.style.opacity = 1;
          overlay.style.visibility = "visible";

          modal.innerHTML = `
          <h2 class="text-lg mb-3">${productTitle}</h2>
          <h2 class="flex justify-between"><span>Price</span> <span class="font-semibold">$${price}</span></h2>
          <h2 class="flex justify-between"><span>Shipping Cost</span> <span class="font-semibold">$${shipping}</span></h2>
          <hr>
          <h2 class="flex justify-between text-red-500"><span>Subtotal</span> <span class="font-semibold">$${subTotal}</span></h2>
          <a href="#" class="text-xl text-cyan-500 hover:text-red-500 ease-in-out duration-300 mt-3">Checkout &rarr;</a>
          `;

          // Display details
          const modalHolder = document.querySelector(".modal-holder");
          modalHolder.append(modal);

          // Hide modal and overlay

          overlay.addEventListener("click", function () {
            modal.style.opacity = 0;
            modal.style.visibility = "hidden";
            overlay.style.opacity = 0;
            overlay.style.visibility = "hidden";
          });
        }
      }
    });
  }
}

displayModal();
