import { useState } from 'react';
import SingleColorPicker from './SingleColorPicker';

function RGBColorPicker() {
  const [rValue, setrValue] = useState(null);
  const [gValue, setgValue] = useState(null);
  const [bValue, setbValue] = useState(null);

  const handleChangeR = (e) => setrValue(e.target.value);
  const handleChangeG = (e) => setgValue(e.target.value);
  const handleChangeB = (e) => setbValue(e.target.value);

  const divStyle = {
    backgroundColor: `rgb(${rValue},${gValue},${bValue})`,
    width: '150px',
    height: '150px',
    margin: '0 auto',
    padding: '2px',
    marginTop: '15px',
    marginBottom: '100px',
  };

  return (
    <>
      <h2>Color Picker</h2>
      <SingleColorPicker color="r" value={rValue} onChange={handleChangeR} />

      <SingleColorPicker color="g" value={gValue} onChange={handleChangeG} />

      <SingleColorPicker color="b" value={bValue} onChange={handleChangeB} />

      <div style={divStyle}>
        <p>
          rgb({rValue}, {gValue}, {bValue})
        </p>
      </div>
    </>
  );
}

export default RGBColorPicker;