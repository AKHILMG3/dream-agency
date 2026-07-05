const services = [
  { title: "Website Design", icon: "WD", color: "bg-red-100" },
  { title: "Web Development", icon: "DEV", color: "bg-yellow-100" },
  { title: "Mobile App Development", icon: "APP", color: "bg-blue-100" },
  { title: "Marketing", icon: "MKT", color: "bg-pink-100" },
  { title: "UI/UX Design", icon: "UX", color: "bg-red-100" },
  { title: "SEO Optimization", icon: "SEO", color: "bg-yellow-100" },
  { title: "Brand Strategy", icon: "BR", color: "bg-blue-100" },
  { title: "Logo & Brand Identity.", icon: "ID", color: "bg-pink-100" },
];

function ServiceSection() {
  return (
    <section className="relative overflow-hidden py-14 sm:py-20 lg:py-24">
      <div className="absolute inset-0 rounded-tr-[100px] bg-[#EEF7FF] sm:rounded-tr-[160px] lg:rounded-tr-[220px]"></div>
      <div className="absolute right-[-140px] top-1/2 h-[260px] w-[260px] -translate-y-1/2 rounded-full border border-dashed sm:right-[-60px] sm:h-[360px] sm:w-[360px] lg:right-0 lg:h-[420px] lg:w-[420px]"></div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-[#3F2B46] sm:text-4xl lg:text-5xl">
          What We Do
        </h2>

        <p className="mt-2 text-center text-2xl text-[#3F2B46] sm:text-3xl lg:text-4xl">
          For Your{" "}
          <span className="underline decoration-yellow-400">Business</span>
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-lg"
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-lg text-sm font-bold text-[#3F2B46] ${service.color}`}
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
    </section>
  );
}

export default ServiceSection;
