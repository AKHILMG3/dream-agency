function Footer() {
  return (
    <footer className="rounded-tr-[70px] bg-black px-5 py-12 sm:rounded-tr-[100px] sm:px-10 sm:py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="text-white">Dreamy Agency</h2>

          <p className="max-w-md text-gray-300 leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, sed
            tempore! Blanditiis et harum ex mollitia assumenda soluta natus unde
            rem porro consectetur facere alias eaque ratione at, sint possimus?
          </p>

          <h4 className="mb-3 mt-10 font-semibold text-white">
            GET IN TOUCH
          </h4>

          <div className="flex w-full max-w-md flex-col gap-3 sm:flex-row sm:gap-0">
            <input
              type="email"
              placeholder="Your Email"
              className="min-w-0 flex-1 border border-gray-500 bg-black px-4 py-3 text-white outline-none placeholder:text-gray-400"
            />
            <button className="bg-white px-8 py-3 font-semibold text-black sm:py-0">
              SEND
            </button>
          </div>
        </div>

        <div className="mt-4 flex justify-center md:mt-10">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.235554409847!2d76.31238797480671!3d9.997391390107845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d1f98f5928b%3A0x3472b02674ea7829!2sQ1%20Mall%20by%20Nippon%20Q1!5e0!3m2!1sen!2sin!4v1783166587948!5m2!1sen!2sin"
            className="h-[220px] w-full max-w-[380px]"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
