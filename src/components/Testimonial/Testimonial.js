import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Testimonial.css";
// import required modules
import { Pagination } from "swiper";

const Testimonial = () => {
  const [review, setReviews] = useState([]);

  useEffect(() => {
    fetch("./reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="section__padding testimonial__section ">
      <div className="text-center">
        <h2>
          Test<span>i</span>monial
        </h2>
        <p className="text-white text-xl">What clients say?</p>
      </div>
      <div className="mt-16">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {review.map((review, index) => (
            <SwiperSlide className="" key={index}>
              <div className="card   bg-base-100 p-4">
                <p>{review.massage}</p>

                <div className="card-body items-center text-center">
                  <figure className="px-10 pt-10 ">
                    <img
                      src={review.profile}
                      alt="Shoes"
                      className="rounded-full "
                    />
                  </figure>
                  <h3 className="card-title">{review.name}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
