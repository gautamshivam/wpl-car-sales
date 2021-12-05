import React, { useState } from 'react'
import { MenuItem, Typography } from '@mui/material';
import {
    Box,
    Card,
    CardContent,
    Button,
    CardActions,
  } from "@mui/material";

  import TextField from '@mui/material/TextField';

const PaymentDetails = (props) => {

    const [name, setName] = useState("");
    const [cardNo, setCardNo] = useState("");
    const [exp, setExp] = useState("");
    const [cvv, setCvv] = useState("");
    const [phone, setPhone] = useState("");
    const [addr, setAddr] = useState("");
    const [paymentType, setPaymentType] = useState("");

    const [nameHelper, setNameHelper] = useState("");
    const [nameError, setNameError] = useState(false);
    
    const [cardHelper, setCardHelper] = useState("");
    const [cardError, setCardError] = useState(false);

    const [expHelper, setExpHelper] = useState("");
    const [expError, setExpError] = useState(false);

    const [cvvHelper, setCvvHelper] = useState("");
    const [cvvError, setCvvError] = useState(false);

    const [phoneHelper, setPhoneHelper] = useState("");
    const [phoneError, setPhoneError] = useState(false);

    const [addHelper, setAddHelper] = useState("");
    const [addError, setAddError] = useState(false);

    const onNameChange = (e) => {
        setName(e.target.value);
        if(e.target.value === "") {
            setNameError(true);
            setNameHelper("Name required");
        }else {
            setNameError(false);
            setNameHelper("");
        }
    }
    const onCardChange = (e) => {
        setCardNo(e.target.value);
        if(e.target.value === "") {
            setCardError(true);
            setCardHelper("Name required");
        }else {
            setCardError(false);
            setCardHelper("");
        }
    }
    const onExpChange = (e) => {
        setExp(e.target.value);
        if(e.target.value === "") {
            setExpError(true);
            setExpHelper("Name required");
        }else {
            setExpError(false);
            setExpHelper("");
        }
    }
    const onCvvChange = (e) => {
        setCvv(e.target.value);
        if(e.target.value === "") {
            setCvvError(true);
            setCvvHelper("Name required");
        }else {
            setCvvError(false);
            setCvvHelper("");
        }
    }
    const onPhoneChange = (e) => {
        setPhone(e.target.value);
        if(e.target.value === "") {
            setPhoneError(true);
            setPhoneHelper("Name required");
        }else {
            setPhoneError(false);
            setPhoneHelper("");
        }
    }
    const onAddrChange = (e) => {
        setAddr(e.target.value);
        if(e.target.value === "") {
            setAddError(true);
            setAddHelper("Name required");
        }else {
            setAddError(false);
            setAddHelper("");
        }
    }

    const onBuy = () => {
        if(name === "" ||
        cardNo === "" ||
        exp === ""||
        cvv === "" ||
        phone === "" ||
        addr === "" ||
        paymentType === "") {
            alert("Kindly add required payment fields");
            return;
        }
        props.onBuy({
            name:name,
            cardNo:cardNo,
            exp:exp,
            cvv:cvv,
            phone:phone,
            address:addr,
            type:paymentType
        })
    }
    return (
        <div className="row">
            
            <div className="col-md-3"></div>
     
        <div className="col-md-6">
        <h1> Payment Details </h1>
            <div>
                <TextField fullWidth id="standard-basic" 
                  select
                  label="Payment Type" 
                  style={{marginTop:"20px"}}
                  value={paymentType}
                  onChange={(e) => setPaymentType(e.target.value)} required="true" >
                        <MenuItem key="Credit Card" value="Credit Card">
                            Credit Card
                        </MenuItem>
                        <MenuItem key="Debit Card" value="Debit Card">
                            Debit Card
                        </MenuItem>
                  </TextField>
                <TextField fullWidth id="standard-basic" 
                  label="Name on card" 
                  style={{marginTop:"20px"}}
                  value={name}
                  helperText={nameHelper}
                  error={nameError}
                  autoComplete='off'
                  onChange={onNameChange} required="true" />
                <TextField fullWidth  id="standard-basic" 
                  label="Card Number" 
                  style={{marginTop:"20px"}}
                  value={cardNo}
                  helperText={cardHelper}
                  error={cardError}
                  autoComplete='off'
                  onChange={onCardChange} required="true" />
                <TextField  id="standard-basic" 
                    label="Expiry" 
                    style={{marginTop:"20px", marginRight:"5px"}}
                    value={exp}
                    helperText={expHelper}
                    error={expError}
                    autoComplete='off'
                    inputProps={{min: 0, style: { textAlign: 'left' }}}
                    onChange={onExpChange} required="true" />
                <TextField  id="standard-basic" 
                    label="CVV" 
                    style={{marginTop:"20px"}}
                    value={cvv}
                    helperText={cvvHelper}
                    error={cvvError}
                    autoComplete='off'
                    inputProps={{min: 0, style: { textAlign: 'left' }}}
                    onChange={onCvvChange} required="true" />
            
                <TextField fullWidth  id="standard-basic" 
                  label="Phone Number" 
                  style={{marginTop:"20px"}}
                  value={phone}
                  helperText={phoneHelper}
                  error={phoneError}
                  autoComplete='off'
                  onChange={onPhoneChange} required="true" />
                <TextField fullWidth  id="standard-basic" 
                  label="Address" 
                  style={{marginTop:"20px"}}
                  value={addr}
                  helperText={addHelper}
                  error={addError}
                  autoComplete='off'
                  onChange={onAddrChange} required="true" />
            </div>
            <Typography margin="10px">
                <Button disabled={cardError || nameError || expError || cvvError || phoneError || addError}
                size="medium" variant="contained" onClick={onBuy}>Place Order</Button>
            </Typography>
            <Typography >
                <Button size="medium" color="warning" variant="contained" onClick={() => props.onCancel()}>Cancel</Button>
            </Typography>
      </div>
      <div className="col-md-3"></div>
    </div>
    )
}

export default PaymentDetails
