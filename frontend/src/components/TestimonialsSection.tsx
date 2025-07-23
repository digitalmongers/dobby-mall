import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'Sam',
    title: 'CEO',
    text: 'Lorem ipsum dolor sit amet consectetur. Sed in pellentesque vel enim in venenatis eleifend nisl. Tortor mi proin urna vel placerat pellentesque praesent vehicula tristique. Vulputate odio id id semper nullam vel id lacus ac. Duis congue mi amet elementum erat et integer tristique.',
    image: '/images/test1.png',
  },
  {
    id: 2,
    name: 'Sam',
    title: 'CEO',
    text: 'Lorem ipsum dolor sit amet consectetur. Sed in pellentesque vel enim in venenatis eleifend nisl. Tortor mi proin urna vel placerat pellentesque praesent vehicula tristique. Vulputate odio id id semper nullam vel id lacus ac. Duis congue mi amet elementum erat et integer tristique.',
    image: '/images/test2.png',
  },
  {
    id: 3,
    name: 'Sam',
    title: 'CEO',
    text: 'Lorem ipsum dolor sit amet consectetur. Sed in pellentesque vel enim in venenatis eleifend nisl. Tortor mi proin urna vel placerat pellentesque praesent vehicula tristique. Vulputate odio id id semper nullam vel id lacus ac. Duis congue mi amet elementum erat et integer tristique.',
    image: '/images/test3.png',
  },
  {
    id: 4,
    name: 'Sam',
    title: 'CEO',
    text: 'Lorem ipsum dolor sit amet consectetur. Sed in pellentesque vel enim in venenatis eleifend nisl. Tortor mi proin urna vel placerat pellentesque praesent vehicula tristique. Vulputate odio id id semper nullam vel id lacus ac. Duis congue mi amet elementum erat et integer tristique.',
    image: '/images/test4.png',
  },
];

const logos = [
  '/images/pepsi.png',
  '/images/nike.png',
  '/images/lg.png',
  '/images/chicken.png',
  '/images/oz.png',
  '/images/burger.png',
];

export default function TestimonialsSection() {
  return (
    <section className="px-4 py-14 bg-white text-center">
      <h2 className="font-medium mb-10 font-[poppins] text-[40px] text-[#003056]">Testimonials</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto fomt-[poppins] text-[#00000080]">
        {testimonials.map((t) => (
          <div key={t.id} className="bg-white p-6 border rounded-lg shadow-sm">
            <Image
              src={t.image}
              alt={t.name}
              width={80}
              height={80}
              className="rounded-full mx-auto mb-4 w-[149px] h-[150px]"
            />
            <h3 className="text-[24px] text-[#000000] font-[500] font-[poppins]">{t.name}</h3>
            <p className="text-[18px] text-[rgba(0, 0, 0, 0.5)] mb-4">{t.title}</p>
            <p className="text-sm text-[#000000]">{t.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <h3 className="text-xl font-medium mb-8 text-[40px] font-[poppins] text-[#003056]">Trusted by</h3>
        <div className="flex flex-wrap justify-center items-center gap-6">
          {logos.map((logo, idx) => (
            <div key={idx} className="relative w-[150px] h-[100px]">
              <Image
                src={logo}
                alt={`Logo ${idx}`}
                layout="fill"
                objectFit="contain"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}