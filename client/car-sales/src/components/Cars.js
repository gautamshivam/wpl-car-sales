
const Cars = (props) => {
    return (
        <div>
            {
                props.cars.map((car) => (
                    <div key={car._id}>
                        <h1>{car.name}</h1>
                        <p><b>Price:</b> {car.price}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Cars;