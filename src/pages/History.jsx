import Breadcrumbs from "../components/Breadcrumbs";
import { useState } from "react";
import { sectionOne } from "../utils/sections.js";
import { sectionTwo } from "../utils/sections.js";

function History() {
  const [open, setOpen] = useState(false);

  console.log("sectionOne ", sectionOne);

  return (
    <>
      <main className="bg-blueGray relative md:max-w-[1440px] mx-auto z-10 px-5 2xl:text-2xl">
        <Breadcrumbs />
        <section className="flex flex-col pt-5 md:grid md:grid-cols-[167px_1fr] 2xl:grid-cols-[370px_1fr] ">
          <div className="hidden md:block"></div>
          {/* Заголовок и подзаголовок */}
          <div className="relative z-10 grid md:pr-44 md:border-l-2 md:border-white/40 md:pl-5 md:pt-10 2xl:pt-[100px] 2xl:pl-[100px]">
            <h1 className="text-white text-3xl/8 md:text-3xl/[1.1] xl:text-[80px] font-bold font-bebas tracking-[0.04em]">
              Достопримечательное место "Исторический центр города Владивостока"
            </h1>
            <div className="justify-self-end pt-5 md:hidden">
              <img src="/images/photo-2.png" alt="photo" className="w-32" />
            </div>
          </div>
        </section>

        <div className="relative pt-6 md:pt-0 md:grid md:grid-cols-[167px_1fr] 2xl:grid-cols-[370px_1fr] ">
          <div className="hidden md:block md:pt-40">
            <img
              src="/images/photo-1.png"
              alt="photo"
              className="w-full h-auto object-cover md:w-[130px] 2xl:w-[290px]"
            />
          </div>
          <h3 className="h3 pt-28 !text-black md:hidden">
            Историческая справка по освоению территории
          </h3>
          <div className="text-xs md:pt-44 md:pr-32 md:border-l-2 md:border-white/40 md:pl-5 2xl:pl-[100px]">
            <h3 className="h3 pt-28 !text-black hidden md:block xl:leading-[1] ">
              Историческая справка по освоению территории
            </h3>
            <nav className="max-w-md mx-auto pt-4">
              <button
                className="flex items-center w-full text-left font-semibold text-sm"
                onClick={() => setOpen(!open)}
              >
                Содержание
                <svg
                  className={`ml-2 transition-transform ${
                    open ? "rotate-180" : ""
                  }`}
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M5 8l5 5 5-5"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </button>
              {open && (
                <ul className="mt-4 space-y-2">
                  <li className="">
                    <a
                      href="#intro"
                      className="block font-semibold hover:text-orange-500"
                    >
                      Историческая справка по освоению территории
                    </a>
                  </li>
                  {sectionOne.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="block hover:text-orange-500"
                      >
                        {section.title}
                      </a>
                    </li>
                  ))}
                  <li className="">
                    <a
                      href="#intro"
                      className="block font-semibold hover:text-orange-500"
                    >
                      Историко-градостроительная справка
                    </a>
                  </li>
                  {sectionTwo.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="block hover:text-orange-500"
                      >
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </nav>
          </div>
        </div>
      </main>
    </>
  );
}

export default History;
