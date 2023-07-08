import './App.css';
import Compteur from './components/Compteur/Compteur';
import Toggle from './components/Compteur/Toggle';
import Reducer from './components/Reduce/Reducer';
import Fetch from './components/fetch/Fetch';

function App() {
  
  return (
    <div className='App'>
      <Toggle />
      <Compteur />      
      <br />
      <Reducer />
      <br/>
      <Fetch />
    </div>
  );
}

export default App;
