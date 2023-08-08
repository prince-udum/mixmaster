import React from "react";
import Wrapper from "../assets/wrappers/CocktailList";
import CocktailCard from "../components/CocktailCard";

const CocktailList = ({ drinks }) => {
  if (!drinks) {
    return <h4 style={{ textAlign: "center" }}>No matching cocktail found</h4>;
  }

  const formattedDrinks = drinks.map((item) => {
    const { idDrink, strDrink, strAlcoholic, strDrinkThumb, strGlass } = item;
    return {
      id: idDrink,
      name: strDrink,
      img: strDrinkThumb,
      info: strAlcoholic,
      glass: strGlass,
    };
  });
  return (
    <Wrapper>
      {formattedDrinks.map((item) => {
        return <CocktailCard {...item} key={item.id} />;
      })}
    </Wrapper>
  );
};

export default CocktailList;
