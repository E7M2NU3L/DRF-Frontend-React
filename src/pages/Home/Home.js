import React from 'react'
import Hero from '../../components/HomeComponents/Hero'
import CardSection from '../../components/HomeComponents/CardSection'

const Home = () => {
  return (
    <div style={{
      background: "#fefedf"
    }}>
        <Hero />
        <CardSection />
    </div>
  )
}

export default Home