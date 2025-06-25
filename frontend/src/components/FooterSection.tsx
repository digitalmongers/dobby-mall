
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
          objectFit="cover"
          className="z-0"
        />

        {/* Center Text & Button */}
        <div className="absolute inset-0 z-20 flex items-center justify-center ">
          <div className="bg-transparent p-6  text-center max-w-md">
            <h2 className="text-xl font-semibold mb-2">Upcoming Events</h2>
            <p className="text-sm text-gray-700 mb-4">
              Lorem ipsum dolor sit amet consectetur. Sed in pellentesque vel enim in venenatis eleifend nisl. Tortor mi proin
            </p>
            <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm">
              Partner with us
            </button>
          </div>
        </div>

        {/* Right Overlay Book Image */}
        <div className="absolute w-[340px]  h-[400px] bottom-0 left-295 z-10">
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

      {/* 👣 Footer Below — Reuse previous footer or insert yours here */}
      {/* You can reuse the footer code from previous responses here below this section */}
    </div>
  );
}

