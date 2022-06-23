import React from "react";
import "./hojas-de-estilo/style.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

//Components
import NavBar from "./components/NavBar/NavBar";
import ItemCounter from "./components/Items/ItemCounter";
import ItemListContainer from "./components/Items/ItemListContainer";
import ItemDetailContainer from "./components/Views/ItemDetailContainer";



const App = () => {
  return (
    <Router>
        <div>
      <NavBar />
      <div>
        <div>
          <div className = "container">
            {/* <ItemListContainer/> */}
          </div> 

          {/* <div>
            <ItemCounter
              stock={10}
              initial={1}
              onAdd={(cantidadDeProductos) =>
                console.log(`cantidadDeProductos: ${cantidadDeProductos}`)
              }
            />
          </div> */}
            
            <Routes>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/ItemDetail/:id' element={<ItemDetailContainer />}/>
            </Routes>
      
        </div>
      </div>
    </div>




    </Router>
    
  );
};

export default App;
