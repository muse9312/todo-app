
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './styles/page.scss'

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/update" element={<Home />} />
      </Routes>
    </BrowserRouter>


  );
}

export default App;