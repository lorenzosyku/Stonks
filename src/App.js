import './App.css';
import Datagraph from './components/Datagraph';
import Search from './components/Search';
import {useState} from 'react';


function App() {

  const [stonk, setStonk] = useState({
    symbol: '-',
    regularMarketPrice: '-.--',
    marketTime: '-:--'
  });
  const [series, setSeries] = useState([{
    data: [],
  }]);
  const [seriesBar, setSeriesBar] = useState([{
    name: 'volume',
    data: [],
  }])

  return (
    <div className="App">
      <Search stonk={stonk} setStonk={setStonk} setSeries={setSeries} setSeriesBar={setSeriesBar}/>
      <Datagraph series={series} seriesBar={seriesBar}/>
    </div>
  );
};

export default App;
