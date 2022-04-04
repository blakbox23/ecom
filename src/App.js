import Nav from './components/nav'
import './App.css';
import ProductsList from './components/ProductsList';
import ProductDisplay from './components/ProductDisplay';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <Nav />
      {/* <ProductsList /> */}
      {/* <ProductDisplay /> */}
       <Cart />
    </div>
  );
}

export default App;
