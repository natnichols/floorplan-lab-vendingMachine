import Drink from "./Drink";
import Candy from "./Candy";
import Chip from "./Chip";

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
        <Candy candy={{name: "Twizzlers", size: "small", quantity: "20" }} />
        <Candy candy={{name: "Junior Mints", size: "large", quantity: "18" }} />
        <Candy candy={{name: "Milky Way Midnight", size: "small", quantity: "21" }} />
      </div>
      <div>
        <h3>Chips:</h3>
        <Chip chip={{name: "Classic Baked Lays", quantity: "7", vegan:1, gluten:0 }} />
      </div>
    </div>
  )
}

export default VendingMachine;