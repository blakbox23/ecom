import Nav from './components/nav'
import './App.css';
import ProductsList from './components/ProductsList';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql

} from "@apollo/client";

import ProductDisplay from './components/ProductDisplay';
import Cart from './components/Cart';
import MiniCart from './components/MiniCart';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()

});
// client.query({
//     query: gql`{
//       category(input: {title: "clothes"}){
//         name
//         products{
//           name
//           attributes{
//             name
            
//           }
//         }
//       }
//     }
//     `
//   }).then(result => console.log(result.data.category.name));

function App() {
  return (  
  <ApolloProvider client={client}>
    <div className="App">
      <Nav />
      <ProductsList />
      {/* <ProductDisplay /> */}
       {/* <Cart /> */}
       {/* <MiniCart /> */}
    </div>
  </ApolloProvider>
  );
}

export default App;
