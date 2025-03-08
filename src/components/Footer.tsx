import logoImg from "../assets/images/logo.svg";
import facebookIcon from "../assets/images/icon-facebook.svg";
import instagramIcon from "../assets/images/icon-instagram.svg";
import pinterestIcon from "../assets/images/icon-pinterest.svg";
import twitterIcon from "../assets/images/icon-twitter.svg";

interface SocialPage {
  iconUrl: string;
  textLink: string;
}

export default function Footer() {
  const socialIcons: SocialPage[] = [
    {
      iconUrl: facebookIcon,
      textLink: "https://facebook.com",
    },
    {
      iconUrl: twitterIcon,
      textLink: "https://x.com",
    },
    {
      iconUrl: pinterestIcon,
      textLink: "https://pinterest.com",
    },
    {
      iconUrl: instagramIcon,
      textLink: "https://twitter.com",
    },
  ];

  return (
    <footer className="Wrapper | text-body bg-black clr-white">
      <div className="Footer | Wrapper__child">
        <div className="Footer__navigation">
          <a href="#">
            <img
              src={logoImg}
              alt="Loopstudies writting"
              width={144}
              height={24}
            />
          </a>
          <nav>
            <ul className="text-to-center">
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
        <div className="Footer__propietary">
          <div className="Footer__propietary-socials">
            {socialIcons.map((socialIcon, i) => (
              <a key={i} href={socialIcon.textLink}>
                <img src={socialIcon.iconUrl} alt="" />
                <hr />
              </a>
            ))}
          </div>
          <p className="opacity-50">
            © 2021 Loopstudios. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
