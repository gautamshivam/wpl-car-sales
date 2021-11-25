import React, { useContext, useEffect, useState } from "react";
import "./Details.css";
import Carousel from "./Carousel/Carousel";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
} from "@mui/material";
import Axios from 'axios';
import { UserContext } from "./UserProvider";
import { useNavigate } from 'react-router-dom';

const Details = (props) => {
  const {user, setUser, purchases, setPurchases,  fav, setFav} = useContext(UserContext);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isPurchased, setIsPurchased] = useState(false)
  let navigate = useNavigate();

  const onPurchase = () => {
    if(user.username == "" || user.username == undefined) {
      navigate('/login');
      return;
    }
    const alreadyPurchased = purchases.find((item) => {
      return item._id == props.car._id
    })
    var newPurchases;
    if(alreadyPurchased == null) {
      props.car.isAvailable = false;
      newPurchases = [props.car, ...purchases]
      console.log("currently not purchased -> making purchase");
      setIsPurchased(true);
    } else {
      console.log('already purchased');
      setIsPurchased(true)
    }
    setPurchases(newPurchases);
    user.purchases = newPurchases;
    setUser(user);

    let car = props.car;
    Axios.put('/api/cars/purchase/'+car._id, car,{
      withCredentials: true
    }).then((resp) => {
      console.log('purchase success');
      props.onPurchase();
      navigate('/purchases')
    }).catch((err) => {console.log(err)});
  }

  
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

  return (
    <div className="row">
      {console.log(props)}
      <div className="col-md-2"></div>
      <div className="col-md-6">
        {/* <img className="img-fluid " src="./images/image1.jpg" alt="image1"/>  */}
        <Carousel images={props.car.images} />
        <Box sx={{ boxShadow: 3, mb: 2,mt:2 }}>
          <Card variant="outlined" >
            <CardContent>
              <div className="row">
              <div className="col-md-8">
              <Typography variant="h5" component="div">
                {props.car.features}
              </Typography>
                </div>
              </div>
            </CardContent>
          </Card>
        </Box>
      </div>
      <div className="col-md-2 mt-5">
        <Box sx={{ boxShadow: 3, mb: 2 }}>
          <Card variant="outlined">
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Used
              </Typography>
              <Typography variant="h5" component="div">
                {props.car.title}
              </Typography>
              <Typography sx={{ mb: 1.5, fontSize: 20 }} color="text.primary">
                56,547 mi.
              </Typography>
              <Typography
                sx={{ fontSize: 30 }}
                variant="h5"
                color="text.primary"
                component="div"
              >
                <Box fontWeight="bold" display="inline">
                  ${props.car.price}
                </Box>
              </Typography>
            </CardContent>
            <CardActions>
              {
                !isPurchased && props.car.isAvailable && <Button size="small" onClick={onPurchase}>Buy Now</Button>
              }
              {
                !props.isFav && !isFavorite &&  <Button size="small" onClick={onToggleFavorite}>Add to Wishlist</Button>
              }
              
            </CardActions>
          </Card>
        </Box>

        <Box sx={{ boxShadow: 3, mb: 2}}>
          <Card variant="outlined" sx={{ height:"100%"}}>
            <CardContent>
              <Typography variant="b1" component="div">
                Make: {props.car.make}
              </Typography>
              <Typography variant="b1" component="div">
                Model: {props.car.model}
              </Typography>
              <Typography variant="b1" component="div">
                Price: {props.car.price}
              </Typography>
              <Typography variant="b1" component="div">
                Condition: {props.car.condition}
              </Typography>
              <Typography variant="b1" component="div">
                Miles: {props.car.mileage}
              </Typography>
              <Typography variant="b1" component="div">
                Body Type: {props.car.bodyType}
              </Typography>
              <Typography variant="b1" component="div">
                Transmission: {props.car.transmission}
              </Typography>
              <Typography variant="b1" component="div">
                Year Mfg: {props.car.year}
              </Typography>
              <Typography variant="b1" component="div">
                Fuel Type: {props.car.fuelType}
              </Typography>
              <Typography variant="b1" component="div">
                No of Owners: {props.car.noOfOwners}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </div>
      <div className="col-md-2"></div>
    </div>
  );
};

export default Details;
