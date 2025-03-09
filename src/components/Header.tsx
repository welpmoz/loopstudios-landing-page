import heroImgMobile from "../assets/images/mobile/image-hero.jpg";
import heroImgDesktop from "../assets/images/desktop/image-hero.jpg";
import logoImg from "../assets/images/logo.svg";
import openMenuIcon from "../assets/images/icon-hamburger.svg";
import closeMenuIcon from "../assets/images/icon-close.svg";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState<"open" | "close">("close");

  return (
    <header className="Header clr-white">
      <picture>
        <source srcSet={heroImgDesktop} media="(width >= 44.375rem)" />
        <img src={heroImgMobile} alt="" className="Header__image" />
      </picture>

      <div className="Wrapper">
        <div className="Wrapper__child">
          <div className="Header__navigation">
            <a href="#">
              <img src={logoImg} width={144} height={24} alt="" />
            </a>

            <button
              type="button"
              data-for="open"
              aria-controls="menu-overlay"
              aria-expanded={menuOpen === "open" ? true : false}
              onClick={() => setMenuOpen("open")}
            >
              <img src={openMenuIcon} width={24} height={16} alt="" />
            </button>
            <nav>
              <ul className="text-body">
                <li>
                  <a href="#">About</a>
                  <hr />
                </li>
                <li>
                  <a href="#">Careers</a>
                  <hr />
                </li>
                <li>
                  <a href="#">Events</a>
                  <hr />
                </li>
                <li>
                  <a href="#">Products</a>
                  <hr />
                </li>
                <li>
                  <a href="#">Support</a>
                  <hr />
                </li>
              </ul>
            </nav>
          </div>

          <div
            className="Header__overlay"
            id="menu-overlay"
            data-state={menuOpen}
          >
            <div className="Header__overlay-head">
              <a href="#">
                <img src={logoImg} width={144} height={24} alt="" />
              </a>

              <button
                type="button"
                data-for="close"
                aria-controls="menu-overlay"
                aria-expanded={menuOpen === "close" ? true : false}
                onClick={() => setMenuOpen("close")}
              >
                <img src={closeMenuIcon} width={24} height={16} alt="" />
              </button>
            </div>

            <nav>
              <ul className="text-overlay uppercase">
                <li>
                  <a href="#">About</a>
                  <hr />
                </li>
                <li>
                  <a href="#">Careers</a>
                  <hr />
                </li>
                <li>
                  <a href="#">Events</a>
                  <hr />
                </li>
                <li>
                  <a href="#">Products</a>
                  <hr />
                </li>
                <li>
                  <a href="#">Support</a>
                  <hr />
                </li>
              </ul>
            </nav>
          </div>

          <h1 className="text-heading-1 uppercase">
            immersive experiences that deliver
          </h1>
        </div>
      </div>
    </header>
  );
}
