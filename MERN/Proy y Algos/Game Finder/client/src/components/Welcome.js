function Welcome(props) {
  const { scrollToSection, mapSection } = props;
  return (
    <div className="row justify-content-center">
      <div className="col-5 justify-content-center align-items-center">
        <h1 className="text-center welcome-title text-white title-shadow mb-4">
          Welcome to Field Finder
        </h1>
        <p className="text-center welcome-text text-white text-shadow mb-4">
          {" "}
          Discover sports fields and courts near you with Field Finder's
          interactive map. Find the perfect location for your favorite sport,
          check availability, amenities, and check its location easily. Elevate
          your sports experience with us. Start your searching!
        </p>
        <p className="text-center">
          <button
            onClick={() => {
              scrollToSection(mapSection);
            }}
            className="btn border-3 border-light border btn-lg pe-5 ps-5 btn-shadow btn-hover text-white"
          >
            {" "}
            CLICK HERE{" "}
          </button>
        </p>
      </div>
    </div>
  );
}

export default Welcome;
