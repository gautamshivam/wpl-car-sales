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
                <div className="row">
      <div className="col-md-2"></div>
      <div className="col-md-8 mt-5 ">
        {
          purchases.map((item) => (
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
      <div className="col-md-2"></div>
    </div>
        </div>
    )
}

export default Purchased
