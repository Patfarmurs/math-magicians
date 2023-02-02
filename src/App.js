import { Route, Routes } from 'react-router-dom';
import Header from './components/navbar';
import Home from './pages/Home';
import Quote from './pages/Quote';
import CalcUserInterface from './components/Calculator';

const App = () => (
  <div>
    <Header />
    <div className="home-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Calculator" element={<CalcUserInterface />} />
        <Route path="/Quote" element={<Quote />} />
      </Routes>
    </div>
  </div>
);

export default App;

