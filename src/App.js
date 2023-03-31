import logo from './logo.svg';
import './App.css';
import Class1 from './Components/Class1';
import Class2 from './Components/Class2';
import Class3 from './Components/Class3';
import Errorboundaries from './Components/Errorboundaries';

function App() {
  return (
    <div className="App">
      <Errorboundaries>
      <Class1/>
      </Errorboundaries>
      <Errorboundaries>
        <Class2/>
      </Errorboundaries>
      <Errorboundaries>
        <Class3/>
      </Errorboundaries>
      
    </div>
  );
}

export default App;
