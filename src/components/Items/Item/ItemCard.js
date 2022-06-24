import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "../Item/Item.css"



 function ItemCard({data}) {

  const {login, type, node_id, avatar_url} = data

  return (
    <>

    <Card sx={{ maxWidth: 345}}>
      <CardMedia
        component="img"
        alt="Usuarios"
        image={avatar_url}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div"  >
          {`USUARIO: ${login}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {type}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {node_id}
        </Typography>
      </CardContent>
    </Card>
    <div className="div-cart">
      <h6>{`Usuario :${login}`}</h6>
    </div>

    </>
  );
}

export default ItemCard;