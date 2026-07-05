import Header from './Components/Header'
import HeroSection from './Pages/HeroSection'
import AboutUs from './Pages/AboutUs'
import ServiceSection from './Pages/ServiceSection'
import RecentWork from './Pages/RecentWork'
import TestimonialsSection from './Pages/TestimonialsSection'
import Footer from './Components/Footer'


function App() {

  return (
    <>
    <div className="relative min-h-screen flex flex-col overflow-hidden bg-white">
      <div className="pointer-events-none absolute right-0 top-0 z-0 h-[360px] w-[70vw] rounded-bl-[220px] bg-[#FFF3D5] sm:h-[460px] sm:w-[52vw] sm:rounded-bl-[300px] lg:h-[560px] lg:w-[42vw] lg:min-w-[360px] lg:rounded-bl-[360px]" />
      <Header />

      <main className="relative z-10 flex-1">
        <HeroSection />
        <ServiceSection />
        <AboutUs />
        <RecentWork />
        <TestimonialsSection />
      </main>

      <Footer />
    </div>

    </>
  )
}

export default App
