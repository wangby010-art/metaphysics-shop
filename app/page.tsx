import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CategoryCards } from "@/components/category-cards"
import { FeaturedProducts } from "@/components/featured-products"
import { PhilosophySection } from "@/components/philosophy-section"
import { Footer } from "@/components/footer"
import { ScrollIndicator } from "@/components/scroll-indicator"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <CategoryCards />
        <FeaturedProducts />
        <PhilosophySection />
      </main>
      <Footer />
      <ScrollIndicator />
    </div>
  )
}
