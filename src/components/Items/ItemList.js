
import { Box, Grid } from "@mui/material";
import Item from "./Item";
import "../../hojas-de-estilo/ItemList.css";

const ItemList = ({data}) => {
  //La logica de mi programa siempre se encuentra antes del return y despues de declarar mi ItemList
  console.log('data:', data)
  //Crear un grid
  return (
    <div>
        <h1 style={{textAlign:"center", marginTop:20}}>Users</h1>
      <div className="container">

        <Grid container>
          {data.map((item) => (
            <Grid key={item.id} item xs= {2} sm={4} md={4}>
                <Box margin={3}>
                  <Item data={item} />
                </Box>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );

  
};

export default ItemList;
