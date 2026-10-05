import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

const COUNTER_ID = 113413675;
const isLiveSite = () =>
  ["historycenter-vl.ru", "www.historycenter-vl.ru"].includes(window.location.hostname);

function hasConsent() {
  try {
    return localStorage.getItem("cookieConsent") === "true";
  } catch {
    return false;
  }
}

let initialized = false;
function initializeCounter() {
  if (initialized) return;
  window.ym = window.ym || function (...args) {
    (window.ym.a = window.ym.a || []).push(args);
  };
  window.ym.l = window.ym.l || Date.now();
  const scriptUrl = `https://mc.yandex.ru/metrika/tag.js?id=${COUNTER_ID}`;
  if (!Array.from(document.scripts).some((script) => script.src === scriptUrl)) {
    const script = document.createElement("script");
    script.async = true;
    script.src = scriptUrl;
    document.head.appendChild(script);
  }
  window.ym(COUNTER_ID, "init", {
    defer: true,
    ssr: true,
    webvisor: true,
    clickmap: true,
    ecommerce: "dataLayer",
    referrer: document.referrer,
    url: window.location.href,
    accurateTrackBounce: true,
    trackLinks: true,
  });
  initialized = true;
}

export default function YandexMetrika() {
  const location = useLocation();
  const [consent, setConsent] = useState(hasConsent);
  const previousUrl = useRef(null);

  useEffect(() => {
    const update = () => setConsent(hasConsent());
    window.addEventListener("cookie-consent-change", update);
    window.addEventListener("storage", update);
    return () => {
      window.removeEventListener("cookie-consent-change", update);
      window.removeEventListener("storage", update);
    };
  }, []);

  useEffect(() => {
    if (!isLiveSite()) return;
    if (!consent) {
      if (initialized) {
        window.ym(COUNTER_ID, "destruct");
        initialized = false;
      }
      previousUrl.current = null;
      return;
    }
    initializeCounter();
    const url = window.location.origin + location.pathname + location.search + location.hash;
    // Avoid duplicate pageviews when React repeats effects in StrictMode.
    if (previousUrl.current === url) return;
    window.ym(COUNTER_ID, "hit", url, {
      referer: previousUrl.current || document.referrer,
      title: document.title,
    });
    previousUrl.current = url;
  }, [consent, location.pathname, location.search, location.hash]);

  return null;
}
