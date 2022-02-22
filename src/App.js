import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import Dice from './components/Dice';
import Carousel from './components/Carousel';
import NumbersTable from './components/NumbersTable';
import FaceBook from './components/FaceBook';

function App() {
  return (
    <div className="App">
      {/* Iteration 1 - IdCard */}
      <div className="id-card">
        <IdCard
          lastName="Doe"
          firstName="John"
          gender="male"
          height={178}
          birth={'1992-07-14'}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />

        <IdCard
          lastName="Delores "
          firstName="Obrien"
          gender="female"
          height={172}
          birth={'1988-05-11'} // {new Date("1988-05-11")} --> 'new Date' renders some kind of error and no content displays
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </div>

      {/* Iteration 2 - Greetings */}
      <div className="greetings">
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
      </div>

      {/* Iteration 3 - Random */}
      <Random min={1} max={6}>
        Random value between 1 and 6 =>
      </Random>
      <Random min={1} max={100}>
        Random value between 1 and 100 =>
      </Random>

      {/* Iteration 4 - BoxColor */}
      <BoxColor r={255} g={0} b={0} color="white" />
      <BoxColor r={128} g={255} b={0} color="black" />

      {/* Iteration 5 - CreditCard */}
      <CreditCard
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white"
      />

      <CreditCard
        type="Master Card"
        number="0123456789010995"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Maxence Bouret"
        bgColor="#eeeeee"
        color="#222222"
      />

      <CreditCard
        type="Visa"
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="Name of the Bank"
        owner="Firstname Lastname"
        bgColor="#ddbb55"
        color="white"
      />

      {/* Iteration 6 - Rating */}
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>

      {/* Iteration 7 - DriverCard */}
      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: 'Toyota Corolla Altis',
          licensePlate: 'CO42DE',
        }}
      />

      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: 'Audi A3',
          licensePlate: 'BE33ER',
        }}
      />

      {/* Iteration 8 - LikeButton */}
      <div className="buttons">
        <LikeButton>likes 👍</LikeButton>
        <LikeButton>dislikes 👎</LikeButton>
      </div>

      {/* Iteration 9 - LikeButton */}
      <ClickablePicture />

      {/* Iteration 10 | State: Dice */}
      <Dice />

      {/* Iteration 11 | State: Carousel */}
      <Carousel
        images={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg',
        ]}
      />

      {/* Iteration 12 | List and Keys | NumbersTable */}
      <NumbersTable limit={12} />

      {/* Iteration 13 + 14 | List and Keys - FaceBook */}
      <FaceBook />

      

    </div>
  );
}

export default App;
