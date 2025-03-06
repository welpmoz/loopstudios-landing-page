import interactiveMobile from "./assets/images/mobile/image-interactive.jpg";
import interactiveDesktop from "./assets/images/desktop/image-interactive.jpg";
import logoIcon from "./assets/images/logo.svg";

import facebookIcon from "./assets/images/icon-facebook.svg";
import instagramIcon from "./assets/images/icon-instagram.svg";
import pinterestIcon from "./assets/images/icon-pinterest.svg";
import twitterIcon from "./assets/images/icon-twitter.svg";

import closeIcon from "./assets/images/icon-close.svg";
import openIcon from "./assets/images/icon-hamburger.svg";

import heroImgMobile from "./assets/images/mobile/image-hero.jpg";
import heroImgDesktop from "./assets/images/desktop/image-hero.jpg";

function App() {
  return (
    <>
      <header className="Header">
        <picture>
          <source srcSet={heroImgDesktop} media="(width >= 43.75rem)" />
          <img
            src={heroImgMobile}
            className="Header__image"
            alt="A person playing a reality virtual game"
          />
        </picture>
        <div className="Header__navbar px-24">
          <img
            src={logoIcon}
            alt="Text for loopstudios"
            width={144}
            height={24}
          />

          <button data-type="open">
            <img src={openIcon} alt="" width={24} height={16} />
          </button>

          <button data-type="close">
            <img src={closeIcon} alt="" width={20} height={20} />
          </button>

          <nav className="Nav-links" data-size="medium" data-section="header">
            <ul className="text-body">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Events</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="Header__overlay-wrapper">
          <nav className="Nav-links" data-section="overlay" data-size="small">
            <ul className="text-overlay clr-white uppercase">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Events</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="px-24">
          <h1 className="Header__title text-heading-1 uppercase">
            immersive experiences that deliver
          </h1>
        </div>
      </header>

      <main>
        <section>
          <picture>
            <source srcSet={interactiveDesktop} media="(width >=  " />
            <img
              src={interactiveMobile}
              alt="A man having fun with virtual reality casco"
            />
          </picture>
          <div>
            <h2 className="text-heading-2 clr-black uppercase">
              the leader in interactive <abbr title="Virtual Reality">VR</abbr>
            </h2>
            <p className="text-body clr-gray">
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their band.
            </p>
          </div>
        </section>

        <div>
          <h2 className="text-heading-2 clr-black uppercase">our creations</h2>
          <div>images</div>
          <button className="text-button">see all</button>
        </div>
      </main>

      <footer className="text-body bg-black">
        <div>
          <img src={logoIcon} alt="" width={144} height={24} />
          <nav className="Nav-links" data-section="footer">
            <ul className="text-body">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Events</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <div>
            <button>
              <img src={facebookIcon} alt="" />
            </button>
            <button>
              <img src={twitterIcon} alt="" />
            </button>
            <button>
              <img src={pinterestIcon} alt="" />
            </button>
            <button>
              <img src={instagramIcon} alt="" />
            </button>
          </div>
          <p className="clr-white">© 2021 Loopstudios. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
