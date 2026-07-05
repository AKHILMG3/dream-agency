const testimonials = [
  {
    id: 1,
    text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    author: "UI Soup",
  },
  {
    id: 2,
    text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    author: "UI Soup",
  },
];

function TestimonialsSection() {
  return (
    <section className="bg-white py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#3F2B46] sm:text-4xl lg:text-5xl">
            Our Testimonials
          </h2>

          <h3 className="mt-2 text-2xl text-[#3F2B46] sm:text-3xl lg:text-4xl">
            What Our Clients Are{" "}
            <span className="underline decoration-[#FDBB18]">saying</span>
          </h3>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-16 lg:gap-10">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="border border-gray-200 bg-white p-6 shadow-sm sm:p-10"
            >
              <h1 className="text-5xl font-bold leading-none text-[#FDBB18] sm:text-6xl">
                "
              </h1>

              <p className="mt-5 text-gray-600 leading-8 sm:mt-6">
                {item.text}
              </p>

              <div className="mt-8 flex items-center">
                <span className="mr-2 h-[2px] w-3 bg-[#FDBB18]"></span>

                <h4 className="font-semibold text-[#3F2B46]">
                  {item.author}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
