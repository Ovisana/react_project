import React from "react";

const VideoSection = () => {
  return (
    <section className="video py-5 overflow-hidden">
      <div className="container-fluid">
        <div className="row">
          <div className="video-content open-up" data-aos="zoom-out">
            <div className="video-bg">
              <img
                src="images/video-image.jpg"
                alt="video"
                className="video-image img-fluid"
              />
            </div>
            <div className="video-player">
              <a
                className="youtube"
                href="https://www.youtube.com/embed/pjtsGzQjFM4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <use xlinkHref="#play"></use>
                </svg>
                <img
                  src="images/text-pattern.png"
                  alt="pattern"
                  className="text-rotate"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
