import Nav from './components/nav'
import { Routes, Route } from 'react-router-dom'
import './App.css';
import ProductsList from './components/ProductsList';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import ProductDisplay from './components/ProductDisplay';
import Cart from './components/Cart';
import MiniCart from './components/MiniCart';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()

});

function App() {

  const routes = [
    {
      path: '/',
      component: <ProductsList cat={'all'}/>,
    },
    {
      path: '/clothes',
      component: <ProductsList cat={'clothes'} />,
    },
    {
      path: '/tech',
      component: <ProductsList cat={'tech'}/>,
    }
  ]

  return (  
  <ApolloProvider client={client}>
    <div className="App">
      <Nav />
      <Routes>
        {routes.map(({ path, component, category }) => (
          <Route path={path} key={path} element={component} category={category}/>
        ))}
      </Routes>
    </div>
  </ApolloProvider>
  );
}

export default App;
