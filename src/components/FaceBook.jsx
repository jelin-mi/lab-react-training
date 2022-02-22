import { useState } from 'react';
import data from '../data/berlin.json';
import './FaceBook.css';

function FaceBook() {
  const [profiles, setProfiles] = useState({
      profilesData: [...data],
  });

  const countries = data.map((item) => {
    return item.country;
  });

  const uniqueCountries = [...new Set(countries)];

  const handleClick = (e) => {
    let selectedCountry = e.currentTarget.value;

    const selected = data.map((item) => {
      return item.country === selectedCountry
        ? {
            ...item,
            backgroundColor: '#A3D2E2',
          }
        : { ...item };
    });
    setProfiles({ ...profiles, profilesData: [...selected] });
  };


  return (
    <div className="facebook">
      <h2>FaceBook</h2>
      <div className="row-country">
        {uniqueCountries.map((singleCountry, i) => {
          return (
            <div className="country-filter" key={i}>
              <button onClick={handleClick} value={singleCountry} >
                {singleCountry}
              </button>
            </div>
          );
        })}
      </div>
      {profiles.profilesData.map((student, i) => {
        return (
          <div className="profiles">
            <div key={i} className="card" style={{backgroundColor: `${student.backgroundColor ? student.backgroundColor : '#fff'}`}}>
              <div className="image">
                <img src={student.img} alt="" />
              </div>
              <div className="text">
                <p>
                  <strong>First name:</strong> {student.firstName}
                </p>
                <p>
                  <strong>Last name:</strong> {student.lastName}
                </p>
                <p>
                  <strong>Country:</strong> {student.country}
                </p>
                <p>
                  <strong>Type:</strong>{' '}
                  {student.isStudent ? 'Student' : 'Teacher'}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FaceBook;
