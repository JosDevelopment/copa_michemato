// src/App.tsx
import { useEffect, useState } from 'react'
import './App.css'
import HomeHero from './components/home/HomeHero'
import HomeServices from './components/home/HomeServices'
import HomePricing from './components/home/HomePricing'
import HomeFaq from './components/home/HomeFAQ'
import { getHomeContent } from './lib/content/home'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { FALLBACK_FOOTER_CONTENT, FALLBACK_HEADER_CONTENT } from './constants/content/GlobalConstants'
import HomeContact from './components/home/HomeContact'
import { useLanguage } from './lib/i18n'
import HomeGallery from './components/home/HomeGallery'

type HomeContent = Awaited<ReturnType<typeof getHomeContent>>

function App() {
  const lang = useLanguage()
  const [content, setContent] = useState<HomeContent | null>(null)

  useEffect(() => {
    let cancelled = false
    getHomeContent()
      .then((c) => {
        if (!cancelled) setContent(c)
      })
      .catch(console.error)
    return () => {
      cancelled = true
    }
  }, [lang])

  if (!content) {
    return (
      <div className="text-center py-10">
        {lang === 'es' ? 'Cargando…' : 'Loading…'}
      </div>
    )
  }

  return (
    <>
      <Header content={FALLBACK_HEADER_CONTENT} />

      <div className="relative overflow-hidden">
        <HomeHero content={content.homeHeroContent} />
      </div>

      <HomeServices content={content.homeServicesContent} />
      <HomeGallery content={content.homeGallaryContent} />

      <div
        className="relative overflow-hidden bg-[url('/img/photos5.png')] bg-cover bg-center bg-fixed"
      >
        <div className="absolute inset-0 bg-primary-950/80 pointer-events-none" aria-hidden="true" />
        <div className="relative">
          <HomePricing content={content.homePricingContent} />
        </div>
      </div>

      <HomeFaq content={content.homeFAQContent} />
      <HomeContact content={content.homeContactContent} />
      <Footer content={FALLBACK_FOOTER_CONTENT} />
    </>
  )
}

export default App
