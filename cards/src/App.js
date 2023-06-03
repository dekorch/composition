import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "./components/Card.js";
import { nanoid } from "nanoid";

const Cards = [
  {
    img: "http://via.placeholder.com/200x150",
    title: "Card title",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    link: "#",
    linkTitle: "Go somewhere"
  },
  {
    title: "Special title treatment",
    text: "With supporting text below as a natural lead-in to additional content.",
    link: "#",
    linkTitle: "Go somewhere"
  },
];

export default function App() {
  return (
    <div className="App">
      {Cards.map((card) => (
        <Card key={nanoid()} {...card}>
          {card.img ? (
            <img src={card.img} className="card-img-top" alt="..." />
          ) : null}
        </Card>
      ))}
    </div>
  );
}