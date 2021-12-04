import React, { useContext, useEffect, useState } from "react";
import "./Details.css";
import Carousel from "./Carousel/Carousel";
import Divider from '@mui/material/Divider';
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
import Chip from '@mui/material/Chip';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TextField from '@mui/material/TextField';
import PaymentDetails from "./PaymentDetails";


const Details = (props) => {
  const {user, setUser, purchases, setPurchases,  fav, setFav} = useContext(UserContext);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isPurchased, setIsPurchased] = useState(false)
  const [isBuyNow, setIsBuyNow] = useState(false)
  let navigate = useNavigate();

  const onPurchase = (paymentInfo) => {
    if(user.username == "" || user.username == undefined) {
      navigate('/login');
      return;
    }
    if(paymentInfo.address === ""){
      return;
    }
    const alreadyPurchased = purchases.find((item) => {
      return item._id == props.car._id
    })
    var newPurchases;
    if(alreadyPurchased == null) {
      props.car.isAvailable = false;
      props.car.paymentInfo = paymentInfo;
      props.car.purchaseDate = new Date();
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
    Axios.put(`/api/cars/purchase/`+car._id, car,{
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
    Axios.put(`${process.env.REACT_APP_BASE_URL}/api/user`, {...user, favorites:newFav},{
      withCredentials: true
    }).then((resp) => {
      console.log("favorite updated");
    }).catch((err) => {console.log(err)});
  }

  const clickBuyNow = () => {
    setIsBuyNow(true);
  }

  const onCancelBuy = () => {
    setIsBuyNow(false)
  }

  return (
    <div className="row">
      {console.log(props)}
      <div className="col-md-2"></div>
      <div className="col-md-6">
        <Carousel images={props.car.images} />
        
        <Box sx={{ boxShadow: 3, mb: 2,mt:2 }}>
          <div class="row w-100 m-0">
            <Card variant='outlined'>
              <CardContent>    
                <div className="col-md-12">
                  {
                    isBuyNow ? <PaymentDetails onCancel={onCancelBuy} onBuy={onPurchase}/> : 
                    <Typography>
                      <Button size="medium" variant="contained" onClick={clickBuyNow} startIcon={<ShoppingCartIcon/>}>Buy Now</Button>
                    </Typography>
                  }
                </div>
              </CardContent>
          </Card>
          </div>
        </Box>
        
        {
          props.car.features !== "" &&
          <Box sx={{ boxShadow: 3, mb: 2,mt:2 }}>
            <Card variant="outlined" >
              <CardContent>
                <div className="row">
                  <div className="col-md-12">
                  <Typography fontWeight="bold" variant="h6" component="div">
                    Features: 
                  </Typography>
                  <Typography variant="h6" component="div">
                    {
                      props.car.features.split(',').map((item) => (
                          <Chip label={item}  className="m-2" color='primary' size='medium'/>
                      ))
                    }
                  </Typography>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Box>
        }
        
      </div>
      <div className="col-md-2 mt-5">
        <Box sx={{ boxShadow: 3, mb: 2 }}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h5" component="div">
                {props.car.title}
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
                !props.isFav && !isFavorite &&  
                <Button size="small" onClick={onToggleFavorite} startIcon={<FavoriteIcon/>}>Add to Wishlist</Button>
              }
            </CardActions>
          </Card>
        </Box>

        <Box sx={{ boxShadow: 3, mb: 2 }}>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableBody>
                <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 }}}>
                    <TableCell align="right" component="th" scope="row" style={{fontWeight:'bold', backgroundColor:'lightgreen', fontSize:'18px'}}>
                      Make
                    </TableCell>
                    <TableCell align="left" style={{fontSize:'18px'}}>{props.car.make}</TableCell>
                  </TableRow>
                <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 }}}>
                    <TableCell align="right" component="th" scope="row" style={{fontWeight:'bold', backgroundColor:'lightgreen', fontSize:'18px'}}>
                      Model
                    </TableCell>
                    <TableCell align="left" style={{fontSize:'18px'}}>{props.car.model}</TableCell>
                </TableRow>
                <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 }}}>
                    <TableCell align="right" component="th" scope="row" style={{fontWeight:'bold', backgroundColor:'lightgreen', fontSize:'18px'}}>
                      Price
                    </TableCell>
                    <TableCell align="left" style={{fontSize:'18px'}}>${props.car.price}</TableCell>
                </TableRow>
                <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 }}}>
                    <TableCell align="right" component="th" scope="row" style={{fontWeight:'bold', backgroundColor:'lightgreen', fontSize:'18px'}}>
                      Mileage
                    </TableCell>
                    <TableCell align="left" style={{fontSize:'18px'}}>{props.car.mileage} mi.</TableCell>
                </TableRow>
                <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 }}}>
                    <TableCell align="right" component="th" scope="row" style={{fontWeight:'bold', backgroundColor:'lightgreen', fontSize:'18px'}}>
                      Body Type
                    </TableCell>
                    <TableCell align="left" style={{fontSize:'18px'}}>{props.car.bodyType}</TableCell>
                </TableRow>
                <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 }}}>
                    <TableCell align="right" component="th" scope="row" style={{fontWeight:'bold', backgroundColor:'lightgreen', fontSize:'18px'}}>
                      Condition
                    </TableCell>
                    <TableCell align="left" style={{fontSize:'18px'}}>{props.car.condition}</TableCell>
                </TableRow>
                <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 }}}>
                    <TableCell align="right" component="th" scope="row" style={{fontWeight:'bold', backgroundColor:'lightgreen', fontSize:'18px'}}>
                      Color Exterior
                    </TableCell>
                    <TableCell align="left" style={{fontSize:'18px'}}>{props.car.colorExt}</TableCell>
                </TableRow>
                <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 }}}>
                    <TableCell align="right" component="th" scope="row" style={{fontWeight:'bold', backgroundColor:'lightgreen', fontSize:'18px'}}>
                      Color Interior
                    </TableCell>
                    <TableCell align="left" style={{fontSize:'18px'}}>{props.car.colorInt}</TableCell>
                </TableRow>
                <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 }}}>
                    <TableCell align="right" component="th" scope="row" style={{fontWeight:'bold', backgroundColor:'lightgreen', fontSize:'18px'}}>
                      Transmission
                    </TableCell>
                    <TableCell align="left" style={{fontSize:'18px'}}>{props.car.transmission}</TableCell>
                </TableRow>
                <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 }}}>
                    <TableCell align="right" component="th" scope="row" style={{fontWeight:'bold', backgroundColor:'lightgreen', fontSize:'18px'}}>
                      Fuel Type
                    </TableCell>
                    <TableCell align="left" style={{fontSize:'18px'}}>{props.car.fuelType}</TableCell>
                </TableRow>
                <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 }}}>
                    <TableCell align="right" component="th" scope="row" style={{fontWeight:'bold', backgroundColor:'lightgreen', fontSize:'18px'}}>
                      No Of Owners
                    </TableCell>
                    <TableCell align="left" style={{fontSize:'18px'}}>{props.car.noOfOwners}</TableCell>
                </TableRow>
                <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 }}}>
                    <TableCell align="right" component="th" scope="row" style={{fontWeight:'bold', backgroundColor:'lightgreen', fontSize:'18px'}}>
                      Mfg Year
                    </TableCell>
                    <TableCell align="left" style={{fontSize:'18px'}}>{props.car.year}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </div>
      <div className="col-md-2"></div>
    </div>
  );
};

export default Details;
