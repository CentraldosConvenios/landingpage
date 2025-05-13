'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation' 
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FormSection from "@/components/FormSection"
import ServicosSection from "@/components/servicos"
import QuemSomos from "@/components/quemsomos"
import MapSection from "@/components/maps"
import CarrosselOperadoras from "@/components/CarrosselOperadoras"

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    const isMobile = /android|iphone|ipad|ipod|blackberry|windows phone|opera mini|mobile/i.test(
      navigator.userAgent.toLowerCase()
    )

    if (isMobile) {
      router.replace('/mobile')
    }
  }, [])

  return (
    <main className="flex flex-col items-center justify-between">
      {/* Outros componentes acima */}
      <Header />
      <FormSection />
      <ServicosSection />
      <QuemSomos />
      <CarrosselOperadoras />
      <MapSection />
      <Footer />
    </main>
  )
}
