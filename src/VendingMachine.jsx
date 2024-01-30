import Drink from "./Drink";

const VendingMachine = () => {
  return ( 
    <div>
      Ghost with a Dollar's Vending Machine
      <Drink drink={{name: "Cherry Coke", quantity: "8", fizz:1, buzz:1 }} />
    </div>
  )
}

export default VendingMachine;