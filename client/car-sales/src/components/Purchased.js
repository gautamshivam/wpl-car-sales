import React, {useContext} from 'react'

import {
    Box,
    Card,
    CardContent,
    Typography,
    Button,
    CardActions,
} from "@mui/material";
import { UserContext } from "./UserProvider";

const Purchased = () => {
    const {purchases} = useContext(UserContext);

    return (
        <div>
      <div className="row mt-5 ">
      <h1>Purchase History</h1>
      <div className="col-md-3"></div>
      <div className="col-md-6 ">
        {
          purchases.map((item) => (
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
                    {item.condition}
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
                 
                  
                </CardActions>
              </Card>
            </Box>
          ))
        }
      </div>
      <div className="col-md-3"></div>
    </div>
        </div>
    )
}

export default Purchased
