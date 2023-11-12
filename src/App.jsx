import './App.css'
import Homepage from './pages/Homepage'
import Oppotunities from './pages/Oppotunities';
import Navbar from './components/Navbar'
import {
  Routes, Route,
} from 'react-router-dom';

function App() {

  return (
    <div className='appContainer'>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage/>} />
        <Route exact path="/oportunidades" element={<Oppotunities />} />
      </Routes>
    </div>
  )
}

export default App
