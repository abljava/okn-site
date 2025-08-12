import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { lazy, Suspense } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CookieConsent from "./components/CookieConsent";

// Ленивая загрузка страниц
const Home = lazy(() => import("./pages/Home"));
const History = lazy(() => import("./pages/History"));
const Authors = lazy(() => import("./pages/Authors"));
const ProtectedObjects = lazy(() => import("./pages/ProtectedObjects"));
const DevelopmentRegulations = lazy(() => import("./pages/DevelopmentRegulations"));
const Politics = lazy(() => import("./pages/Politics"));
const Cookies = lazy(() => import("./pages/Cookies"));

function App() {
  return (
    <>
      <HelmetProvider>
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
          <Suspense fallback={
            <div className="flex items-center justify-center min-h-screen">
              <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-500"></div>
            </div>
          }>
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
          </Suspense>
          <Footer />
          <CookieConsent />
        </BrowserRouter>
      </HelmetProvider>
    </>
  );
}

export default App;
