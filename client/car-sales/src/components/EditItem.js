import React, {useEffect} from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const EditItem = (props) => {
    const formRef = React.createRef();
    let navigate = useNavigate();

    const handleSubmit = () => {
        console.log(formRef.current.images.files);
        var images = [];
        for(let i=0; i < formRef.current.images.files.length; i++) {
            images.push(formRef.current.images.files.item(i).name);
        }
        if(images.length === 0) images = props.car.images;
        
        console.log(images);
        axios.put(`/api/cars/edit/`+props.car._id, {
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
            console.log('update car', res);
            navigate('/browse');
        })
    }
    const handleDelete =() =>{
        let images=[] ;
        images = props.car.images;
        
        axios.put(`/api/cars/edit/`+props.car._id, {
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
            isAvailable:false
        }).then((res) => {
            console.log('deleted car', res);
            navigate('/browse');
        })
    }
    useEffect(() => {
        formRef.current.title.value = props.car.title;
        formRef.current.make.value = props.car.make;
        formRef.current.model.value = props.car.model;
        formRef.current.price.value = props.car.price;
        formRef.current.condition.value = props.car.condition;
        formRef.current.mileage.value = props.car.mileage;
        formRef.current.bodyType.value = props.car.bodyType;
        formRef.current.transmission.value = props.car.transmission;
        formRef.current.year.value = props.car.year;
        formRef.current.colorExt.value = props.car.colorExt;
        formRef.current.colorInt.value = props.car.colorInt;
        formRef.current.fuelType.value = props.car.fuelType;
        formRef.current.noOfOwners.value = props.car.noOfOwners;
        formRef.current.features.value = props.car.features;
    }, [])
    return (
        <div className="row">
            
            <div className="col-md-3"></div>
     
        <div className="col-md-6">
        <h1> Edit Car Record </h1>
            <form ref={formRef}>
            <input type="text" name="title" className="form-control" placeholder="title" />
            <input type="text" name="make" className="form-control" placeholder="make"  />
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
            <input type="file" name="images" accept="image/png, image/gif, image/jpeg" className="form-control" placeholder="image" multiple/>
            <textarea name="features" className="form-control" placeholder="features" ></textarea>
            <button type="button" onClick={handleSubmit} className="btn btn-info">
                Update
            </button>
            <button type="button" onClick={handleDelete} className="btn btn-warning m-1">
                Delete
            </button>
            </form>
        <a href="/browse">Cancel</a>
      </div>
      <div className="col-md-3"></div>
    </div>
    )
}

export default EditItem
