function GroceryListItem(props) {
  return (
    <li onClick={() => console.log("Item cliqué")}>
      {props.name}
    </li>
  );
}

export default GroceryListItem;