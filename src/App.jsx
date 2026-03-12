import { useState } from "react";

import { categories, menuItems } from "./data/menuItems";
import Header from "./components/Header";
import CategoryFilter from "./components/CategoryFilter";
import MenuCard from "./components/MenuCard";
import Footer from "./components/Footer";

import "./styles/global.css";

export default function App() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filtered =
    activeCategory === "Todos"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <div className="app">
      <Header />

      <CategoryFilter
        categories={categories}
        active={activeCategory}
        onChange={setActiveCategory}
      />

      <p style={{ padding: "24px 24px 12px", fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "13px", color: "#9C7A5B" }}>
        {activeCategory === "Todos"
          ? `${filtered.length} itens no cardápio`
          : `${filtered.length} itens em ${activeCategory}`}
      </p>

      <div style={{ padding: "0 16px 100px", display: "flex", flexDirection: "column", gap: "14px" }}>
        {filtered.map((item, index) => (
          <MenuCard
            key={item.id}
            item={item}
            featured={index === 0 && activeCategory === "Todos"}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}
