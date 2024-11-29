import React from 'react'
import iphoneLeft from '../../public/images/iPhone 12 Pro left.svg'
import iphone from '../../public/images/iPhone 12 Pro.svg'
import iphoneright from '../../public/images/iPhone 12 Pro right.svg'

const CarouselSection = () => {
  return (
    <section aria-label="How Does It Work" className="carousel-section">
    <div className="container space-3">
      <h2 className="h1">How Does It Work?</h2>

      <div className="carousel">
        <div className="carousel-item">
             <img src={iphoneLeft} alt="iPhone 12 Pro left view" />
        </div>
        <div className="carousel-item">
             <img src={iphone} alt="iPhone 12 Pro front view" />
        </div>
        <div className="carousel-item">
             <img src={iphoneright} alt="iPhone 12 Pro right view" />
        </div>
      </div>
      
      <div className="text">
          <h3 className="h4">Latest transaction history</h3>
          <p>Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in consectetur condimentum.</p>
      </div>
    </div>
   </section>
  )
}

export default CarouselSection