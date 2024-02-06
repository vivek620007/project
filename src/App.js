import './App.css';
import Banner from './Component/Banner';
import Exports from './Component/Exports';
import Header from './Component/Header';
import Newsletter from './Component/Newsletter';
import Plans from './Component/Plans';
function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Exports />
      <Newsletter />
      <Plans />
    </div>
  );
}

export default App;
