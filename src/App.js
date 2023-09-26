import './App.css';
import TopInfo from './components/TopInfo';
import InfoSec from './components/InfoSec';

function App() {
  return (
    <div className="App">
      <TopInfo/>
      <InfoSec left="true" text="hi, we are trying to reach you about your cars extended warrenty" img="https://upload.wikimedia.org/wikipedia/commons/1/1a/2023_Dysk_SSD_Patriot_P210_2TB.jpg"/>
    </div>
  );
}

export default App;
