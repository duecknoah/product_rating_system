import logo from './logo.svg';
import './App.css';
import ProductsGrid from './ProductsGrid';

function App() {
  return (
    <div className="App">
      <p className="siteTitle">Amazone</p>
      <p className="siteSubTitle">Please leave a rating of our products</p>
      <ProductsGrid />
    </div>
  );
}

export default App;
