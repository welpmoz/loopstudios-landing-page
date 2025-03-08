import Creations from "./Creations";

import vrInteractionSmall from "../assets/images/mobile/image-interactive.jpg";
import vrInteractionLarge from "../assets/images/desktop/image-interactive.jpg";

export default function Main() {
  return (
    <main className="Wrapper">
      <div className="Main Wrapper__child">
        <div className="Main__presentation">
          <picture>
            <source srcSet={vrInteractionLarge} media="(width >= 43.75rem)" />
            <img
              src={vrInteractionSmall}
              alt="A human playing a virtual game"
              className="Main__presentation-image"
              width={327}
              height={224}
            />
          </picture>
          <div className="Main__presentation-text bg-white text-black text-to-center">
            <h2 className="text-heading-2 uppercase">
              the leader in interactive <abbr title="virtual reality">VR</abbr>
            </h2>
            <p className="text-body opacity-50">
              Founded in 2011, Loopstuidos has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </div>
        </div>
        <Creations />
      </div>
    </main>
  );
}
