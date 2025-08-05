import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import History from "./pages/History";
import Authors from "./pages/Authors";
import ProtectedObjects from "./pages/ProtectedObjects";
import DevelopmentRegulations from "./pages/DevelopmentRegulations";
import TestMap from "./components/TetsMap";
import Politics from "./pages/Politics";
import Cookies from "./pages/Cookies";
import CookieConsent from "./components/CookieConsent";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/protected-objects" element={<ProtectedObjects />} />
        <Route
          path="/development-regulations"
          element={<DevelopmentRegulations />}
        />
        <Route path="/politics" element={<Politics />} />
        <Route path="/cookies" element={<Cookies />} />
      </Routes>
      <Footer />
      <CookieConsent />
    </BrowserRouter>
  );
}

export default App;
