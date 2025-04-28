import Image from "next/image";

const WhyMbaCarousel = () => {
  return (
    <div
      id="carouselExampleRide"
      className="carousel slide"
      data-bs-ride="true"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
        <span className="bg-success text-white fs-5 m-2 p-2 rounded">
            🌟 NIRF-ranked Partner Universities
          </span>
        </div>
        <div className="carousel-item">
        <span className="bg-success text-white fs-5 m-2 p-2 rounded">
            🌟 UGC-DEB Approved Online Degrees
          </span>
        </div>
        <div className="carousel-item">
        <span className="bg-success text-white fs-5 m-2 p-2 rounded">
            🌟 NAAC A+ Accredited Institutions
          </span>
        </div>
        <div className="carousel-item">
          <span className="bg-success text-white fs-5 m-2 p-2 rounded">
            🌟 Affordable Fee Plans starting from ₹1.2 Lakhs{" "}
          </span>
          </div>
          <div className="carousel-item">
          <span className="bg-success text-white fs-5 m-2 p-2 rounded">
            🌟 100% Placement Assistance & Global Certifications
          </span>
          </div>
          <div className="carousel-item">
          <span className="bg-success text-white fs-5 m-2 p-2 rounded">
            🌟 AI-driven Learning Platforms & Mentorship Programs
          </span>
          </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleRide"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleRide"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default WhyMbaCarousel;
