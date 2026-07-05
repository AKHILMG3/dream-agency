function AboutUs() {
  return (
    <section id="about" className="overflow-hidden bg-white py-14 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-8 md:grid-cols-2 lg:gap-20">
        <div className="relative mx-auto h-[320px] w-full max-w-[520px] sm:h-[460px] lg:h-[520px]">
          <div className="absolute inset-8 rounded-full border border-dashed border-black"></div>
          <div className="absolute left-0 top-0 h-[230px] w-[95px] rounded-full bg-[#FDBB18] sm:h-[320px] sm:w-[130px] lg:h-[360px] lg:w-[150px]"></div>
          <div className="absolute bottom-10 right-5 h-[115px] w-[180px] rounded-[50%] bg-[#FDBB18] sm:bottom-14 sm:right-8 sm:h-[150px] sm:w-[230px] lg:bottom-16 lg:h-[170px] lg:w-[260px]"></div>

          <img
            src="https://content-management-files.canva.com/a2bcae42-8352-4810-ac1f-be848e610548/photo1522071820081009f0129c71c.jpeg"
            alt="team"
            className="absolute left-1/2 top-1/2 h-[230px] w-[230px] -translate-x-1/2 -translate-y-1/2 rounded-[48%] object-cover sm:h-[330px] sm:w-[330px] lg:h-[360px] lg:w-[360px]"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">
            About Us
          </h2>
          <h3 className="mt-2 text-2xl text-[#3F2B46] sm:text-4xl">
            Fake or <span className="underline decoration-yellow-400">Real</span>
          </h3>

          <p className="mt-6 max-w-lg text-gray-500 leading-7 sm:mt-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
            illum culpa ab enim perferendis rerum aliquid, voluptate porro
            facilis quod dignissimos non eveniet! Quaerat nobis, officiis veniam
            quisquam consectetur voluptas.
          </p>

          <p className="mt-6 max-w-lg text-gray-500 leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum harum
            accusamus sequi at optio accusantium consectetur voluptatum
            voluptatem voluptate est,perferendis soluta tempore saepe error
            officiis aspernatur minima assumenda similique.
          </p>

          <button className="mt-8 rounded-lg bg-[#3F2B46] px-8 py-4 font-bold text-white sm:mt-10 sm:px-10">
            EXPLORE MORE
          </button>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
