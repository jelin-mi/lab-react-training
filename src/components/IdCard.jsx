import './IdCard.css';

function IdCard({
    lastName,
    firstName,
    gender,
    height,
    birth,
    picture
}){
    return (
        <div className='card'>
            <div className='img'>
               <img src={picture} alt="blabla"/> 
            </div>
            <div className='text'>
                <p><strong>First name:</strong> {firstName}</p>
                <p><strong>Last name:</strong> {lastName}</p>
                <p><strong>Gender:</strong> {gender}</p>
                <p><strong>Height:</strong> {height}</p>
                <p><strong>Birth:</strong> {birth}</p>
            </div>
        </div>
    );
}

export default IdCard;