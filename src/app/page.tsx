import Hero from '@/app/components/Hero'
import FormularioLead from "@/app/components/forms"
import CarrosselOperadoras from "@/app/components/CarouselMarcas"
import QuemSomos from "@/app/components/QuemSomos"
import Footer from "@/app/components/Footer"


export default function Home() {
  return (
    <>
      <Hero />
      <FormularioLead />
      <CarrosselOperadoras />
      <QuemSomos />
      <Footer />
    </>
  )
}
