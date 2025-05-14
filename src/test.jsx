import React from "react";

export default function Test() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Хедер */}
      <header className="bg-[#2d3a4a] bg-opacity-80 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Логотип */}
          <img src="/logo.png" alt="Герб" className="h-12" />
          <nav className="flex gap-8 text-xs uppercase font-semibold">
            <a href="#" className="hover:underline">Исторические сведения</a>
            <a href="#" className="hover:underline">Предмет охраны</a>
            <a href="#" className="hover:underline">Правила использования</a>
            <a href="#" className="hover:underline">Авторский коллектив</a>
          </nav>
          <button className="bg-orange-500 text-white px-4 py-2 rounded text-xs font-bold">Написать на почту</button>
        </div>
      </header>

      {/* Блок с фоном и заголовком */}
      <section className="relative bg-cover bg-center min-h-[400px] flex items-center" style={{backgroundImage: 'url(/bg-main.jpg)'}}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto relative z-10 px-4 py-16">
          <h1 className="text-3xl md:text-5xl font-bold uppercase text-white mb-6 max-w-2xl">Достопримечательное место "Исторический центр города Владивостока"</h1>
        </div>
      </section>

      {/* Введение */}
      <section className="container mx-auto px-4 py-12 flex flex-col md:flex-row gap-8 items-start">
        <div className="md:w-2/3">
          <h2 className="text-2xl font-bold mb-4">Введение</h2>
          <p className="mb-4 text-gray-800">За последние десятилетия накоплено множество научных и практических знаний о развитии и особенностях исторического центра Владивостока. Сайт создан для систематизации и популяризации этих знаний, а также для поддержки гражданских инициатив по сохранению культурного наследия города.</p>
          <p className="text-gray-800">Сделан совместными усилиями жителей, ученых, музейных и общественных организаций, а также администрации города и края.</p>
        </div>
        <div className="md:w-1/3 flex flex-col items-center">
          {/* Фото-полароид */}
          <div className="bg-white shadow-lg rounded p-2 mb-2">
            <img src="/photo1.jpg" alt="Владивосток 1950" className="w-40 h-40 object-cover rounded" />
            <div className="text-xs text-center mt-1">Владивосток, 1950</div>
          </div>
        </div>
      </section>

      {/* Для кого этот сайт */}
      <section className="bg-gray-200 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Для кого этот сайт?</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-800 mb-6">
            <li>Для граждан, не безразличных к историческому наследию. Для гостей города и туристов.</li>
            <li>Для тех, кто видит в объектах культурного наследия и исторических зданиях не проблему, а потенциал для дальнейшего развития города, его туристической привлекательности.</li>
            <li>Для тех, кто ценит аутентичность города Владивостока, его характер и облик, его прошлое, настоящее и будущее.</li>
          </ol>
          <p className="text-xs text-gray-600">Информация, содержащаяся здесь, носит исключительно информационный характер и не может считаться официальной позицией органов власти.</p>
        </div>
      </section>

      {/* Правовой статус */}
      <section className="container mx-auto px-4 py-12 flex flex-col md:flex-row gap-8 items-start">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Правовой статус</h2>
          <p className="mb-4 text-gray-800">Документация достопримечательного места "Исторический центр города Владивостока" прошла необходимые экспертизы и утверждена органами охраны культурного наследия Приморского края.</p>
          <p className="text-gray-800">Подробные законы доступны в разделе правовой документации на сайте.</p>
        </div>
        <div className="md:w-1/2 flex flex-col items-center">
          {/* Фото-полароид */}
          <div className="bg-white shadow-lg rounded p-2 mb-2">
            <img src="/photo2.jpg" alt="Правовой статус" className="w-40 h-40 object-cover rounded" />
          </div>
        </div>
      </section>

      {/* Знать, чтобы развивать */}
      <section className="bg-gray-200 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Знать, чтобы развивать</h2>
          <ul className="space-y-2 mb-6">
            <li><a href="#" className="text-orange-600 hover:underline">Приказ о включении достопримечательного места в перечень выявленных объектов культурного наследия (PDF)</a></li>
            <li><a href="#" className="text-orange-600 hover:underline">Приказ о включении достопримечательного места в реестр объектов культурного наследия (PDF)</a></li>
            <li><a href="#" className="text-orange-600 hover:underline">Приказ об утверждении предмета охраны достопримечательного места (PDF)</a></li>
          </ul>
          {/* Фото-полароид */}
          <div className="bg-white shadow-lg rounded p-2 inline-block">
            <img src="/photo3.jpg" alt="Вид на Владивосток" className="w-80 h-40 object-cover rounded" />
            <div className="text-xs text-center mt-1">Владивосток, 2025</div>
          </div>
        </div>
      </section>

      {/* Обратная связь */}
      <section className="container mx-auto px-4 py-12 flex flex-col md:flex-row gap-8 items-start">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Обратная связь</h2>
          <p className="mb-4 text-gray-800">Авторский коллектив, участвовавший в создании данной документации, открыт к диалогу и готов принять к рассмотрению поступившие предложения и мнения о потенциальных изменениях документации в будущем.</p>
          <button className="bg-orange-500 text-white px-6 py-2 rounded font-bold mt-4">Написать на почту</button>
        </div>
        <div className="md:w-1/2 flex flex-col items-center">
          {/* Фото-полароид */}
          <div className="bg-white shadow-lg rounded p-2 mb-2">
            <img src="/photo4.jpg" alt="Обратная связь" className="w-40 h-40 object-cover rounded" />
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-[#2d3a4a] text-white py-6 mt-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
          <img src="/logo.png" alt="Герб" className="h-10 mb-4 md:mb-0" />
          <nav className="flex gap-8 text-xs uppercase font-semibold mb-4 md:mb-0">
            <a href="#" className="hover:underline">Исторические сведения</a>
            <a href="#" className="hover:underline">Предмет охраны</a>
            <a href="#" className="hover:underline">Правила использования</a>
            <a href="#" className="hover:underline">Авторский коллектив</a>
          </nav>
          <div className="text-xs">© 2000-2024, Все права защищены</div>
        </div>
      </footer>
    </div>
  );
} 