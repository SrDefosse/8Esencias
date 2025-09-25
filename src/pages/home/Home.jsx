import Hero from '../../components/home/Hero'
import Welcome from '../../components/home/Welcome'
import RevealingText from '../../components/home/RevealingText'
import MezcalCards from '../../components/home/MezcalCards'

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Ritual Story Section */}
      <RevealingText />

      {/* Mezcal Cards Section */}
      <MezcalCards />

      {/* Welcome Section */}
      <Welcome />

      
    </div>
  )
}

export default Home
