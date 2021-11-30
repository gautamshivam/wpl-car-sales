import React from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const PaymentDetails = () => {
    return (
        <div className="row">
            
            <div className="col-md-3"></div>
     
        <div className="col-md-6">
        <h1> Payment Details </h1>
            <form >
            
            <FormControl component="fieldset">
            <FormLabel component="legend">card type</FormLabel>
                <RadioGroup
                    aria-label="card type"
                    defaultValue="credit"
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="credit" control={<Radio />} label="credit" />
                    <FormControlLabel value="debit" control={<Radio />} label="debit" />
                </RadioGroup>
            </FormControl>
            <input type="text" name="nameOnCard" className="form-control" placeholder="name on card" />
            <div className="row">
                <div className="col-md-6">
                    <input type="text" name="expiration" className="form-control" placeholder="expiration" />
                </div>
                <div className="col-md-6">
                    <input type="text" name="cvv" className="form-control" placeholder="CVV" />
                </div>
            </div>

            <input type="text" name="phone" className="form-control" placeholder="phone number in case we want to reach you. "  />
            <input type="text" name="address" className="form-control" placeholder="full address in case we deliver at home"  />
            
            <button type="button" className="btn btn-info">
                Place Order
            </button>
           
            </form>
        <a href="/browse">Cancel</a>
      </div>
      <div className="col-md-3"></div>
    </div>
    )
}

export default PaymentDetails
