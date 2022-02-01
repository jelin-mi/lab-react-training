import './DriverCard.css';
import Rating from './Rating';

function DriverCard({ name, rating, img, car }) {
    
  return (
    <div className="license">

      <div className="picture">
        <img src={img} alt="guy" />
      </div>

      <div className="info">
        <h1>{name}</h1>
        <Rating>{rating}</Rating>
        <p>{car.model} - {car.licensePlate}</p>
      </div>

    </div>
  );
}

export default DriverCard;