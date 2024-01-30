const Candy = (props) => {
  return ( 
    <div>
      {props.candy.name}, {props.candy.size} ({props.candy.quantity})
    </div>
  )
}

export default Candy;