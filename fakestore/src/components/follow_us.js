import React from 'react';

function Follow_us() {
  const instagramLinks = [
    "insta-item1.jpg",
    "insta-item2.jpg",
    "insta-item3.jpg",
    "insta-item4.jpg",
    "insta-item5.jpg",
    "insta-item6.jpg"
  ];

  return (
    <section className="instagram position-relative">
      <div className="d-flex justify-content-center w-100 position-absolute bottom-0 z-1">
        <a href="https://www.instagram.com/templatesjungle/" className="btn btn-dark px-5">
          Follow us on Instagram
        </a>
      </div>
      <div className="row g-0">
        {instagramLinks.map((image, index) => (
          <div key={index} className="col-6 col-sm-4 col-md-2">
            <div className="insta-item">
              <a href="https://www.instagram.com/templatesjungle/" target="_blank" rel="noopener noreferrer">
                <img
                  src={`images/${image}`}
                  alt="instagram"
                  className="insta-image img-fluid"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Follow_us;
