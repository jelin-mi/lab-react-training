import './App.css';
import IdCard from './components/IdCard';

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
    </div>
  );
}

export default App;