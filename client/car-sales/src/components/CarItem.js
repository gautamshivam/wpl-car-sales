import React, { useContext, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import IconButton from '@mui/material/IconButton';
import Axios from 'axios';
import { UserContext } from "./UserProvider";


const CarItem = (props) => {
  const {user, setUser, fav, setFav} = useContext(UserContext);
  const [isFavorite, setIsFavorite] = useState(false);


  const findIfFavorite = () => {
    console.log('find favorite for',fav);
    if(fav == "" || fav == undefined || user == undefined) {
      setIsFavorite(false);
      return;
    }
    const foundFav = fav.find((item) => {
      return item._id == props.car._id;
    });
    if (foundFav == null || foundFav == "")  {
      setIsFavorite(false);
      return;
    }
    else setIsFavorite(true);
  }

  useEffect(()=>{
    findIfFavorite();
  }, [])

  const onToggleFavorite = () => {
    const alreadyFav = fav.find((item) => {
      return item._id == props.car._id
    })
    var newFav;
    if(alreadyFav == null) {
      newFav = [props.car, ...fav]
      console.log("currently not favorite -> marking favorite");
      setIsFavorite(true);
    } else {
      newFav = fav.filter((item) => item._id != props.car._id)
      console.log("already favorite -> removing from favorite");
      setIsFavorite(false);
    }
    setFav(newFav);
    user.favorites = newFav;
    setUser(user);
    Axios.put('/api/user', {...user, favorites:newFav},{
      withCredentials: true
    }).then((resp) => {
      console.log("favorite updated");
    }).catch((err) => {console.log(err)});
  }

  const onCardClick = () => {
    props.onCarClick(props.car)
  }

  return (
    <Card>
      <CardMedia
        component="img"
        alt="car"
        height="100%"
        image="./images/image3.jpg"
      />
      <CardContent onClick={onCardClick}>
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
        {
          !isFavorite ?
          <IconButton aria-label="add to favorites" onClick={onToggleFavorite}>
            <FavoriteIcon color="inherit" />
          </IconButton> : 
          <IconButton aria-label="add to favorites" onClick={onToggleFavorite}>
            <FavoriteIcon color="warning" />
          </IconButton>
        }
      </CardActions>
    </Card>
  );
};

export default CarItem;
