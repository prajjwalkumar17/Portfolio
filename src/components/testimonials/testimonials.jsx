/** @format */

import React from "react";
import "./testimonials.css";
// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import AVTR1 from "./../../assets/avatar1.jpg";
import AVTR2 from "./../../assets/avatar2.jpg";
import AVTR3 from "./../../assets/avatar3.jpg";
import AVTR4 from "./../../assets/avatar4.jpg";
const data = [
  {
    id: 1,
    avatar: AVTR1,
    clientName: "Aushotosh",
    review:
      "   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, dignissimos numquam. Ad tenetur repellat odio inventore praesentium excepturi animi adipisci alias. Blanditiis eaque ducimus assumenda",
  },
  {
    id: 2,
    avatar: AVTR2,
    clientName: "Aushotosh",
    review:
      "   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, dignissimos numquam. Ad tenetur repellat odio inventore praesentium excepturi animi adipisci alias. Blanditiis eaque ducimus assumenda",
  },
  {
    id: 3,
    avatar: AVTR3,
    clientName: "Aushotosh",
    review:
      "   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, dignissimos numquam. Ad tenetur repellat odio inventore praesentium excepturi animi adipisci alias. Blanditiis eaque ducimus assumenda",
  },
  {
    id: 4,
    avatar: AVTR4,
    clientName: "Aushotosh",
    review:
      "   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, dignissimos numquam. Ad tenetur repellat odio inventore praesentium excepturi animi adipisci alias. Blanditiis eaque ducimus assumenda",
  },
];
const testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Reviews from clients</h5>
      <h2>testimonials</h2>
      <Swiper
        className="container testimonial__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map((i) => {
          return (
            <SwiperSlide key={i.id} className="testimonial">
              <div className="client__avatar">
                <img src={i.avatar} alt="avatart one" />
              </div>
              <h5 className="client__name">{i.clientName}</h5>
              <small className="client__review">{i.review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default testimonials;
