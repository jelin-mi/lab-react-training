import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';

function App() {
  return (
    <div className="App">
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
          birth={'1988-05-11'} // {new Date('1988-05-11')} --> 'new Date' renders some kind of error and no content displays
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </div>

      <div className="greetings">
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
      </div>

      <div>
        <Random min={1} max={6}>
          Random value between 1 and 6 =>
        </Random>
        <Random min={1} max={100}>
          Random value between 1 and 100 =>
        </Random>
      </div>

      <div>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </div>
    </div>
  );
}

export default App;
