import React from 'react'

const Showcase = () => {
  return (
    <section aria-label="showcase" className="showcase">
    <div className="container space-y-3">
        <h1 className="d4">Manage All Your Money in One App</h1>
        <div className="content space-y-3">
            <p className="text-lg">We offer you a new generation of the mobile banking.
                Save, spend & manage money in your pocket.</p>
            <div className="market-btns">
                <a href="#" className="store-btn">
                    <span className="sr-only">Download on App Store</span>
                    <img className="show-light" src="/images/icons/appstore-light.svg" alt="" />
                    <img className="show-dark" src="/images/icons/appstore-dark.svg" alt="" />
                </a>
                <a href="#" className="store-btn">
                    <span className="sr-only">Get it on Google Play</span>
                    <img className="show-light" src="/images/icons/google-light.svg" alt="" />
                    <img className="show-dark" src="/images/icons/google-dark.svg" alt="" />
                </a>
            </div>

            <div className="more">
                <a href="#features" className="btn-round btn-white">
                    <i className="fa-solid fa-chevron-down"></i>
                </a>
                <span>Discover more</span>
            </div>
        </div>

        <div className="phone-img-container">
            <img src="/images/iphones.png" alt="two iphones with charts and credit card on the screen" />
        </div>
    </div>
</section>
  )
}

export default Showcase