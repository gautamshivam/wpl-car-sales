import React from "react";
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

const Details = () => {
  return (
    <div className="row">
      <div className="col-md-2"></div>
      <div className="col-md-6">
        {/* <img className="img-fluid " src="./images/image1.jpg" alt="image1"/>  */}
        <Carousel />
        <Box sx={{ boxShadow: 3, mb: 2,mt:2 }}>
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

        

        
      </div>
      <div className="col-md-2"></div>
    </div>
  );
};

export default Details;
