import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";

const outerPhotos = Array(6).fill({}); // внешний круг — 6 фото
const innerPhotos = Array(7).fill({}); // внутренний круг — 7 фото
const outerRadius = 170; // px, радиус внешнего круга
const innerRadius = 100; // px, радиус внутреннего круга

function Authors() {
  return (
    <>
      <main className="relative pb-16 md:pb-6  z-10 px-5 2xl:text-2xl bg-[url('/images/bg-main.jpg')] bg-cover bg-center">
        <div className="md:max-w-[1440px] mx-auto">
          <Breadcrumbs />
          <section className="flex flex-col md:grid md:grid-cols-[167px_1fr] 2xl:grid-cols-[370px_1fr] ">
            <div className="hidden md:block"></div>
            {/* Заголовок и подзаголовок */}
            <div className="relative z-10 grid pt-8 md:pr-44 md:pl-5 md:pt-10 xl:pt-12 xl:pr-0 xl:pl-[100px] md:border-l-2 md:border-white/40 ">
              <h1 className="text-white text-3xl/8 md:text-3xl/[1.1] xl:text-[80px] font-bold font-bebas tracking-[0.04em]">
                Достопримечательное место "Исторический центр города
                Владивостока"
              </h1>
              <div className="justify-self-end pt-8 md:hidden">
                <img src="/images/photo-33.png" alt="photo" className="w-32" />
              </div>
              {/* Круги с фото */}
              <div className="relative w-[335px] h-[335px] mx-auto mt-12">
                {/* Внешний круг */}
                {outerPhotos.map((_, idx) => {
                  const angle = (360 / outerPhotos.length) * idx - 180;
                  const rad = (angle * Math.PI) / 180;
                  const x = 210 + outerRadius * Math.cos(rad);
                  const y = 210 + outerRadius * Math.sin(rad);
                  return (
                    <img
                      key={"outer-" + idx}
                      src="/images/authors.png"
                      alt="photo"
                      className="absolute w-16 h-16 rounded-full"
                      style={{
                        left: `${x}px`,
                        top: `${y}px`,
                        transform: "translate(-50%, -50%)",
                      }}
                    />
                  );
                })}
                {/* Внутренний круг */}
                {innerPhotos.map((_, idx) => {
                  const angle = (360 / innerPhotos.length) * idx - 90;
                  const rad = (angle * Math.PI) / 180;
                  const x = 210 + innerRadius * Math.cos(rad);
                  const y = 210 + innerRadius * Math.sin(rad);
                  return (
                    <img
                      key={"inner-" + idx}
                      src="/images/authors.png"
                      alt="photo"
                      className="absolute w-12 h-12 rounded-full"
                      style={{
                        left: `${x}px`,
                        top: `${y}px`,
                        transform: "translate(-50%, -50%)",
                      }}
                    />
                  );
                })}

              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default Authors;
