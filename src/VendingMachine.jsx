import Drink from "./Drink";
import Candy from "./Candy";

const VendingMachine = () => {
  return ( 
    <div>
      <h2>Ghost with a Dollar's Vending Machine</h2>
      <div>
        <h3>Drinks:</h3>
        <Drink drink={{name: "Cherry Coke", quantity: "8", fizz:1, buzz:1 }} />
        <Drink drink={{name: "Ginger Ale", quantity: "7", fizz:1, buzz:0 }} />
        <Drink drink={{name: "Vitamin Water", quantity: "8", fizz:0, buzz:0 }} />
      </div>
      <div>
        <h3>Candy:</h3>
        <Candy />
      </div>
    </div>
  )
}

export default VendingMachine;