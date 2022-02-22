function SingleColorPicker({ color, value, onChange }) {
  return (
    <>
      <label>{color}</label>
      <input
        type="number"
        value={value}
        min="0"
        max="255"
        onChange={onChange}
      />
    </>
  );
}

export default SingleColorPicker;