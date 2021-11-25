import React, {useEffect} from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const EditItem = (props) => {
    const formRef = React.createRef();
    let navigate = useNavigate();

    const handleSubmit = () => {
        console.log(formRef.current.images.files);
        const images = [];
        for(let i=0; i < formRef.current.images.files.length; i++) {
            images.push(formRef.current.images.files.item(i).name);
        }
        
        console.log(images);
        axios.put('/api/cars/edit', {
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
            console.log('update car');
            navigate('/browse');
        })
    }
    useEffect(() => {
        formRef.current.title.value = props.car.title;
        formRef.current.make.value = props.car.make;
        formRef.current.bodyType.value = props.car.bodyType;
    }, [])
    return (
        <div className="row">
            
            <div className="col-md-3"></div>
     
        <div className="col-md-6">
        <h1> Edit Car Record </h1>
            <form ref={formRef}>
            <input type="text" name="title" className="form-control" placeholder="title" />
            <input type="text" name="make" className="form-control" placeholder="make"  />
            <input type="text" name="model" className="form-control" placeholder="model" value="model S"/>
            <input type="text" name="price" className="form-control" placeholder="price" value="69989"/>
            <input type="text" name="condition" className="form-control" placeholder="condtition" value="used"/>
            <input type="text" name="mileage" className="form-control" placeholder="mileage" value="56547"/>
            <input type="text" name="bodyType" className="form-control" placeholder="body type" value="sedan" />
            <input type="text" name="transmission" className="form-control" placeholder="transmission" value="automatic"/>
            <input type="text" name="year" className="form-control" placeholder="year" value="2018"/>
            <input type="text" name="colorExt" className="form-control" placeholder="color exterior" value="Pearl White Multi"/>
            <input type="text" name="colorInt" className="form-control" placeholder="color interior" value="Black"/>
            <input type="text" name="fuelType" className="form-control" placeholder="fuel type" value="Electric"/>
            <input type="text" name="noOfOwners" className="form-control" placeholder="no of pervious owners" value="2"/>
            <input type="file" name="images" accept="image/png, image/gif, image/jpeg" className="form-control" placeholder="image" multiple/>
            <textarea name="features" className="form-control" placeholder="features" value="Alloy Wheels, Front dual zone A/C,Air Conditioning, Overhead airbag,ABS brakes, Heated Seats, Navigation System, Bluetooth, Premium Sound System, Remote keyless entry, Navigation System, Leather Seats, Memory Seat, Exterior Parking Camera Rear, Rain sensing wipers, Auto-leveling suspension, Power steering, Self-Parking, Enhanced Autopilot"></textarea>
            <button type="button" onClick={handleSubmit} className="btn btn-info">
                Update
            </button>
            </form>
        <a href="/browse">Cancel</a>
      </div>
      <div className="col-md-3"></div>
    </div>
    )
}

export default EditItem
