import Nav from './components/nav'
import './App.css';
import ProductsList from './components/ProductsList';
import ProductDisplay from './components/ProductDisplay';

function App() {
  return (
    <div className="App">
      <Nav />
      {/* <ProductsList /> */}
      <ProductDisplay />
    </div>
  );
}

export default App;
