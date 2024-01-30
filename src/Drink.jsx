const Drink = (props) => {
  return ( 
    <div>
      <h2>Drinks</h2>
      {props.name}:
      <li>Quantity: {props.quantity}</li>
      <li>Carbonated: {props.quantity}</li>
      <li>Sugar-Free: {props.quantity}</li>
      
    </div>
  )
}

export default Drink;