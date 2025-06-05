import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";

function DevelopmentRegulations() {
  return (
    <main className="relative pb-16 md:pb-6 lg:pb-28 z-10 px-5 2xl:text-2xl bg-[url('/images/bg-main.jpg')] bg-cover bg-center">
      <div className="md:max-w-[1440px] mx-auto">
        <Breadcrumbs />
        <section className="flex flex-col md:grid md:grid-cols-[167px_1fr] 2xl:grid-cols-[370px_1fr] ">
          <div className="hidden md:block"></div>
          {/* Заголовок и подзаголовок */}
          <div className="relative z-10 grid pt-8 md:pr-44 md:pl-5 md:pt-10 xl:pt-12 xl:pr-0 xl:pl-[100px] md:border-l-2 md:border-white/40 ">
            <h1 className="text-white text-3xl/8 md:text-3xl/[1.1] xl:text-[80px] font-bold font-bebas tracking-[0.04em]">
              Достопримечательное место "Исторический центр города Владивостока"
            </h1>
            <div className="justify-self-end md:hidden">
              <img src="/images/photo-34.png" alt="photo" className="w-32" />
            </div>
          </div>
        </section>
        <section className="flex flex-col md:grid md:grid-cols-[167px_1fr] 2xl:grid-cols-[370px_1fr] ">
          <div className="hidden justify-self-end pt-8 md:block">
            <img
              src="/images/photo-34.png"
              alt="photo"
              className="w-32 lg:w-[360px]"
            />
          </div>
          <div className="relative z-10 grid pt-8 md:pr-44 md:pl-5 md:pt-10 xl:pt-12 xl:pr-0 xl:pl-[100px] md:border-l-2 md:border-white/40 ">
            <h1 className="text-3xl/8 md:text-3xl/[1.1] xl:text-[80px] font-bold font-bebas tracking-[0.04em]">
              проект режимов использования земель и требования к
              градостроительному регламенту
            </h1>
          </div>
        </section>
      </div>
    </main>
  );
}

export default DevelopmentRegulations;
