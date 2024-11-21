import React from 'react'

const FeatureSection = () => {
  return (
    <section aria-label="App features" className="features">
    <div className="container">
        <div className="iphone">
            <img src="/images/iphone-tilted.png" alt="" />
        </div>
        <div className="text space-y-1">
            <h2 className="h1">App Features</h2>
            <p className="text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.
            </p>

            <div className="features-grid">

                <div className="feature-card">
                    <div className="icon-container">
                        <img src="images/icons/credit-card.svg" alt="" />
                    </div>
                    <div className="space-y-1">
                        <h3 className="h5">Easy Payments</h3>
                        <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
                    </div>
                </div>

                <div className="feature-card">
                    <div className="icon-container">
                        <img src="images/icons/shield.svg" alt="" />
                    </div>
                    <div className="space-y-1">
                        <h3 className="h5">Data Security</h3>
                        <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
                    </div>
                </div>

                <div className="feature-card">
                    <div className="icon-container">
                        <img src="images/icons/bars-graphic.svg" alt="" />
                    </div>
                    <div className="space-y-1">
                        <h3 className="h5">Cost Statistics</h3>
                        <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
                    </div>
                </div>

                <div className="feature-card">
                    <div className="icon-container">
                        <img src="images/icons/communication.svg" alt="" />
                    </div>
                    <div className="space-y-1">
                        <h3 className="h5">Support 24/7</h3>
                        <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
                    </div>
                </div>

                <div className="feature-card">
                    <div className="icon-container">
                        <img src="images/icons/wallet.svg" alt="" />
                    </div>
                    <div className="space-y-1">
                        <h3 className="h5">Regular Cashback</h3>
                        <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
                    </div>
                </div>

                <div className="feature-card">
                    <div className="icon-container">
                        <img src="images/icons/happy.svg" alt="" />
                    </div>
                    <div className="space-y-1">
                        <h3 className="h5">Top Standards</h3>
                        <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default FeatureSection