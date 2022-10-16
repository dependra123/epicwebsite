import Home from './pages/home';
import About from './pages/about';
import SharedLayout from './pages/sharedLayout';
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default App
