import React, {useEffect, useState} from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import {Button,Typography, TextField}from "@mui/material"

const EditItem = (props) => {
    const formRef = React.createRef();
    const [title, setTitle] = useState("")
    const [make, setMake] = useState("")
    const [model, setModel] = useState("")
    const [price, setPrice] = useState("")
    const [condition, setCondition] = useState("")
    const [mileage, setMileage] = useState("")
    const [bodyType, setBodyType] = useState("")
    const [transmission, setTransmission] = useState("")
    const [colorExt, setColorExt] = useState("")
    const [colorInt, setColorInt] = useState("")
    const [fuelType, setFuelType] = useState("")
    const [year, setYear] = useState("")
    const [noOfOwners, setNoOfOwners] = useState("")
    const [features, setFeatures] = useState("")
    let navigate = useNavigate();

    const handleSubmit = () => {
        console.log(formRef.current.images.files);
        var images = [];
        for(let i=0; i < formRef.current.images.files.length; i++) {
            images.push(formRef.current.images.files.item(i).name);
        }
        if(images.length === 0) images = props.car.images;
        
        console.log(`colorExt`+ colorExt)
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

        console.log(images);
        axios.put(`/api/cars/edit/`+props.car._id, {
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
            console.log('update car', res);
            props.onUpdated();
            navigate('/browse');
        })
    }
    const handleDelete =() =>{
        let images=[] ;
        images = props.car.images;
        
        axios.put(`/api/cars/edit/`+props.car._id, {
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
            colorInt:colorInt,
            colorExt:colorExt,
            fuelType:fuelType,
            noOfOwners:noOfOwners,
            features:features,
            isAvailable:false
        }).then((res) => {
            console.log('deleted car', res);
            props.onUpdated();

            navigate('/browse');
        })
    }
    useEffect(() => {
        //formRef.current.title.value = props.car.title;
        setTitle(props.car.title);
        setMake(props.car.make);
        setModel(props.car.model);
        setPrice(props.car.price);
        setCondition(props.car.condition);
        setMileage(props.car.mileage);
        setBodyType(props.car.bodyType);
        setTransmission(props.car.transmission);
        setYear(props.car.year);
        setColorExt(props.car.colorExt);
        setColorInt(props.car.colorInt);
        setFuelType(props.car.fuelType);
        setNoOfOwners(props.car.noOfOwners);
        setFeatures(props.car.features);
        
        // formRef.current.make.value = props.car.make;
        // formRef.current.model.value = props.car.model;
        // formRef.current.price.value = props.car.price;
        // formRef.current.condition.value = props.car.condition;
        // formRef.current.mileage.value = props.car.mileage;
        // formRef.current.bodyType.value = props.car.bodyType;
        // formRef.current.transmission.value = props.car.transmission;
        // formRef.current.year.value = props.car.year;
        // formRef.current.colorExt.value = props.car.colorExt;
        // formRef.current.colorInt.value = props.car.colorInt;
        // formRef.current.fuelType.value = props.car.fuelType;
        // formRef.current.noOfOwners.value = props.car.noOfOwners;
        // formRef.current.features.value = props.car.features;
    }, [])
    return (
        <div className="row">
            
            <div className="col-md-3"></div>
     
        <div className="col-md-6">
        <h1> Edit Car Record </h1>
            <form ref={formRef}>

            <TextField fullWidth id="standard-basic" 
                  style={{marginTop:"5px", backgroundColor:"white"}}
                  label="Title" 
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
            />
            <TextField fullWidth id="standard-basic" 
                  style={{marginTop:"15px", backgroundColor:"white"}}
                  label="Make" 
                  value={make}
                  onChange={(e) => setMake(e.target.value)}
            />
            <TextField fullWidth id="standard-basic" 
                  style={{marginTop:"15px", backgroundColor:"white"}}
                  label="Model" 
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
            />
            <TextField fullWidth id="standard-basic" 
                  style={{marginTop:"15px", backgroundColor:"white"}}
                  label="Price in $" 
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
            />
            <TextField fullWidth id="standard-basic" 
                  style={{marginTop:"15px", backgroundColor:"white"}}
                  label="Condition" 
                  value={condition}
                  onChange={(e) => setCondition(e.target.value)}
            />
            <TextField fullWidth id="standard-basic" 
                  style={{marginTop:"15px", backgroundColor:"white"}}
                  label="Mileage in mi." 
                  value={mileage}
                  onChange={(e) => setMileage(e.target.value)}
            />
            <TextField fullWidth id="standard-basic" 
                  style={{marginTop:"15px", backgroundColor:"white"}}
                  label="Body Type" 
                  value={bodyType}
                  onChange={(e) => setBodyType(e.target.value)}
            />
            <TextField fullWidth id="standard-basic" 
                  style={{marginTop:"15px", backgroundColor:"white"}}
                  label="Transmission" 
                  value={transmission}
                  onChange={(e) => setTransmission(e.target.value)}
            />
            <TextField fullWidth id="standard-basic" 
                  style={{marginTop:"15px", backgroundColor:"white"}}
                  label="Year of Manufacture" 
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
            />
            <TextField fullWidth id="standard-basic" 
                  style={{marginTop:"15px", backgroundColor:"white"}}
                  label="Exterior Color" 
                  value={colorExt}
                  onChange={(e) => setColorExt(e.target.value)}
            />
            <TextField fullWidth id="standard-basic" 
                  style={{marginTop:"15px", backgroundColor:"white"}}
                  label="Interior Color" 
                  value={colorInt}
                  onChange={(e) => setColorInt(e.target.value)}
            />
            <TextField fullWidth id="standard-basic" 
                  style={{marginTop:"15px", backgroundColor:"white"}}
                  label="Fuel Type" 
                  value={fuelType}
                  onChange={(e) => setFuelType(e.target.value)}
            />
            <TextField fullWidth id="standard-basic" 
                  style={{marginTop:"15px", backgroundColor:"white"}}
                  label="Number of Owners" 
                  value={noOfOwners}
                  onChange={(e) => setNoOfOwners(e.target.value)}
            />
            {/* <input type="text" name="make" className="form-control" placeholder="make"  />
            <input type="text" name="model" className="form-control" placeholder="model" />
            <input type="text" name="price" className="form-control" placeholder="price" />
            <input type="text" name="condition" className="form-control" placeholder="condtition" />
            <input type="text" name="mileage" className="form-control" placeholder="mileage" />
            <input type="text" name="bodyType" className="form-control" placeholder="body type"/>
            <input type="text" name="transmission" className="form-control" placeholder="transmission" />
            <input type="text" name="year" className="form-control" placeholder="year" />
            <input type="text" name="colorExt" className="form-control" placeholder="color exterior" />
            <input type="text" name="colorInt" className="form-control" placeholder="color interior" />
            <input type="text" name="fuelType" className="form-control" placeholder="fuel type" />
            <input type="text" name="noOfOwners" className="form-control" placeholder="no of pervious owners" /> 
            <textarea name="features" className="form-control" placeholder="features" ></textarea>*/}
            <input type="file" name="images" accept="image/png, image/gif, image/jpeg" className="form-control" placeholder="image" multiple/>
            
            <TextField fullWidth id="standard-basic" 
                  style={{marginTop:"15px", backgroundColor:"white"}}
                  label="Features" 
                  multiline
                  maxRows={4}
                  value={features}
                  onChange={(e) => setFeatures(e.target.value)}
            />

            
            
            <Typography margin="10px" >
                <Button size="medium" variant="contained" onClick={handleSubmit}>Update</Button>
            </Typography>
            <Typography >
                <Button size="medium" color="warning" variant="contained" onClick={handleDelete}>Delete</Button>
            </Typography>
            {/* <button type="button" onClick={handleSubmit} className="btn btn-info">
                Update
            </button>
            <button type="button" onClick={handleDelete} className="btn btn-warning m-1">
                Delete
            </button> */}
             {/* <div >
                <label >Title:</label>
                <input type="text" name="title" className="form-control" placeholder="title" />
            </div> */}
            </form>
        <a href="/browse">Cancel</a>
      </div>
      <div className="col-md-3"></div>
    </div>
    )
}

export default EditItem
