import styles from "./home.module.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { LuPhone } from "react-icons/lu";
import { CiMenuFries } from "react-icons/ci";
import { MdOutlineClose } from "react-icons/md";
import { useState } from "react";
export default function App() {
  const [showMenu, setShowMenu] = useState(false);
  const isDesktop = window.innerWidth > 1100; // Adjust the width as needed

  return (
    <div>
      <header className={styles.header}>
        <a href="/" className={styles.logo}>
          <img src="/assets/greenLogo.svg" alt="logo just home" />
        </a>

        {/* Render mobile menu if on mobile and showMenu is true */}
        {showMenu && (
          <nav className={styles.nav}>
            <p
              className={styles.mobileClose}
              onClick={() => setShowMenu(false)}
            >
              <MdOutlineClose />
            </p>
            <a href="/" className={styles.navLink}>
              Home
            </a>
            <a href="/listings" className={styles.navLink}>
              Listings
            </a>
            <a href="/members" className={styles.navLink}>
              Members
            </a>
            <a href="/blog" className={styles.navLink}>
              Blog
            </a>
            <a href="/pages" className={styles.navLink}>
              Pages
            </a>
            <a href="/contact" className={styles.navLink}>
              Contact
            </a>
          </nav>
        )}

        {isDesktop && (
          <nav className={styles.nav}>
            <p
              className={styles.mobileClose}
              onClick={() => setShowMenu(false)}
            >
              <MdOutlineClose />
            </p>
            <a href="/" className={styles.navLink}>
              Home
            </a>
            <a href="/listings" className={styles.navLink}>
              Listings
            </a>
            <a href="/members" className={styles.navLink}>
              Members
            </a>
            <a href="/blog" className={styles.navLink}>
              Blog
            </a>
            <a href="/pages" className={styles.navLink}>
              Pages
            </a>
            <a href="/contact" className={styles.navLink}>
              Contact
            </a>
          </nav>
        )}

        <div className={styles.contactInfo}>
          <a href="tel:+65655555666" className={styles.phone}>
            {" "}
            <LuPhone /> +65 655 55666
          </a>
          <button className={styles.addPropertyBtn}>Add Property</button>
          <button
            className={styles.mobileMenuButton}
            onClick={() => setShowMenu(true)}
          >
            <CiMenuFries />
          </button>
        </div>
      </header>

      <main>
        <section className={styles.hero}>
          <span className={styles.subtitle}>LET US GUIDE YOUR HOME</span>
          <p className={styles.smallText}>
            We've more than 745,000 apartments, place & plot.
          </p>
          <h1 className={styles.title}>Find Your Perfect Home</h1>

          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="Enter Name, Keywords..."
              className={styles.searchBar}
            />
            <button className={styles.searchButton}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </div>
          <div className={styles.subtitleText}>
            <p>Explore all things property</p>
          </div>
          <div className={styles.filters}>
            <a href="/all" className={styles.filterLink}>
              All Properties
            </a>
            <a href="/sale" className={styles.filterLink}>
              For Sale
            </a>
            <a href="/rent" className={styles.filterLink}>
              For Rent
            </a>
          </div>
        </section>

        <section className={styles.featuresSection}>
          <div className={styles.features}>
            <div className={styles.featureImages}>
              <img
                src="/assets/centerfamily.png"
                alt="Happy family"
                className={styles.familyImage}
              />
              <img
                src="/assets/centerhome.png"
                alt="Modern house"
                className={styles.houseImage}
              />
              <img
                src="/assets/centerIconImage.png"
                alt="Modern house"
                className={styles.iconImage}
              />
            </div>

            <div className={styles.featureContent}>
              <h2>
                Why You Should Work <br /> With Us
              </h2>
              <p>
                Pellentesque egestas elementum egestas faucibus sem. Velit nunc
                egestas ut metus. Leu diam
              </p>

              <div className={styles.featureList}>
                <div className={styles.featureItem}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>100% Secure</span>
                </div>
                <div className={styles.featureItem}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Wide Range of Properties</span>
                </div>
                <div className={styles.featureItem}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Buy or Rent Homes</span>
                </div>
                <div className={styles.featureItem}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Trusted by Thousands</span>
                </div>
              </div>

              <button className={styles.ctaButton}>
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </section>

        <section className={styles.cta}>
          <div className={`${(styles.ctaCard, styles.ctaCardOne)}`}>
            <div className={styles.ctaDiv}>
              <h3>Looking for the new home?</h3>
              <p>
                10 new offers every day. 350 offers on site, trusted by a
                community of thousands of users.
              </p>
              <button className={styles.ctaButton}>
                Get Started
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
            <img
              src="/assets/homeIcon.svg"
              alt="House icon"
              width={100}
              height={100}
            />
          </div>

          <div className={`${(styles.ctaCard, styles.ctaCardTwo)}`}>
            <div className={styles.ctaDiv}>
              <h3>Want to sell your home?</h3>
              <p>
                10 new offers every day. 350 offers on site, trusted by a
                community of thousands of users.
              </p>
              <button className={styles.ctaButton}>
                Get Started
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
            <img
              src="/assets/hutIcon.svg"
              alt="House icon"
              width={100}
              height={100}
            />
          </div>
        </section>

        <section className={styles.newsletter}>
          <img src="/assets/telegramIcon.svg" alt="telegram icon" />
          <h2>Stay Up to Date</h2>
          <p>Subscribe to our newsletter to receive our weekly feed</p>
          <div className={styles.emailContainer}>
            <input
              type="email"
              placeholder="Your email"
              className={styles.emailInput}
            />
            <button className={styles.emailButton}>
              Send
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>Copyright © 2024. JustHome</p>
        </div>
        <img src="/assets/whiteLogo.svg" alt="logo just home"/>
        <div className={styles.socialLinks}>
          <a href="#" className={styles.socialLink}>
            <FaFacebookF />
          </a>
          <a href="#" className={styles.socialLink}>
            <FaTwitter />
          </a>
          <a href="#" className={styles.socialLink}>
            <FaInstagram />
          </a>
          <a href="#" className={styles.socialLink}>
            <FaLinkedinIn />
          </a>
        </div>
      </footer>
    </div>
  );
}
