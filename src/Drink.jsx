const Drink = (props) => {
  return ( 
    <div>
      {props.drink.name} ({props.drink.quantity})
      <li>{props.drink.fizz === 1 ? "Carbonated" : "Non-Carbonated" }</li>
      <li>{props.drink.buzz === 1 ? "Caffeinated" : "Non-Caffeinated" }</li>
    </div>
  )
}

export default Drink;