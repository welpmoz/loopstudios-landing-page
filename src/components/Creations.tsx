export default function Creations() {
  const creations: CreationProps[] = [
    {
      imageUrl: "deep-earth.jpg",
      altText: "View of Earth from space with a dark background",
      title: "DEEP EARTH",
    },
    {
      imageUrl: "night-arcade.jpg",
      altText: "Arcade machine glowing with neon lights in a dark environment",
      title: "NIGHT ARCADE",
    },
    {
      imageUrl: "soccer-team.jpg",
      altText:
        "Soccer player wearing a red uniform running on the field with a ball",
      title: "SOCCER TEAM VR",
    },
    {
      imageUrl: "grid.jpg",
      altText: "Front part of a race car with the Mobil logo on the track",
      title: "THE GRID",
    },
    {
      imageUrl: "from-above.jpg",
      altText: "Aerial view of a winding road through a mountainous landscape",
      title: "FROM UP ABOVE VR",
    },
    {
      imageUrl: "pocket-borealis.jpg",
      altText:
        "Northern lights illuminating the night sky with green and purple tones",
      title: "POCKET BOREALIS",
    },
    {
      imageUrl: "curiosity.jpg",
      altText: "NASA's Curiosity rover exploring the surface of Mars",
      title: "THE CURIOSITY",
    },
    {
      imageUrl: "fisheye.jpg",
      altText:
        "Desert landscape with a fisheye lens effect, creating a circular perspective",
      title: "MAKE IT FISHEYE",
    },
  ];

  return (
    <div className="Creations">
      <h2 className="text-heading-2 uppercase">our creations</h2>
      <div className="Creations__grid clr-white text-heading-3">
        {creations.map((creation, i) => (
          <Creation key={i} {...creation} />
        ))}
      </div>
      <button type="button" className="text-button uppercase">
        see all
      </button>
    </div>
  );
}

interface CreationProps {
  imageUrl: string;
  altText: string;
  title: string;
}

function Creation({ altText, imageUrl, title }: CreationProps) {
  return (
    <div className="Creations__item" tabIndex={0}>
      <picture>
        <source
          srcSet={`/images/desktop/image-${imageUrl}`}
          media="(width >= 44.375rem)"
        />
        <img
          className="Creations__item-image"
          src={`/images/mobile/image-${imageUrl}`}
          alt={altText}
        />
      </picture>
      <span className="Creations__item-title">{title}</span>
    </div>
  );
}
