import { useState } from "react";

const services = [
  { title: "Website Design", icon: "🌐", color: "bg-red-100" },
  { title: "Web Development", icon: "💻", color: "bg-yellow-100" },
  { title: "Mobile App Development", icon: "📱", color: "bg-blue-100" },
  { title: "Marketing", icon: "🚀", color: "bg-pink-100" },
  { title: "UI/UX Design", icon: "🎨", color: "bg-red-100" },
  { title: "SEO Optimization", icon: "🔍", color: "bg-yellow-100" },
  { title: "Brand Strategy", icon: "♟️", color: "bg-blue-100" },
  { title: "Logo & Brand Identity.", icon: "📝", color: "bg-pink-100" },
];

function ServiceSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardWidth = 314; // 290px card + 24px gap
  const maxIndex = services.length - 4;

  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute left-0 top-0 w-[75%] h-full bg-[#EEF7FF] rounded-tr-[220px]"></div>

      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[420px] h-[420px] border border-dashed rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">
        <h2 className="text-center text-5xl font-bold text-[#3F2B46]">
          What We Do
        </h2>

        <p className="text-center text-4xl text-[#3F2B46] mt-2">
          For Your{" "}
          <span className="underline decoration-yellow-400">Business</span>
        </p>

        <div className="overflow-hidden mt-12 px-6">
          <div
            className="flex gap-6 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * cardWidth}px)`,
            }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="min-w-[290px] bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-lg transition"
              >
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl ${service.color}`}
                >
                  {service.icon}
                </div>

                <h3 className="mt-5 font-bold text-[#3F2B46] tracking-wide">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm text-gray-500 leading-6">
                  Lorem Ipsum has been the industry's standard dummy text since
                  the 1500s.
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-3 mt-8 px-6">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:bg-white"
          >
            ←
          </button>

          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center hover:bg-white"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;