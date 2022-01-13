import React from "react";
import Recipe from "./Recipes";

function Menu({ recipes }) {
  return (
    <article>
      <header>
        <h1>Delicios Recipes</h1>
      </header>
      <div className="recipes">
        {recipes.map((recipe, i) => (
          <Recipe key={i} {...recipe} />
        ))}
      </div>
    </article>
  );
}

export default Menu;