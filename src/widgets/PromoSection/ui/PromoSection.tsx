export const PromoSection = () => {
  return (
    <section className="relative w-full h-[700px] overflow-hidden">
      <div className="absolute inset-0 -m-2 bg-[linear-gradient(rgba(5,0,5,0.75),rgba(5,0,5,0.75)),url(../../shared/assets/images/promo-background.png)] bg-cover bg-center bg-no-repeat blur-xs opacity-[0.92]"></div>
      <div className="relative container mx-auto h-full flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-5xl font-extrabold font-chibola text-white mb-6">
          Иммерсивные экскурсии
        </h1>
        <p className="text-lg text-white mb-8">
          Погрузитесь в атмосферу вашего города с уникальными турами.
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="tel"
            placeholder="Ваш телефон"
            className="px-4 py-3 rounded-md border border-[#D9D9D9] focus:outline-none focus:ring-2 focus:ring-[#E3C37A]"
          />
          <button className="px-6 py-3 bg-[#A4834E] text-white rounded-md hover:bg-[#A4834E]/90 transition-colors duration-300">
            Заказать экскурсию
          </button>
        </div>
      </div>
    </section>
  );
};
