import React, { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import axios from 'axios'

//Components
import "../ItemListContainer/ItemListContainer.css";
import ItemCard from "../../Items/Item/ItemCard";


const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  console.log("DATA:", items);

  useEffect(() => {
    // Llamar a la api
    axios("https://api.github.com/users").then((res)=>
    setItems(res.data)
    )
      // setUsers: le paso a users toda la data de la API
  }, []);
  return (
    <>
      {/* <ItemList data = {items} /> */}
      <div className="container">

      
      <Grid container>
        {items.map((item) => {
          return (
            <Grid key={item.id} item xs={2} sm={4} md= {4}>
              <Box margin={3}>
                <Link
                  to={`./ItemDetail/${item.login}`}
                  style={{ textDecoration: "none" }}
                >
                  <ItemCard data={item} />
                </Link>
              </Box>
            </Grid>
          );
        })}
      </Grid>
      </div>
    </>
  );
};

export default ItemListContainer;
