import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import BgOverlay from '../components/BgOverlay';

function ProtectedObjects() {
  return (
    <>
      <main className='relative pb-16 md:pb-6 lg:pb-28 z-10 px-5 2xl:text-2xl '>
        <BgOverlay bgClass="bg-[url('/bgs/bg-protected-mobile.png')] md:bg-[url('/bgs/bg-protected-tablet.png')] lg:bg-[url('/bgs/bg-protected.png')] 2xl:bg-[position:center_-150px]" />
        <img
          src='/bgs/bg-main.png'
          alt='фоновое изображение'
          className='absolute -z-20 top-0 left-0 w-full h-full object-cover'
        />
        <div className='md:max-w-[1440px] mx-auto'>
          <Breadcrumbs />
          <section className='flex flex-col md:grid md:grid-cols-[167px_1fr] 2xl:grid-cols-[370px_1fr] '>
            <div className='hidden md:block'></div>
            {/* Заголовок и подзаголовок */}
            <div className='relative z-10 grid pt-8 md:pr-44 md:pl-5 md:pt-10 xl:pt-12 xl:pr-0 xl:pl-[100px] md:border-l-2 md:border-white/40 '>
              <h1 className='text-white text-3xl/8 md:text-3xl/[1.1] xl:text-[80px] font-bold font-bebas tracking-[0.04em]'>
                Достопримечательное место "Исторический центр города
                Владивостока"
              </h1>
              <div className='justify-self-end pt-8 md:hidden'>
                <img src='/images/photo-12.png' alt='photo' className='w-32' />
              </div>
            </div>
          </section>
          <section className='flex flex-col md:grid md:grid-cols-[167px_1fr] 2xl:grid-cols-[370px_1fr] '>
            <div className='hidden justify-self-end pt-8 md:pt-32 md:block'>
              <img
                src='/images/photo-12.png'
                alt='photo'
                className='w-32 lg:w-[360px]'
              />
            </div>
            <div className='relative z-10 grid pt-8 md:pr-44 md:pl-5 md:pt-32 xl:pr-0 xl:pl-[100px] md:border-l-2 md:border-white/40 '>
              <h1 className='text-3xl/8 md:text-3xl/[1.1] xl:text-[80px] font-bold font-bebas tracking-[0.04em]'>
                Предмет охраны Достопримечательного места
              </h1>
            </div>
          </section>
          {/* Карта */}
          <div className='relative'>
            <img
              src='/maps/map-objects.png'
              alt='карта'
              className='relative top-0 left-1/2 right-1/2 -translate-x-1/2 w-screen max-w-none'
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default ProtectedObjects;
