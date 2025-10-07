import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Header from './components/header';
import Footer from './components/Footer';

import Home from './Pages/Home';
import ProductListing from './Pages/ProductListing';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/"  exact={true} element={<Home />} />
        <Route path="/productListing"  exact={true} element={<ProductListing />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;