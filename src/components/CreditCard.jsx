import './CreditCard.css';
import visa from '../assets/images/visa.png';
import master from '../assets/images/master-card.svg';

function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
  const cardStyle = {
    backgroundColor: `${bgColor}`,
    color: `${color}`,
  };

  return (
    <div className="credit-card" style={cardStyle}>
      <div className="type">
        {type === 'Visa' && <img src={visa} alt="visa" />}
        {type === 'Master Card' && (
          <img src={master} alt="master" />
        )}
      </div>

      <div className="number">
        <h1>•••• •••• •••• {number.substr(-4)}</h1>
      </div>

      <div className="text">
        <p>
          Expires {expirationMonth}/{expirationYear}&emsp;{bank}
        </p>
        <p>{owner}</p>
      </div>
    </div>
  );
}

export default CreditCard;
