import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ShoppingCart } from '@mui/icons-material';
import { Rating, Stack } from '@mui/material';
import { useStateContext } from '../../contexts/AppContextProvider';

export default function Product({product,handleClick}) {

  const {_setCartItems}=useStateContext();
  const handleAddToCart=()=>{
      handleClick();
    _setCartItems({...product,Quantity:1});

  }
  return (
    <Card sx={{ 
                maxWidth: 350,
                display:"flex",
                flexDirection:"column",
                justifyContent:"space-between",
                mb:"12px"
                
              }}
      >
      <CardMedia
        component="img"
        alt="green iguana"
        height="320"
        image={product.image}
      />
      <CardContent>
          <Stack direction={"row"} alignItems={"center"}>
            <Typography flexGrow={1} sx={{maxWidth:"250px"}}variant="h6" component="div">
                {product.title}
            </Typography>
            <Typography variant="body1" color="error" >
                {product.price} DA
            </Typography>
          </Stack>
          <Typography variant="body2" color="text.secondary">
            {product.desc}
          </Typography>
      </CardContent>
      <CardActions sx={{display:"flex",alignItems:"center",justifyContent:"space-between" ,flexWrap:"wrap",gap:"8px"}}>
      
          <Button  onClick={handleAddToCart} variant='contained' startIcon={<ShoppingCart/>}>Add to cart</Button>
     

        <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
      </CardActions>
    </Card>
  );
}