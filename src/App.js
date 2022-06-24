import React from "react";
import "./style.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

//Components
import NavBar from "./components/NavBar/NavBar";
//import ItemCounter from "../src/components/Items/ItemCounter/ItemCounter";
import ItemListContainer from "./components/Items/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/Views/ItemDetailContainer";



const App = () => {
  return (
    <Router>
        <div>
      <NavBar />
      <div>
        <div>
          <div className = "container">
            {/* <ItemListContainer/>  */}
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
