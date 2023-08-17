
import './App.css';
import Bookings from './Components/Bookings/Bookings';
import Contact from './Components/Contact/Contact';
import DashList from './Components/DashList';
import Discover from './Components/Discover/Discover';
import Revenue from './Components/Revenue/Revenue';

function App() {
  return (
    <div className="App">
    <h3>Dashboard</h3>
    <DashList/>
    <Revenue/>
    <Bookings/>
    <Discover/>
    <Contact/>

    </div>
  );
}

export default App;
