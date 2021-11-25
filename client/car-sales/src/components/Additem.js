<<<<<<< HEAD
import axios from "axios";
import React from "react";


const Additem = () => {

    const formRef = React.createRef();
       
    const handleSubmit = () => {
        console.log(formRef.current.images.files);
        const images = [];
        for(let i=0; i < formRef.current.images.files.length; i++) {
            images.push(formRef.current.images.files.item(i).name);
        }
        
        console.log(images);
        axios.post('/api/cars/add', {
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

        }).then((res) => console.log(res))
    }

  return (
    <div className="row">
      <h1> Add new Car Record </h1>
       <div className="col-md-3"></div>
     
      <div className="col-md-6">
        <form ref={formRef}>
        <input type="text" name="title" className="form-control" placeholder="title" value="2018 Tesla Model S 100D" />
        <input type="text" name="make" className="form-control" placeholder="make" value="Tesla" />
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
            Save
        </button>
        </form>
        <a href="/browse">Cancel</a>
      </div>
      <div className="col-md-3"></div>
=======
import React from "react";

const Additem = () => {
  return (
    <div class="row">
      <div class="col-md-2">
          
      </div>
      <div class="col-md-8">
        <h1> Add new Car Record </h1>
        <form action="" method="">
          <div class="form-group">
            <input
              type="text"
              name="title"
              class="form-control"
              placeholder="title"
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              name="make"
              class="form-control"
              placeholder="make"
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              name="model"
              class="form-control"
              placeholder="model"
            />
          </div>
          <input type="text" name="price" class="form-control" placeholder="price"/>
          <input type="text" name="condition" class="form-control" placeholder="condtition"/>
          <input type="text" name="mileage" class="form-control" placeholder="mileage"/>
          <input type="text" name="bodytype" class="form-control" placeholder="body type"/>
          <input type="text" name="transmission" class="form-control" placeholder="transmission"/>
          <input type="text" name="year" class="form-control" placeholder="year"/>
          <input type="text" name="colorex" class="form-control" placeholder="color exterior"/>
          <input type="text" name="colorin" class="form-control" placeholder="color interior"/>
          <input type="text" name="fueltype" class="form-control" placeholder="fuel type"/>
          <input type="text" name="numberofowners" class="form-control" placeholder="no of pervious owners"/>
          <input type="file" name="image" class="form-control" placeholder="image" multiple/>
          <textarea name="features" class="form-control" placeholder="features"></textarea>
          <div class="form-group">
            <button type="submit" class="btn btn-info">
              Save
            </button>
          </div>
        </form>
        <a href="/browse">Cancel</a>
      </div>
      <div class="col-md-2"></div>
>>>>>>> 7ff7c655e4fd9f897ec9ea7c904ec00b7e5e9ef1
    </div>
  );
};

export default Additem;
