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
  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-20 lg:py-24">
      <div className="absolute left-0 top-0 h-full w-full rounded-tr-[100px] bg-[#FFF7F4] sm:w-[85%] sm:rounded-tr-[160px] lg:w-[75%] lg:rounded-tr-[220px]"></div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mb-10 flex flex-col gap-6 lg:mb-16 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h2 className="text-3xl font-bold text-[#3F2B46] sm:text-4xl lg:text-5xl">
              Our Recent Work
            </h2>

            <p className="mt-2 text-2xl text-[#3F2B46] sm:text-3xl lg:text-4xl">
              By Our{" "}
              <span className="underline decoration-yellow-400">
                Experts
              </span>
            </p>
          </div>

          <p className="max-w-xl text-gray-500 leading-7 lg:max-w-md">
            Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((work, index) => (
            <div
              key={index}
              className="rounded-xl bg-white p-4 shadow-lg"
            >
              <img
                src={work.image}
                alt={work.title}
                className="h-48 w-full rounded-lg object-cover sm:h-52"
              />

              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-lg font-bold text-[#3F2B46] lg:text-xl">
                  {work.title}
                </h3>

                <button className="self-start rounded-full border border-gray-400 px-4 py-2 text-sm transition hover:bg-[#3F2B46] hover:text-white sm:py-1">
                  View Work
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RecentWork;
