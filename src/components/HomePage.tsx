import { About } from './About'
import { BeforeAfter } from './BeforeAfter'
import { FinalCta, Footer, WhatsAppFloat } from './Footer'
import { Header } from './Header'
import { Hero } from './Hero'
import { Location } from './Location'
import { Process, WhyUs } from './Process'
import { Services } from './Services'
import { Testimonials } from './Testimonials'

export function HomePage() {
  return (
    <>
      <a
        href="#servicos"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-accent focus:px-4 focus:py-2 focus:text-ink"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main>
        <Hero />
        <Services />
        <BeforeAfter />
        <Process />
        <WhyUs />
        <About />
        <Testimonials />
        <Location />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
