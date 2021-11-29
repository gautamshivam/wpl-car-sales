import axios from "axios";
import React from "react";
import { useNavigate } from 'react-router-dom';

const AddItem = () => {

    const formRef = React.createRef();
    let navigate = useNavigate();

    const handleSubmit = () => {
        console.log(formRef.current.images.files);
        const images = [];
        for(let i=0; i < formRef.current.images.files.length; i++) {
            images.push(formRef.current.images.files.item(i).name);
        }
        
        console.log(images);
        axios.post(`${process.env.REACT_APP_BASE_URL}/api/cars/add`, {
            title:formRef.current.title.value,
            images:images,
            make:formRef.current.make.value,
            model:formRef.current.model.value,
            price:formRef.current.price.value,
            condition:formRef.current.condition.value,
            mileage:formRef.current.mileage.value,
            bodyType:formRef.current.bodyType.value,
            transmission:formRef.current.transmission.value,
            year:formRef.current.year.value,
            colorExt:formRef.current.colorExt.value,
            colorInt:formRef.current.colorInt.value,
            fuelType:formRef.current.fuelType.value,
            noOfOwners:formRef.current.noOfOwners.value,
            features:formRef.current.features.value,
            isAvailable:true

        }).then((res) => {
            console.log('added car');
            navigate('/browse');
        })
    }

  return (
    <div className="row">
      
       <div className="col-md-3"></div>
     
      <div className="col-md-6">
      <h1> Add new Car Record </h1>
        <form ref={formRef}>
        <input type="text" name="title" className="form-control" placeholder="title"  />
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
        <input type="text" name="noOfOwners" className="form-control" placeholder="no of pervious owners" />
        <input type="file" name="images" accept="image/png, image/gif, image/jpeg" className="form-control" placeholder="image" multiple/>
        <textarea name="features" className="form-control" placeholder="features" ></textarea>
        <button type="button" onClick={handleSubmit} className="btn btn-info">
            Save
        </button>
        </form>
        <a href="/browse">Cancel</a>
      </div>
      <div className="col-md-3"></div>
    </div>
  );
};

export default AddItem;
