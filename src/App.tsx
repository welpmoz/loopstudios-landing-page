import loopStudios from "./assets/images/logo.svg";

function App() {
  return (
    <>
      <header className="relative flex bg-[url('./assets/images/mobile/image-hero.jpg')] bg-cover bg-no-repeat px-6 py-[14.1875rem] md:flex-col md:gap-32 md:bg-[url('./assets/images/desktop/image-hero.jpg')] md:px-14 md:pt-8 md:pb-16 lg:px-40 lg:pt-16 lg:pb-32">
        {/* for background user picture or bg image */}
        {/* <picture className="absolute">
          <source srcSet={heroImgDesktop} media="(min-width: 600px)" />
          <img
            alt=""
            height={650}
            src={heroImgMobile}
            width={375}
          />
        </picture> */}
        <div className="absolute top-10 right-0 left-0 flex items-center justify-between px-6 md:relative md:top-0 md:px-0">
          <img
            alt="Loopstudios digital letter"
            className="md:h-8 md:w-[12rem]"
            height={24}
            src={loopStudios}
            width={144}
          />

          <nav>Implement navigation bar</nav>
        </div>

        <div className="border-2 border-white p-6 pt-[1.625rem] sm:p-10 md:self-start">
          <h1 className="text-heading-1 max-w-[10ch] text-white uppercase md:max-w-[12ch]">
            immersive experiences that deliver
          </h1>
        </div>
      </header>
    </>
  );
}

export default App;
