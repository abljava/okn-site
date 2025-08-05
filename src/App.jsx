import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
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
    <>
      <Helmet>
        <title>
          Достопримечательное место "Исторический центр города Владивостока"
        </title>
        <meta
          name="description"
          content="Официальный сайт Достопримечательного места 'Исторический центр города Владивостока'. Карты, объекты, история, охрана."
        />
        <meta
          name="keywords"
          content="Владивосток, культурное наследие, история, объекты, карта, охрана, памятники"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://historycenter-vl.ru" />

        {/* Open Graph */}
        <meta property="og:title" content="Исторический центр Владивостока" />
        <meta
          property="og:description"
          content="Официальный сайт Достопримечательного места 'Исторический центр города Владивостока'."
        />
        <meta
          property="og:image"
          content="https://historycenter-vl.ru/og-image.jpg"
        />
        <meta property="og:url" content="https://historycenter-vl.ru" />
        <meta property="og:type" content="website" />
      </Helmet>

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
    </>
  );
}

export default App;
