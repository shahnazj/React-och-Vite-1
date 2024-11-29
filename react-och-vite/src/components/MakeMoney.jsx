const MakeMoney = () => {
  const handleLearnMore = () => {
    alert("Learn more clicked!");
  };

  return (
    <section class="features-desktop">
      <div class="feature-container container">
        <div class="feature-content">
          <h3 class="h4">
            Make your money
            <br />
            transfer simple and clear
          </h3>
          <ul class="feature-list">
            <li>
              <img
                src="/images/icons/bx-check-circle.svg"
                class="tick-icon"
                alt="checkmark"
              />
              Banking transactions are free for you
            </li>
            <li>
              <img
                src="/images/icons/bx-check-circle.svg"
                class="tick-icon"
                alt="checkmark"
              />
              No monthly cash commission
            </li>
            <li>
              <img
                src="/images/icons/bx-check-circle.svg"
                class="tick-icon"
                alt="checkmark"
              />
              Manage payments and transactions online
            </li>
          </ul>
          <button class="learn-more">Learn more →</button>
        </div>
        <div class="feature-image">
          <img
            src="/images/top-right.svg"
            alt="Banking Dashboard Interface"
            class="interface-image"
          />
        </div>
      </div>

      <div class="feature-container">
        <div class="feature-image">
          <img
            src="/images/bottom-left.svg"
            alt="Contacts and Card Interface"
            class="interface-image"
          />
        </div>
        <div class="feature-content">
          <h3 class="h4">
            Receive payment from
            <br />
            international bank details
          </h3>
          <div class="info-cards">
            <div class="info-card">
              <img
                src="/images/icons/wallet.svg"
                class="info-icon"
                alt="Wallet Icon"
              />
              <p>
                Manage your payments online. Mollis congue egestas egestas
                fermentum fames.
              </p>
            </div>
            <div class="info-card">
              <img
                src="/images/icons/credit-card.svg"
                class="info-icon"
                alt="Credit Card Icon"
              />
              <p>
                A elementur and imperdiet enim, pretium etiam facilisi aenean
                quam mauris.
              </p>
            </div>
          </div>
          <button class="learn-more">Learn more →</button>
        </div>
      </div>
    </section>
  );
};

export default MakeMoney;
