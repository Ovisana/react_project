import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';

function Banner() {
  const [products, setProducts] = useState([]);

  // Fetch products from Fake Store API
  useEffect(() => {
    AOS.init();
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data); // Store products in state
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section id="billboard" className="bg-light py-5">
      <div className="container">
        <div className="row justify-content-center">
          <h1 className="section-title text-center mt-4 text-dark" data-aos="fade-up">
            New Collections
          </h1>
          <div className="col-md-6 text-center" data-aos="fade-up" data-aos-delay="300">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptas ut dolorum
              consequuntur, adipisci repellat! Eveniet commodi voluptatem voluptate, eum minima, in
              suscipit explicabo voluptatibus harum, quibusdam ex repellat eaque!
            </p>
          </div>
        </div>

        <div className="row">
          <Swiper
            className="swiper main-swiper py-4"
            data-aos="fade-up"
            data-aos-delay="600"
            spaceBetween={50}
            loop={true}
            pagination={{ clickable: true }}
            breakpoints={{
              480: {
                slidesPerView: 1, // Show 1 slide at a time
              },
              768: {
                slidesPerView: 2, // Show 2 slides at a time
              },
              1024: {
                slidesPerView: 3, // Show 3 slides at a time
              },
            }}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="banner-item image-zoom-effect">
                  <div className="image-holder">
                    <a href="#">
                      <img
                        src={product.image} // Display only the image from the API
                        alt={product.title}
                        className="img-fluid"
                      />
                    </a>
                  </div>
                  <div className="banner-content py-4">
                    <h5 className="element-title text-uppercase">
                      <a href="index.html" className="item-anchor">{product.title}</a>
                    </h5>
                    <p>{product.description}</p>
                    <div className="btn-left">
                      <a href="#" className="btn-link fs-6 text-uppercase item-anchor text-decoration-none">
                        Discover Now
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Banner;
