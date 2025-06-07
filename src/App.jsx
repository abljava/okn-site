import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import History from './pages/History';
import Authors from './pages/Authors';
import ProtectedObjects from './pages/ProtectedObjects';
import DevelopmentRegulations from './pages/DevelopmentRegulations';

function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/history' element={<History />} />
          <Route path='/authors' element={<Authors />} />
          <Route path='/protected-objects' element={<ProtectedObjects />} />
          <Route
            path='/development-regulations'
            element={<DevelopmentRegulations />}
          />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
