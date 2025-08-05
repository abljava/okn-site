import React, { useEffect, useState } from "react";

function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Проверяем, было ли уже дано согласие
    const consentGiven = localStorage.getItem("cookieConsent");
    if (!consentGiven) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setShowConsent(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "false");
    setShowConsent(false);
  };

  if (!showConsent) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 max-w-[1440px] w-[calc(100%-2.5rem)] lg:w-full mb-5 bg-white border-t border-gray-200 shadow-lg rounded-lg z-50 p-5 md:p-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-xs text-gray-600 leading-relaxed">
            Мы используем cookies, чтобы сайт был лучше.{" "}
            <a
              href="/cookies"
              className="text-orange font-semibold hover:text-darkGrey underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Что это?
            </a>
            .
          </p>
        </div>
        <div className="flex gap-3 w-full md:w-auto ">
          <button
            onClick={acceptCookies}
            className="flex-1 px-6 py-2 text-xs font-semibold uppercase text-white bg-orange hover:opacity-80 rounded-md transition-all"
          >
            Принять
          </button>
          <button
            onClick={declineCookies}
            className="flex-1 px-6 py-2 text-xs font-semibold uppercase text-orange bg-white hover:opacity-80 border border-orange rounded-md transition-all"
          >
            Отклонить
          </button>
        </div>
      </div>
    </div>
  );
}

export default CookieConsent;
