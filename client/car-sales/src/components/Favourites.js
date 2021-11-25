import {React, useContext} from "react";
import "./Favourites.css";

import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
} from "@mui/material";
import { UserContext } from "./UserProvider";
import Axios from 'axios';

const Favourites = () => {

  const {user, setUser, fav, setFav} = useContext(UserContext);


  const onToggleFavorite = (id) => {
    var newFav;
    newFav = fav.filter((item) => item._id !== id)
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
    <div className="row mt-5">
      <h1>Wish List</h1>
      <div className="col-md-3"></div>
      <div className="col-md-6  ">
        {
          fav.map((item) => (
              <Box sx={{  boxShadow: 3, mb: 2 }} key={item._id}>
              <Card variant="outlined" >
                <CardContent>
                  <div className="row">
                  <div className="col-md-4">
                  <img src={`./images/${item.images[0]}`} className="img-thumbnail"/>
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
                    {item.title}
                  </Typography>
                  <Typography sx={{ mb: 1.5, fontSize: 20 }} color="text.primary">
                    {item.mileage} mi.
                  </Typography>
                  <Typography
                    sx={{ fontSize: 30 }}
                    variant="h5"
                    color="text.primary"
                    component="div"
                  >
                    <Box fontWeight="bold" display="inline">
                      ${item.price}
                    </Box>
                  </Typography>
                    </div>
                  </div>
                </CardContent>
                <CardActions>
                  <Button size="small">Go to buy</Button>
                  <Button size="small" onClick={() => onToggleFavorite(item._id) }>Remove from Favourites</Button>
                </CardActions>
              </Card>
            </Box>
          ))
        }
      </div>
      <div className="col-md-3"></div>
    </div>
  );
};

export default Favourites;
