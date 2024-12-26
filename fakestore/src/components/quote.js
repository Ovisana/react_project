import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const testimonials = [
    {
      text: "“More than expected crazy soft, flexible and best fitted white simple denim shirt.”",
      title: "casual way",
    },
    {
      text: "“Best fitted white denim shirt more than expected crazy soft, flexible.”",
      title: "uptop",
    },
    {
      text: "“Best fitted white denim shirt more white denim than expected flexible crazy soft.”",
      title: "Denim craze",
    },
    {
      text: "“Best fitted white denim shirt more than expected crazy soft, flexible.”",
      title: "uptop",
    },
  ];

  return (
    <section className="testimonials py-5 bg-light">
      <div className="section-header text-center mt-5">
        <h3 className="section-title text-dark">WE LOVE GOOD COMPLIMENT</h3>
      </div>

      <div className="swiper testimonial-swiper overflow-hidden my-5">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}  // Show one slide at a time
          loop={true}        // Loop through testimonials
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-item text-center">
                <blockquote>
                  <p>{testimonial.text}</p>
                  <div className="review-title text-uppercase">{testimonial.title}</div>
                </blockquote>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="testimonial-swiper-pagination d-flex justify-content-center mb-5"></div>
    </section>
  );
};

export default Testimonials;
