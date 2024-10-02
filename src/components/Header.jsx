import heroLogo from "../assets/images/house-of-zen-hero.png";

const Header = () => {
  return (
    <header
      id="header"
      className="header py-28 text-center md:pt-36 lg:text-left xl:pt-44 xl:pb-32"
    >
      <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
        <div className="mb-16 lg:mt-32 xl:mt-40 xl:mr-12">
          <h1 className="h1-large mb-5">House of Zen</h1>
          <p className="p-large mb-8">
            Welcome to the House of Zen Clinic, where booking your appointment
            is seamless and hassle-free. We are here to help you find the ideal
            time for your visit.
          </p>
          <a className="btn-solid-lg" href="#appointment">
            Book Your Appointment
          </a>
        </div>
        <div className="xl:text-right">
          <img className="inline" src={heroLogo} alt="alternative" />
        </div>
      </div>
    </header>
  );
};

export default Header;
