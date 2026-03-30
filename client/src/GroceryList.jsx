import GroceryListItem from "./GroceryListItem";

function GroceryList() {
  const items = ["Pommes", "Bananes", "Fraises"];

  return (
    <ul>
      {items.map((item) => (
        <GroceryListItem key={item} name={item} />
      ))}
    </ul>
  );
}

export default GroceryList;