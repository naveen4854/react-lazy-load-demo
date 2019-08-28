import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import LazyLoadDemoApp from "./lazy-load-demo";
import PureComponentDemoApp from "./pure-component-demo";

function randomValue() {
  return Math.round(1000 + Math.random() * 1000) / 10;
}

function daysAgo(days) {
  return new Date(Date.now() - days * 24 * 60 * 60 * 1000);
}

function fakeStock(name) {
  const today = randomValue();
  const yesterday = randomValue();
  const change = Math.round((1000 * (today - yesterday)) / yesterday) / 10;
  return {
    name,
    today,
    change,
    data: [
      { x: daysAgo(4), y: randomValue() },
      { x: daysAgo(3), y: randomValue() },
      { x: daysAgo(2), y: randomValue() },
      { x: daysAgo(1), y: yesterday },
      { x: daysAgo(0), y: today }
    ]
  };
}

const stocks = [
  fakeStock("Apple"),
  fakeStock("Citigroup"),
  fakeStock("General Electric"),
  fakeStock("Google"),
  fakeStock("Microsoft")
];

// ReactDOM.render(<LazyLoadDemoApp stocks={stocks} />, document.getElementById("root"));
ReactDOM.render(<PureComponentDemoApp />, document.getElementById("root"));
