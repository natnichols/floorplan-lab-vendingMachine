const Chip = (props) => {
  return ( 
    <div>
      {props.chip.name} ({props.chip.quantity})
      <li>{props.chip.vegan ? "V" : "not Vegan"}, {props.chip.gluten ? "not GF" : "GF"}</li>
    </div>
  )
}

export default Chip;