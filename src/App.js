
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import './styles/page.scss'

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/update" element={<Main />} />
      </Routes>
    </BrowserRouter>


  );
}

export default App;