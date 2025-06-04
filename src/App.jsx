import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import History from "./pages/History";
import Authors from "./pages/authors";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/authors" element={<Authors />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
