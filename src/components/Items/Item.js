import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';



 function ItemCard({data}) {

  const {login, type, node_id, avatar_url} = data

  return (
    <Card sx={{ maxWidth: 345}}>
      <CardMedia
        component="img"
        alt="Usuarios"
        height="140"
        image={avatar_url}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {login}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {type}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {node_id}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ItemCard;