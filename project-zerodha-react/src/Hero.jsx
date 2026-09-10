import React from 'react'
import heroImage from './assets/landing.svg'

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Top trading platform dashboard illustration */}
        <div className="hero-image-wrapper">
          <img
            src={heroImage}
            alt="Zerodha Kite trading platform illustration"
            className="hero-image"
          />
        </div>

        {/* Main heading */}
        <h1 className="hero-heading">Invest in everything</h1>

        {/* Description text */}
        <p className="hero-description">
          Online platform to invest in stocks, IPOs, derivatives, mutual funds, ETFs, bonds, and more.
        </p>

        {/* Call to action button */}
        <button className="hero-button" type="button">
          Sign up for free
        </button>
      </div>
    </section>
  )
}

export default Hero
