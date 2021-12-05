import React, { useContext, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FavoriteIcon from '@mui/icons-material/Favorite';
import Axios from 'axios';
import { UserContext } from "./UserProvider";
import { useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';

import './CarItem.css';

const styles = 
{
media: {
  height: "300px",
  padding: "0px"
}
};

const CarItem = (props) => {
  const {user, setUser, fav, setFav} = useContext(UserContext);
  const [isFavorite, setIsFavorite] = useState(false);
  let navigate = useNavigate();

  const findIfFavorite = () => {
    if(fav === "" || fav === undefined || user === undefined) {
      setIsFavorite(false);
      return;
    }
    const foundFav = fav.find((item) => {
      return item._id === props.car._id;
    });
    if (foundFav == null || foundFav === "")  {
      setIsFavorite(false);
      return;
    }
    else setIsFavorite(true);
  }

  useEffect(()=>{
    findIfFavorite();
  }, [])

  const onToggleFavorite = () => {
    if(user.username === "" || user.username === undefined) {
      navigate('/login');
      return;
    }
    const alreadyFav = fav.find((item) => {
      return item._id === props.car._id
    })
    var newFav;
    if(alreadyFav == null) {
      newFav = [props.car, ...fav]
      console.log("currently not favorite -> marking favorite");
      setIsFavorite(true);
    } else {
      newFav = fav.filter((item) => item._id !== props.car._id)
      console.log("already favorite -> removing from favorite");
      setIsFavorite(false);
    }
    setFav(newFav);
    user.favorites = newFav;
    setUser(user);
    Axios.put(`/api/user`, {...user, favorites:newFav},{
      withCredentials: true
    }).then((resp) => {
      console.log("favorite updated");
    }).catch((err) => {console.log(err)});
  }

  const onCarClick = () => {
    props.onCarClick(props.car, isFavorite)
  }

  const onCardEditClick = () => {
    props.onCarEditClick(props.car)
  }

  const capitalize = (str) => {
      str = str.toLowerCase();
      str = str[0].toUpperCase() + str.slice(1)
      return str;
  }
  return (
    <Card className="carAction">
      <CardMedia
        component="img"
        style={styles.media}
        alt="car"
        image={`./images/${props.car.images[0]}`}
        onClick={onCarClick}
      />
      <CardContent onClick={onCarClick}>
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
        <Typography variant="h6" component="div">
            <Chip label={capitalize(props.car.bodyType)}  className="m-2" color='primary' size='medium'/>
            <Chip label={capitalize(props.car.make)}  className="m-2" color='primary' size='medium'/>
            <Chip label={capitalize(props.car.fuelType)}  className="m-2" color='primary' size='medium'/>
        </Typography>
      </CardContent>
      <CardActions>
        {
          !isFavorite ?
          <Button aria-label="add to favorites" variant='contained' onClick={onToggleFavorite}>
            <FavoriteIcon color="inherit" />
          </Button> : 
          <Button aria-label="add to favorites" variant='contained' onClick={onToggleFavorite}>
            <FavoriteIcon color="warning" />
          </Button>
        }
        {
          user && user.username === 'admin@gmail.com' && 
          <Button aria-label="edit this car" variant='contained' onClick={onCardEditClick}>
            <EditIcon color="inherit" />
          </Button>
        }
      </CardActions>
    </Card>
  );
};

export default CarItem;
