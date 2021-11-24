import React from "react";
import "./Favourites.css";

import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
} from "@mui/material";

const Favourites = () => {
  return (
    <div className="row">
      <div className="col-md-2"></div>
      <div className="col-md-8 mt-5 ">
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
      
      <div className="col-md-2"></div>
    </div>
  );
};

export default Favourites;
