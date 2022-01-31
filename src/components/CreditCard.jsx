import './CreditCard.css';

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
        {type === 'Visa' && <img src="../images/visa.png" alt="visa" />}
        {type === 'Master Card' && (
          <img src="../images/master-card.svg" alt="master" />
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
