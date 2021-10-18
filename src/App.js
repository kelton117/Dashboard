import Menu from './components/Menu';
import Reviews from './components/Reviews';
import Rating from './components/Rating';
import Analysis from './components/Analysis';
import Visitors from './components/Visitors';
import './App.css';
import './style.css';

function App() {
  return (
    <div className="container">

      <div className="menu"><Menu /></div>
      
      <div className="reviews"><Reviews /></div>

      <div className="rating"><Rating /></div>

      <div className="analysis"><Analysis /></div>
      
      <div className="visitors"><Visitors /></div>
     
    </div>
  );
}

export default App;
