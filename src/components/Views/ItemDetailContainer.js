import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// import { Box, Grid } from "@mui/material";
//Components
import "../../hojas-de-estilo/ItemList.css";
import "../Views/ItemDetail.css"
import ItemCard from "../Items/Item";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});

  let { id } = useParams();
  // console.log("DATA:", item);

  useEffect(() => {
    // Llamar a la api
    axios(`https://api.github.com/users/${id}`).then((res) =>
      setItem(res.data)
    );
  }, [id]);

  return (
    <div className="ItemList-container">        
		<ItemCard data={item} />        
    </div>
);
};

export default ItemDetailContainer;
