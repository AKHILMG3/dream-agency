function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-transparent">
      <div className="relative z-10 mx-auto grid min-h-[620px] max-w-7xl grid-cols-1 items-center gap-8 px-5 py-12 sm:px-8 md:grid-cols-2 md:py-0 lg:min-h-[700px]">
        <div>
          <h1 className="text-4xl font-semibold leading-tight text-[#3F2B46] sm:text-5xl lg:text-[72px] lg:leading-[80px]">
            <span className="font-bold">We Help You</span> <br />
            <span className="font-light">to grow your </span><br />
            <span className="font-light underline decoration-yellow-400">Business</span>
          </h1>

          <p className="mt-6 max-w-md text-gray-500 leading-7 sm:mt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ea amet nam nemo, voluptas et quae porro officia libero.
            Nisi corrupti maiores similique assumenda atque nobis eligendi quia recusandae dicta!
          </p>

          <button className="mt-8 rounded-lg bg-[#3F2B46] px-8 py-4 font-semibold text-white sm:mt-10 sm:px-10">
            GET STARTED
          </button>
        </div>

        <div className="relative flex min-h-[320px] items-center justify-center md:h-full md:min-h-[520px]">
          <div className="absolute h-[260px] w-[260px] rounded-full border border-dashed border-black sm:h-[340px] sm:w-[340px] lg:h-[380px] lg:w-[380px]" />
          <div className="relative z-10 h-[280px] w-[180px] rounded-[50%] bg-[#FDBB18] sm:h-[340px] sm:w-[220px] lg:h-[390px] lg:w-[250px]" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
