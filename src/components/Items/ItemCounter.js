import { useState } from "react";
import "../../hojas-de-estilo/Buttons.css";

function ItemCounter({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);
  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    } else {
      alert("Limite de Items Alcanzados");
      console.log("Limite Alcanzado");
    }
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("No puedes tener menos de 0 items");
      console.log("Limite negativo alcanzado");
    }
  };

  const addToCart = () => {
    if (stock > 0 && count > 0) {
      onAdd(count);
    }
  };

  return (
    <>
      <div className="btn-format">
        <div className="btn-container">
          <div className="btn-container">
            <p>Items {count}</p>
          </div>
          <div>
            <button onClick={decrement} className="btnEffect1"> - </button>
            <button onClick={increment} className="btnEffect2"> + </button>
          </div>
          <div>
            <button className="agregar-carrito" onClick={addToCart}>
              agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemCounter;
