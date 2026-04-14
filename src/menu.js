import { card } from "./home.js";
const burgers = [
  {
    name: "Classic Cheeseburger",
    price: 5.99,
    image:
      "https://images.weserv.nl/?url=foodish-api.com/images/burger/burger1.jpg&w=300",
  },
  {
    name: "Bacon Deluxe Burger",
    price: 7.49,
    image:
      "https://images.weserv.nl/?url=foodish-api.com/images/burger/burger2.jpg&w=300",
  },
  {
    name: "Double Smash Burger",
    price: 8.99,
    image:
      "https://images.weserv.nl/?url=foodish-api.com/images/burger/burger3.jpg&w=300",
  },
  {
    name: "Spicy Jalapeño Burger",
    price: 6.99,
    image:
      "https://images.weserv.nl/?url=foodish-api.com/images/burger/burger4.jpg&w=300",
  },
  {
    name: "Mushroom Swiss Burger",
    price: 7.25,
    image:
      "https://images.weserv.nl/?url=foodish-api.com/images/burger/burger5.jpg&w=300",
  },
  {
    name: "BBQ Onion Ring Burger",
    price: 8.49,
    image:
      "https://images.weserv.nl/?url=foodish-api.com/images/burger/burger6.jpg&w=300",
  },
];
const pizzas = [
  {
    name: "Margherita Pizza",
    price: 6.99,
    image:
      "https://images.weserv.nl/?url=foodish-api.com/images/pizza/pizza1.jpg&w=300",
  },
  {
    name: "Pepperoni Pizza",
    price: 7.99,
    image:
      "https://images.weserv.nl/?url=foodish-api.com/images/pizza/pizza2.jpg&w=300",
  },
  {
    name: "Veggie Supreme",
    price: 7.49,
    image:
      "https://images.weserv.nl/?url=foodish-api.com/images/pizza/pizza3.jpg&w=300",
  },
  {
    name: "BBQ Chicken Pizza",
    price: 8.99,
    image:
      "https://images.weserv.nl/?url=foodish-api.com/images/pizza/pizza4.jpg&w=300",
  },
  {
    name: "Four Cheese Pizza",
    price: 8.49,
    image:
      "https://images.weserv.nl/?url=foodish-api.com/images/pizza/pizza5.jpg&w=300",
  },
  {
    name: "Meat Lovers Pizza",
    price: 9.99,
    image:
      "https://images.weserv.nl/?url=foodish-api.com/images/pizza/pizza6.jpg&w=300",
  },
];
const fries = [
  {
    name: "Classic French Fries",
    price: 2.49,
    image:
      "https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    name: "Curly Fries",
    price: 2.99,
    image:
      "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    name: "Loaded Cheese Fries",
    price: 4.49,
    image:
      "https://images.pexels.com/photos/2313686/pexels-photo-2313686.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    name: "Sweet Potato Fries",
    price: 3.49,
    image:
      "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
];
const icecreams = [
  {
    name: "Vanilla Bean Cone",
    price: 2.99,
    image:
      "https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    name: "Chocolate Fudge Sundae",
    price: 4.49,
    image:
      "https://images.pexels.com/photos/5947115/pexels-photo-5947115.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    name: "Strawberry Scoop",
    price: 2.49,
    image:
      "https://images.pexels.com/photos/5945561/pexels-photo-5945561.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
];

const coffees = [
  {
    name: "Classic Espresso",
    price: 2.49,
    image:
      "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    name: "Creamy Latte",
    price: 3.49,
    image:
      "https://images.pexels.com/photos/350478/pexels-photo-350478.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    name: "Caramel Macchiato",
    price: 3.99,
    image:
      "https://images.pexels.com/photos/2668498/pexels-photo-2668498.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    name: "Iced Americano",
    price: 2.99,
    image:
      "https://images.pexels.com/photos/302896/pexels-photo-302896.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    name: "Mocha Frappe",
    price: 4.49,
    image:
      "https://images.pexels.com/photos/128242/pexels-photo-128242.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
];
function loadMenu() {
  const container = document.querySelector("#content");
  container.innerHTML = "";
  let wrapper = document.createElement("div");
  wrapper.setAttribute("class", "wrapper");
  wrapper.textContent = "Burger";
  for (let i = 0; i < burgers.length; i++) {
    card(wrapper, burgers[i].image, burgers[i].price, burgers[i].name);
  }
  let wrapper2 = document.createElement("div");
  wrapper2.setAttribute("class", "wrapper");
  wrapper2.textContent = "Pizza";
  for (let i = 0; i < pizzas.length; i++) {
    card(wrapper2, pizzas[i].image, pizzas[i].price, pizzas[i].name);
  }

  let wrapper3 = document.createElement("div");
  wrapper3.setAttribute("class", "wrapper");
  wrapper3.textContent = "Fries";
  for (let i = 0; i < fries.length; i++) {
    card(wrapper3, fries[i].image, fries[i].price, fries[i].name);
  }
  let wrapper4 = document.createElement("div");
  wrapper4.setAttribute("class", "wrapper");
  wrapper4.textContent = "Ice Creams";
  for (let i = 0; i < icecreams.length; i++) {
    card(wrapper4, icecreams[i].image, icecreams[i].price, icecreams[i].name);
  }
  let wrapper5 = document.createElement("div");
  wrapper5.setAttribute("class", "wrapper");
  wrapper5.textContent = "Coffees";
  for (let i = 0; i < coffees.length; i++) {
    card(wrapper5, coffees[i].image, coffees[i].price, coffees[i].name);
  }

  container.append(wrapper, wrapper2, wrapper3, wrapper4, wrapper5);
}
export default loadMenu;
