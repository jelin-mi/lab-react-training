import './BoxColor.css';

function BoxColor({ r, g, b, color }) {
  const divStyle = {
    backgroundColor: `rgb(${r},${g},${b})`,
    color: `${color}`,
  };

  return (
    <div style={divStyle} className="box-color">
      <p>
        rgb({r},{g},{b})
      </p>
    </div>
  );
}

export default BoxColor;