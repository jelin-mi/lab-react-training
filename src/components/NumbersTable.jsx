function NumbersTable({ limit }) {
  const arrayOfNumbers = [];
  for (let i = 1; i <= limit; i++) {
    arrayOfNumbers.push(i);
  }

  const changeColor = (number) => {
    if (number % 2 === 0) {
      return 'red';
    }
  };

  return (
    <>
      <h2>Numbers Table</h2>
      {arrayOfNumbers.map((box) => {
        return (
          <div
            key={box}
            style={{ backgroundColor: changeColor(box), maxWidth: '50px', margin: '0 auto'}}
          >
            {box}
          </div>
        );
      })}
    </>
  );
}

export default NumbersTable;