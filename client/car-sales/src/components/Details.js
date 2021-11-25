<<<<<<< HEAD
import React, { useContext, useEffect, useState } from "react";
=======
import React from "react";
>>>>>>> 7ff7c655e4fd9f897ec9ea7c904ec00b7e5e9ef1
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
<<<<<<< HEAD
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
=======

const Details = () => {
  return (
    <div className="row">
      <div className="col-md-2"></div>
      <div className="col-md-6">
        {/* <img className="img-fluid " src="./images/image1.jpg" alt="image1"/>  */}
        <Carousel />
>>>>>>> 7ff7c655e4fd9f897ec9ea7c904ec00b7e5e9ef1
        <Box sx={{ boxShadow: 3, mb: 2,mt:2 }}>
          <Card variant="outlined" >
            <CardContent>
              <div className="row">
<<<<<<< HEAD
              <div className="col-md-8">
              <Typography variant="h5" component="div">
                {props.car.features}
=======
              <div className="col-md-4">
              <img src="./images/image1.jpg" className="img-thumbnail"/>
              </div>
              <div className="col-md-8">
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Used
              </Typography>
              <Typography variant="h5" component="div">
                2018 Tesla Model S 100D
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
                  $69,989
                </Box>
>>>>>>> 7ff7c655e4fd9f897ec9ea7c904ec00b7e5e9ef1
              </Typography>
                </div>
              </div>
            </CardContent>
<<<<<<< HEAD
=======
            <CardActions>
              <Button size="small">Go to buy</Button>
              <Button size="small">Remove from Favourites</Button>
            </CardActions>
>>>>>>> 7ff7c655e4fd9f897ec9ea7c904ec00b7e5e9ef1
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
<<<<<<< HEAD
                {props.car.title}
=======
                2018 Tesla Model S 100D
>>>>>>> 7ff7c655e4fd9f897ec9ea7c904ec00b7e5e9ef1
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
<<<<<<< HEAD
                  ${props.car.price}
=======
                  $69,989
>>>>>>> 7ff7c655e4fd9f897ec9ea7c904ec00b7e5e9ef1
                </Box>
              </Typography>
            </CardContent>
            <CardActions>
<<<<<<< HEAD
              {
                !isPurchased && props.car.isAvailable && <Button size="small" onClick={onPurchase}>Buy Now</Button>
              }
              {
                !props.isFav && !isFavorite &&  <Button size="small" onClick={onToggleFavorite}>Add to Wishlist</Button>
              }
              
=======
              <Button size="small">Buy Now</Button>
              <Button size="small">Add to cart</Button>
              <Button size="small">Add to Wishlist</Button>
>>>>>>> 7ff7c655e4fd9f897ec9ea7c904ec00b7e5e9ef1
            </CardActions>
          </Card>
        </Box>

<<<<<<< HEAD
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
=======
        <Box sx={{ boxShadow: 3, mb: 2, height:"100%" }}>
          <Card variant="outlined" sx={{ height:"100%"}}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Used
              </Typography>
              <Typography variant="h5" component="div">
                2018 Tesla Model S 100D
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
                  $69,989
                </Box>
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Buy Now</Button>
              <Button size="small">Add to cart</Button>
              <Button size="small">Add to Wishlist</Button>
            </CardActions>
          </Card>
        </Box>

        

        
>>>>>>> 7ff7c655e4fd9f897ec9ea7c904ec00b7e5e9ef1
      </div>
      <div className="col-md-2"></div>
    </div>
  );
};

export default Details;
