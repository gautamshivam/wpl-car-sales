<<<<<<< HEAD
import {React, useContext} from "react";
=======
import React from "react";
>>>>>>> 7ff7c655e4fd9f897ec9ea7c904ec00b7e5e9ef1
import "./Favourites.css";

import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
} from "@mui/material";
<<<<<<< HEAD
import { UserContext } from "./UserProvider";

const Favourites = () => {

  const {fav} = useContext(UserContext);

=======

const Favourites = () => {
>>>>>>> 7ff7c655e4fd9f897ec9ea7c904ec00b7e5e9ef1
  return (
    <div className="row">
      <div className="col-md-2"></div>
      <div className="col-md-8 mt-5 ">
<<<<<<< HEAD
        {
          fav.map((item) => (
              <Box sx={{ display: 'inline-block', boxShadow: 3, mb: 2 }} key={item._id}>
              <Card variant="outlined" >
                <CardContent>
                  <div className="row">
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
                    {item.title}
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
                      {item.price}
                    </Box>
                  </Typography>
                    </div>
                  </div>
                </CardContent>
                <CardActions>
                  <Button size="small">Go to buy</Button>
                  <Button size="small">Remove from Favourites</Button>
                </CardActions>
              </Card>
            </Box>
          ))
        }
      </div>
=======
      <Box sx={{ display: 'inline-block', boxShadow: 3, mb: 2 }}>
          <Card variant="outlined" >
            <CardContent>
              <div className="row">
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
              </Typography>
                </div>
              </div>
            </CardContent>
            <CardActions>
              <Button size="small">Go to buy</Button>
              <Button size="small">Remove from Favourites</Button>
            </CardActions>
          </Card>
        </Box>
      </div>
      
>>>>>>> 7ff7c655e4fd9f897ec9ea7c904ec00b7e5e9ef1
      <div className="col-md-2"></div>
    </div>
  );
};

export default Favourites;
