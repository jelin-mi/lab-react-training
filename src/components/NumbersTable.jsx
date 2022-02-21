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
      {arrayOfNumbers.map((box) => {
        return (
          <div
            key={box}
            style={{ backgroundColor: changeColor(box), maxWidth: '30px' }}
          >
            {box}
          </div>
        );
      })}
    </>
  );
}

export default NumbersTable;