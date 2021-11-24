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
    </div>
  );
};

export default Additem;
