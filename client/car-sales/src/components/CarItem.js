<<<<<<< HEAD
import React, { useContext, useEffect, useState } from "react";
=======
import React from "react";
>>>>>>> 7ff7c655e4fd9f897ec9ea7c904ec00b7e5e9ef1
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import IconButton from '@mui/material/IconButton';
<<<<<<< HEAD
import Axios from 'axios';
import { UserContext } from "./UserProvider";
import { useNavigate } from 'react-router-dom';

const CarItem = (props) => {
  const {user, setUser, fav, setFav} = useContext(UserContext);
  const [isFavorite, setIsFavorite] = useState(false);
  let navigate = useNavigate();

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
    if(user.username == "" || user.username == undefined) {
      navigate('/login');
      return;
    }
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
    props.onCarClick(props.car, isFavorite)
  }

=======


const CarItem = (props) => {
>>>>>>> 7ff7c655e4fd9f897ec9ea7c904ec00b7e5e9ef1
  return (
    <Card>
      <CardMedia
        component="img"
        alt="car"
        height="100%"
<<<<<<< HEAD
        image={`./images/${props.car.images[0]}`}
        onClick={onCardClick}
      />
      <CardContent onClick={onCardClick}>
=======
        image="./images/image3.jpg"
      />
      <CardContent>
>>>>>>> 7ff7c655e4fd9f897ec9ea7c904ec00b7e5e9ef1
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
<<<<<<< HEAD
        {
          !isFavorite ?
          <IconButton aria-label="add to favorites" onClick={onToggleFavorite}>
            <FavoriteIcon color="inherit" />
          </IconButton> : 
          <IconButton aria-label="add to favorites" onClick={onToggleFavorite}>
            <FavoriteIcon color="warning" />
          </IconButton>
        }
=======
      <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
>>>>>>> 7ff7c655e4fd9f897ec9ea7c904ec00b7e5e9ef1
      </CardActions>
    </Card>
  );
};

export default CarItem;
