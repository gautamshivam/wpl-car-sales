import React, {useContext} from 'react'

import {
    Box,
    Card,
    CardContent,
    Divider,
    Typography,
} from "@mui/material";
import { UserContext } from "./UserProvider";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Purchased = () => {
    const {purchases} = useContext(UserContext);

    return (
        <div>
      <div className="row mt-5 ">
      <Typography variant='h3' fontWeight='bold' marginBottom='20px'>
        <ShoppingCartIcon style={{color:'primary', fontSize:'60px'}}/>
            Purchase History
        {/* <FavoriteIcon style={{color:'red', fontSize:'60px'}}/> */}
      </Typography>
      <div className="col-md-3"></div>
      <div className="col-md-6 ">
        {
          purchases.map((item) => (
            <Box sx={{  boxShadow: 3, mb: 2 }} key={item._id}>
            <Card variant="outlined" >
              <CardContent>
                <div className="row align-items-center">
                <div className="col-md-4">
                  <img src={`./images/${item.images[0]}`} alt={item.title} className="img img-fluid img-thumbnail"/>
                </div>
                <div className="col-md-8">
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
                <Divider style={{marginTop:"25px"}}/>
                <Typography align="left" fontWeight="bold" variant="h5" marginTop="25px">
                  Shipping Address:
                </Typography>
                <Typography align="left" variant="body1">
                  {item.paymentInfo.address}
                </Typography>
                <Typography align="left" variant="body1" fontWeight="bold">
                  Purchased On:
                </Typography>
                <Typography align="left" variant="body1">
                  {new Date(item.purchaseDate).toDateString()}
                </Typography>
                
              </CardContent>
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
