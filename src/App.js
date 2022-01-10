import './App.css';
import Datagraph from './components/Datagraph';
import Search from './components/Search';
import {useState} from 'react';


function App() {

  const [stonk, setStonk] = useState(null)

  return (
    <div className="App">
      <Search stonk={stonk} setStonk={setStonk}/>
      <Datagraph stonk={stonk}/>
    </div>
  );
}

export default App;
