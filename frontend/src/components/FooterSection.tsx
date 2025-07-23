
import Image from 'next/image';

export default function EventsAndFooter() {
  return (
    <div className="bg-white text-gray-800">

      {/* 📚 Upcoming Events with Layered Images */}
      <section className="relative w-full h-[400px]">
        {/* Full Background - Book Image */}
        <Image
          src="/images/book.png"
          alt="Background Book"
          layout="fill"
          objectFit="overlay"
          className="z-0"
        />

        {/* Center Text & Button */}
        <div className="absolute inset-0 z-20 flex items-center justify-center px-4">
          <div className="bg-transparent text-center max-w-md">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 text-[#003056]">
              Upcoming Events
            </h2>
            <p className="text-sm sm:text-base text-black mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Sed in pellentesque<br />
              vel enim in venenatis eleifend nisl. Tortor mi proin
            </p>
            <button className="px-6 py-3 text-white text-lg sm:text-xl bg-[#2C71DE] rounded-sm border-2 border-[#2C71DE] hover:bg-blue-600 w-[200px] sm:w-[245px] h-[55px] sm:h-[61px] transition-all">
              Partner with us
            </button>
          </div>
        </div>

        {/* Right Overlay Book Image */}
        <div className="absolute w-[30px] h-[400px] bottom-0 left-295 z-10">
          <Image
            src="/images/book.png"
            alt="Overlay Book"
            layout="fill"
            className=" scale-x-[-1]"
          />
        </div>

        {/* Boy Image on Top of Right Book */}
        <div className="absolute bottom-0 right-16 h-[380px] left-230  z-20">
          <Image
            src="/images/boy.png"
            alt="Boy"
           layout="fill"
            className="object-contain"
          />
        </div>
      </section>

    </div>
  );
}
