'use client'

import Header from './Header'; // Importando o Header da mesma pasta
import FormSectionMobile from './FormSectionMobile';
import Servicos from './servicosmobilee';
import QuemSomos from './quemsomosmobile';
import CarrosselOperadoras from './marcas';
import MapSection from './mapsmobile';
import Footer from './footer';


export default function Page() {
  return (
    <>
      {/* Início da Página */}
      <Header />
      <FormSectionMobile />
      <Servicos />
      <QuemSomos />
      <CarrosselOperadoras />
      <MapSection />
      <Footer />
      {/* Outros componentes que você precisar */}
    </>
  );
}
