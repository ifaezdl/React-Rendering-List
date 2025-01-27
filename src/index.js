import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = { color: "red", fontSize: "50px" };
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Company</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our pizza menu !</h2>
      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizzaObj={pizza} />
        ))}
      </ul>
      {/* 
      <Pizza
        name="pizza margherita"
        ingredient="Tomato,Mozorella"
        photoName="pizzas/margherita.jpg"
        price={10}
      />
      <Pizza
        name="pizza Funghi"
        ingredient="Tomato,mushrooms"
        photoName="pizzas/funghi.jpg"
        price={12}
      />
      <Pizza
        name="pizza salamino"
        ingredient="potato,anion"
        photoName="pizzas/salamino.jpg"
        price={30}
      /> */}
    </main>
  );
}
function Pizza(props) {
  props = props.pizzaObj;
  const { name, ingredient, photoName, price } = props;
  return (
    <li className="pizza">
      <img src={photoName} alt="no" />
      <div>
        <h3>{name}</h3>
        <p>{ingredient}</p>
        <span>{price + 3000}</span>
      </div>
    </li>
  );
}

function Footer() {
  // const hour = new Date().getHours();
  // const openHour = 12;
  // const closeHour = 22;
  //const isOpen = hour >= openHour && hour <= closeHour;
  //alert(isOpen);
  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()} we're currently open
    </footer>
  );
  // return React.createElement("footer", null, "we're currently open");
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
