const foodItems = [
  {
    name: "Classic Burger",
    price: 5.99,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Cheese Burger",
    price: 6.49,
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=500&q=80",
  },

  {
    name: "French Fries",
    price: 3.49,
    image:
      "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Loaded Fries",
    price: 4.99,
    image:
      "https://images.unsplash.com/photo-1598679253544-2c97992403ea?auto=format&fit=crop&w=500&q=80",
  },

  {
    name: "Chicken Nuggets",
    price: 5.25,
    image:
      "https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=500&q=80",
  },

  {
    name: "Tacos",
    price: 5.5,
    image:
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Burrito",
    price: 6.99,
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Club Sandwich",
    price: 6.25,
    image:
      "https://images.unsplash.com/photo-1550317138-10000687a72b?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Donut",
    price: 2.99,
    image:
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Chocolate Donut",
    price: 3.49,
    image:
      "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Ice Cream",
    price: 3.75,
    image:
      "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Milkshake",
    price: 4.5,
    image:
      "https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=500&q=80",
  },

  {
    name: "Waffles",
    price: 6.49,
    image:
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=500&q=80",
  },

  {
    name: "Grilled Chicken",
    price: 8.75,
    image:
      "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Salad Bowl",
    price: 5.99,
    image:
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Caesar Salad",
    price: 6.99,
    image:
      "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Sushi",
    price: 10.99,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Ramen",
    price: 9.49,
    image:
      "https://images.unsplash.com/photo-1557872943-16a5ac26437e?auto=format&fit=crop&w=500&q=80",
  },
];
export function card(ele, itemImage, itemPrice, itemName) {
  let card = document.createElement("div");
  let name = document.createElement("div");
  card.setAttribute("class", "card");
  name.setAttribute("class", "name");
  card.style.background = `url(${itemImage})`;
  card.style.backgroundSize = "cover";
  card.style.backgroundPosition = "center";
  let price = document.createElement("div");
  price.setAttribute("class", "price");
  price.textContent = `${itemPrice}$`;
  name.textContent = `${itemName}`;
  card.appendChild(price);
  card.appendChild(name);
  ele.appendChild(card);
}

function loadHome() {
  const container = document.querySelector("#content");
  container.innerHTML = "";
  for (let i = 0; i < foodItems.length; i++) {
    card(
      document.querySelector("#content"),
      foodItems[i].image,
      foodItems[i].price,
      foodItems[i].name,
    );
  }
}

export default loadHome;
