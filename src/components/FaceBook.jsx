import { useState } from 'react';
import data from '../data/berlin.json';

function FaceBook() {
  const [profiles, setProfiles] = useState(data);

  const myProfiles = [...profiles];

  return (
    <>
      {myProfiles.map((student) => {
        return (
          <div key={student.lastName} className="card">
            <div className='image'>
              <img src={student.img} alt="" />
            </div>
            <div className='text'>
              <p><strong>First name:</strong> {student.firstName}</p>
              <p><strong>Last name:</strong> {student.lastName}</p>
              <p><strong>Country:</strong> {student.country}</p>
              <p><strong>Type:</strong> {student.isStudent ? 'Student' : 'Teacher'}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default FaceBook;