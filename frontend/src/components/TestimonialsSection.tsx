import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Sam",
    title: "CEO",
    text: "Lorem ipsum dolor sit amet consectetur. Sed in pellentesque vel enim in venenatis eleifend nisl. Tortor mi proin urna vel placerat pellentesque praesent vehicula tristique. Vulputate odio id id semper nullam vel id lacus ac. Duis congue mi amet elementum erat et integer tristique.",
    image: "/images/test1.png",
  },
  {
    id: 2,
    name: "Sam",
    title: "CEO",
    text: "Lorem ipsum dolor sit amet consectetur. Sed in pellentesque vel enim in venenatis eleifend nisl. Tortor mi proin urna vel placerat pellentesque praesent vehicula tristique. Vulputate odio id id semper nullam vel id lacus ac. Duis congue mi amet elementum erat et integer tristique.",
    image: "/images/test2.png",
  },
  {
    id: 3,
    name: "Sam",
    title: "CEO",
    text: "Lorem ipsum dolor sit amet consectetur. Sed in pellentesque vel enim in venenatis eleifend nisl. Tortor mi proin urna vel placerat pellentesque praesent vehicula tristique. Vulputate odio id id semper nullam vel id lacus ac. Duis congue mi amet elementum erat et integer tristique.",
    image: "/images/test3.png",
  },
  {
    id: 4,
    name: "Sam",
    title: "CEO",
    text: "Lorem ipsum dolor sit amet consectetur. Sed in pellentesque vel enim in venenatis eleifend nisl. Tortor mi proin urna vel placerat pellentesque praesent vehicula tristique. Vulputate odio id id semper nullam vel id lacus ac. Duis congue mi amet elementum erat et integer tristique.",
    image: "/images/test4.png",
  },
]

const logos = [
  "/images/pepsi.png",
  "/images/nike.png",
  "/images/lg.png",
  "/images/chicken.png",
  "/images/oz.png",
  "/images/burger.png",
]

export default function TestimonialsSection() {
  return (
    <section className="px-4 py-14 bg-white text-center">
      <h2 className="font-medium mb-20 text-[40px] text-[#003056]" style={{ fontFamily: "Poppins, sans-serif" }}>
        Testimonials
      </h2>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto text-[#00000080]"
        style={{ fontFamily: "Poppins"}}
      >
        {testimonials.map((t) => (
          <div key={t.id} className="bg-white p-6 border rounded-lg shadow-sm relative overflow-visible">
            <img
              src={t.image}
              alt={t.name}
              className="absolute rounded-full w-[150px] h-[152px] object-cover ml-15 mb-10 " style={{ top: -50, left: -39}}
            />
            <div className="flex flex-col items-start ml-[100px]">
              <h3 className="text-[24px] text-[#000000] font-md ml-15" style={{ fontFamily: "Poppins, sans-serif" }}>
                {t.name}
              </h3>
              <p
                className="text-[18px] text-[#00000080] uppercase tracking-wide ml-15"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {t.title}
              </p>
            </div>
            <p
              className="text-[16px] text-[#00000080] leading-relaxed text-left mt-10"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              {t.text}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <h3 className="text-[40px] font-medium mb-8 text-[#003056]" style={{ fontFamily: "Poppins, sans-serif" }}>
          Trusted by
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-8 max-w-6xl mx-auto">
          {logos.map((logo, idx) => (
            <div key={idx} className="relative w-[120px] h-[80px] flex items-center justify-center">
              <Image
                src={logo || "/placeholder.svg"}
                alt={`Logo ${idx + 1}`}
                width={120}
                height={80}
                className="object-contain max-w-full max-h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
