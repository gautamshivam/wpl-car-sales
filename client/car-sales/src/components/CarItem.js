import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import IconButton from '@mui/material/IconButton';


const CarItem = (props) => {
  return (
    <Card>
      <CardMedia
        component="img"
        alt="car"
        height="100%"
        image="./images/image3.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.car.title}
        </Typography>
        <Typography variant="h5" color="text.primary" component="div">
          <Box fontWeight="bold" display="inline">
            ${props.car.price}
          </Box>
        </Typography>
        <Typography  variant="body2" color="text.primary">
          {props.car.mileage} miles
        </Typography>
      </CardContent>
      <CardActions>
      <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default CarItem;
