import { useState } from "react";

const works = [
  {
    title: "Landify Agency ",
    image: "/images/work1.jpg",
  },
  {
    title: "Craftique Studio",
    image: "/images/work2.jpg",
  },
  {
    title: "Startup Landing",
    image: "/images/work3.jpg",
  },
  {
    title: "Future SaaS ",
    image: "/images/work4.jpg",
  },
  {
    title: "Business Dashboard",
    image: "/images/work5.jpg",
  },
  {
    title: "BoltShift SaaS",
    image: "/images/work6.jpg",
  },
];

function RecentWork() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardWidth = 314; // 290px card + 24px gap
  const visibleCards = 3;
  const maxIndex = works.length - visibleCards;

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
    <section className="relative py-24 overflow-hidden bg-white">

      {/* Background */}
      <div className="absolute left-0 top-0 w-[75%] h-full bg-[#FFF7F4] rounded-tr-[220px]"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="flex justify-between items-start mb-16">

          <div>
            <h2 className="text-5xl font-bold text-[#3F2B46]">
              Our Recent Work
            </h2>

            <p className="text-4xl text-[#3F2B46] mt-2">
              By Our{" "}
              <span className="underline decoration-  yellow-400">
                Experts
              </span>
            </p>
          </div>

          <p className="max-w-md text-gray-500 leading-7">
            Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>

        </div>

        {/* Cards */}
        <div className="overflow-hidden">

          <div
            className="flex gap-6 transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex * cardWidth}px)`,
            }}
          >
            {works.map((work, index) => (
              <div
                key={index}
                className="min-w-[290px] bg-white rounded-xl shadow-lg p-4"
              >
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-48 object-cover rounded-lg"
                />

                <div className="flex justify-between items-center mt-4">
                  <h3 className="text-xl font-bold text-[#3F2B46]">
                    {work.title}
                  </h3>

                  <button className="border border-gray-400 rounded-full px-4 py-1 text-sm hover:bg-[#3F2B46] hover:text-white transition">
                    View Work
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-10">

          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`w-10 h-10 rounded-full border flex items-center justify-center transition ${
              currentIndex === 0
                ? "opacity-40 cursor-not-allowed"
                : "hover:bg-black hover:text-white"
            }`}
          >
            ←
          </button>

          <button
            onClick={nextSlide}
            disabled={currentIndex === maxIndex}
            className={`w-10 h-10 rounded-full border flex items-center justify-center transition ${
              currentIndex === maxIndex
                ? "opacity-40 cursor-not-allowed"
                : "hover:bg-black hover:text-white"
            }`}
          >
            →
          </button>

        </div>

      </div>
    </section>
  );
}

export default RecentWork;