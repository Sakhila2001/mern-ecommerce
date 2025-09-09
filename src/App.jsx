import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Header from './components/header';
import Home from './Pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;