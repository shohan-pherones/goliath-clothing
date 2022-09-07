// Items
const items = [
  {
    title: "The Drop Women's Greta Fitted Square Neck Halter Sweater Bralette",
    price: 29.9,
    img: "https://m.media-amazon.com/images/I/816JswG0XbL._AC_UY550_.jpg",
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
            <div class="p-3">
              <h3 class="text-xl mb-3">${items[i].title}</h3>
              <p class="text-4xl mb-3">$<span>${items[i].price}</span></p>
              <a
                href="#"
                class="text-lg text-cyan-500 hover:text-red-500 ease-in-out duration-300"
                >Buy &rarr;</a
              >
            </div>
    `;

    itemsContainer.append(itemEl);
  }
}

displayItems();
