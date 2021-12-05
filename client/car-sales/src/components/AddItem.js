import axios from "axios";
import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {Button,Typography, TextField}from "@mui/material"

const AddItem = (props) => {

    const formRef = React.createRef();
    let navigate = useNavigate();
    const [title, setTitle] = useState("")
    const [titleHelper, setTitleHelper] = useState("");
    const [titleError, setTitleError] = useState(false);
    const [make, setMake] = useState("")
    const [makeHelper, setMakeHelper] = useState("");
    const [makeError, setMakeError] = useState(false);
    const [model, setModel] = useState("")
    const [modelHelper, setModelHelper] = useState("");
    const [modelError, setModelError] = useState(false);
    const [price, setPrice] = useState("")
    const [priceHelper, setPriceHelper] = useState("");
    const [priceError, setPriceError] = useState(false);
    const [condition, setCondition] = useState("")
    const [conditionHelper, setConditionHelper] = useState("");
    const [conditionError, setConditionError] = useState(false);
    const [mileage, setMileage] = useState("")
    const [mileageHelper, setMileageHelper] = useState("");
    const [mileageError, setMileageError] = useState(false);
    const [bodyType, setBodyType] = useState("")
    const [bodyTypeHelper, setBodyTypeHelper] = useState("");
    const [bodyTypeError, setBodyTypeError] = useState(false);
    const [transmission, setTransmission] = useState("")
    const [transmissionHelper, setTransmissionHelper] = useState("");
    const [transmissionError, setTransmissionError] = useState(false);
    const [colorExt, setColorExt] = useState("")
    const [colorExtHelper, setColorExtHelper] = useState("");
    const [colorExtor, setColorExtError] = useState(false);
    const [colorInt, setColorInt] = useState("")
    const [colorIntHelper, setColorIntHelper] = useState("");
    const [colorIntError, setColorIntError] = useState(false);
    const [fuelType, setFuelType] = useState("")
    const [fuelTypeHelper, setFuelTypeHelper] = useState("");
    const [fuelTypeError, setFuelTypeError] = useState(false);
    const [year, setYear] = useState("")
    const [yearHelper, setYearHelper] = useState("");
    const [yearError, setYearError] = useState(false);
    const [noOfOwners, setNoOfOwners] = useState("")
    const [noOfOwnersHelper, setNoOfOwnersHelper] = useState("");
    const [noOfOwnersError, setNoOfOwnersError] = useState(false);
    const [features, setFeatures] = useState("")
    const [featureHelper, setFeatureHelper] = useState("");
    const [featureError, setFeatureError] = useState(false);
    

    const handleSubmit = () => {
        console.log(formRef.current.images.files);
        const images = [];
        for(let i=0; i < formRef.current.images.files.length; i++) {
            images.push(formRef.current.images.files.item(i).name);
        }
        
        console.log(images);

        if(title === "" ||
        make === "" ||
        model === ""||
        price === "" ||
        condition === "" ||
        mileage === "" ||
        bodyType === ""|| 
        year===""||
        colorInt===""||
        colorExt===""||
        fuelType==="" ||
        noOfOwners==="" ||
        features==="" ) 
        {
            alert("all fields are required");
            return;
        }
        axios.post(`/api/cars/add`, {
            title:title,
            images:images,
            make:make,
            model:model,
            price:price,
            condition:condition,
            mileage:mileage,
            bodyType:bodyType,
            transmission:transmission,
            year:year,
            colorin:colorInt,
            colorex:colorExt,
            fuelType:fuelType,
            noOfOwners:noOfOwners,
            features:features,
            isAvailable:true

        }).then((res) => {
            console.log('added car');
            props.onAdded();
            navigate('/browse');
        })
    }

  return (
    <div className="row">
      
       <div className="col-md-3"></div>
     
      <div className="col-md-6">
      <h1> Add new Car Record </h1>
        <form ref={formRef}>
          
        <TextField fullWidth id="standard-basic" 
                  style={{marginTop:"5px", backgroundColor:"white"}}
                  label="Title" 
                  value={title}
                  required="true" 
                  onChange={(e) => setTitle(e.target.value)}
            />
            <TextField fullWidth id="standard-basic" 
                  style={{marginTop:"15px", backgroundColor:"white"}}
                  label="Make" 
                  value={make}
                  required="true" 
                  onChange={(e) => setMake(e.target.value)}
            />
            <TextField fullWidth id="standard-basic" 
                  style={{marginTop:"15px", backgroundColor:"white"}}
                  label="Model" 
                  value={model}
                  required="true" 
                  onChange={(e) => setModel(e.target.value)}
            />
            <TextField fullWidth id="standard-basic" 
                  style={{marginTop:"15px", backgroundColor:"white"}}
                  label="Price in $" 
                  value={price}
                  required="true" 
                  onChange={(e) => setPrice(e.target.value)}
            />
            <TextField fullWidth id="standard-basic" 
                  style={{marginTop:"15px", backgroundColor:"white"}}
                  label="Condition" 
                  value={condition}
                  required="true" 
                  onChange={(e) => setCondition(e.target.value)}
            />
            <TextField fullWidth id="standard-basic" 
                  style={{marginTop:"15px", backgroundColor:"white"}}
                  label="Mileage in mi." 
                  value={mileage}
                  required="true" 
                  onChange={(e) => setMileage(e.target.value)}
            />
            <TextField fullWidth id="standard-basic" 
                  style={{marginTop:"15px", backgroundColor:"white"}}
                  label="Body Type" 
                  value={bodyType}
                  required="true" 
                  onChange={(e) => setBodyType(e.target.value)}
            />
            <TextField fullWidth id="standard-basic" 
                  style={{marginTop:"15px", backgroundColor:"white"}}
                  label="Transmission" 
                  value={transmission}
                  required="true" 
                  onChange={(e) => setTransmission(e.target.value)}
            />
            <TextField fullWidth id="standard-basic" 
                  style={{marginTop:"15px", backgroundColor:"white"}}
                  label="Year of Manufacture" 
                  value={year}
                  required="true" 
                  onChange={(e) => setYear(e.target.value)}
            />
            <TextField fullWidth id="standard-basic" 
                  style={{marginTop:"15px", backgroundColor:"white"}}
                  label="Exterior Color" 
                  value={colorExt}
                  required="true" 
                  onChange={(e) => setColorExt(e.target.value)}
            />
            <TextField fullWidth id="standard-basic" 
                  style={{marginTop:"15px", backgroundColor:"white"}}
                  label="Interior Color" 
                  value={colorInt}
                  required="true" 
                  onChange={(e) => setColorInt(e.target.value)}
            />
            <TextField fullWidth id="standard-basic" 
                  style={{marginTop:"15px", backgroundColor:"white"}}
                  label="Fuel Type" 
                  value={fuelType}
                  required="true" 
                  onChange={(e) => setFuelType(e.target.value)}
            />
            <TextField fullWidth id="standard-basic" 
                  style={{marginTop:"15px", backgroundColor:"white"}}
                  label="Number of Owners" 
                  value={noOfOwners}
                  required="true" 
                  onChange={(e) => setNoOfOwners(e.target.value)}
            />

        {/* <input type="text" name="title" className="form-control" placeholder="title"  />
        <input type="text" name="make" className="form-control" placeholder="make" />
        <input type="text" name="model" className="form-control" placeholder="model" />
        <input type="text" name="price" className="form-control" placeholder="price" />
        <input type="text" name="condition" className="form-control" placeholder="condtition" />
        <input type="text" name="mileage" className="form-control" placeholder="mileage" />
        <input type="text" name="bodyType" className="form-control" placeholder="body type"  />
        <input type="text" name="transmission" className="form-control" placeholder="transmission" />
        <input type="text" name="year" className="form-control" placeholder="year" />
        <input type="text" name="colorExt" className="form-control" placeholder="color exterior" />
        <input type="text" name="colorInt" className="form-control" placeholder="color interior" />
        <input type="text" name="fuelType" className="form-control" placeholder="fuel type" />
        <input type="text" name="noOfOwners" className="form-control" placeholder="no of pervious owners" /> */}
        <input type="file" name="images" accept="image/png, image/gif, image/jpeg" className="form-control" placeholder="image" multiple/>
        
        <TextField fullWidth id="standard-basic" 
                  style={{marginTop:"15px", backgroundColor:"white"}}
                  label="Features" 
                  multiline
                  maxRows={4}
                  value={features}
                  required="true" 
                  onChange={(e) => setFeatures(e.target.value)}
            />
        
        {/* <textarea name="features" className="form-control" placeholder="features" ></textarea> */}
        {/* <button type="button" onClick={handleSubmit} className="btn btn-info">
            Save
        </button> */}

        <Typography margin="10px" >
                <Button size="medium" variant="contained" onClick={handleSubmit}>Add Car</Button>
            </Typography>
        </form>
        <a href="/browse">Cancel</a>
      </div>
      <div className="col-md-3"></div>
    </div>
  );
};

export default AddItem;
