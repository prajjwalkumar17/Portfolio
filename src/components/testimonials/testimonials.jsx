/** @format */

import React from "react";
import "./testimonials.css";
// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import AVTR0 from "./../../assets/avatar0.jfif";
import AVTR1 from "./../../assets/avatar1.jfif";
import AVTR2 from "./../../assets/avatar2.jfif";
import AVTR3 from "./../../assets/avatar3.jfif";
import AVTR4 from "./../../assets/avatar4.jfif";
import AVTR5 from "./../../assets/avatar5.jfif";
import AVTR6 from "./../../assets/avatar6.jfif";
import AVTR7 from "./../../assets/avatar7.jfif";
const data = [
  {
    id: 0,
    avatar: AVTR0,
    clientName: "Ashutosh Kumar",
    history: "Manager at W3dev",
    review:
      "On behalf of the W3 Dev team, I would like to express my appreciation for the amazing work done by Prajjwal. The endless hours that he has spent working with our team, and the professionalism that he has portrayed has impressed the entire team immensely and we deem ourselves honored to have him as an Android Backend Developer Intern.",
  },
  {
    id: 1,
    avatar: AVTR1,
    clientName: "NIKHIL SRIVASTAVA",
    history: "Worked at SGBBSR together",
    review:
      "Working with Prajjwal was great as he had very great decision making skills and he is also great in hitting timelines even in adverse situation. Moreover he is very good in Android dev",
  },
  {
    id: 2,
    avatar: AVTR2,
    clientName: "Akansha Dubey",
    history: "Worked at W3dev together",
    review:
      "Working with Prajjwal was a great experience . He is a professional Android developer and keeps good knowledge of wide range of fields like social media marketing , campaigning and event management as well. He is truly hardworking , passionate , disciplined and punctual . I strongly recommend others to work with him if they need any help in his niche !",
  },
  {
    id: 3,
    avatar: AVTR3,
    clientName: "Aditya Singh",
    history: "Worked at SGBBSR together",
    review:
      "Prajjwal is a rare example of an effective and helpful teammate. I enjoyed working with him. Thanks to his supervision, it helped me a lot in learning new things. He possesses a powerful combination of expert knowledge and innate leadership abilities. His outgoing yet firm technique of handling the team is worthy to be praised. I recommend prajjwal if you want a good android developer with outstanding skills.",
  },
  {
    id: 4,
    avatar: AVTR4,
    clientName: "Aditi Jeena",
    history: "Worked at W3dev together",
    review:
      "Prajjwal has been collaborating with my team for a couple of months. He is highly skilled and efficient at work and on top of being a great android developer, he is also an easy-going person.",
  },
  {
    id: 5,
    avatar: AVTR5,
    clientName: "Swayam Verma",
    history: "Worked at SGBBSR together",
    review:
      "I worked with Prajjwal as a fellow developer, and as my senior on the project, he is highly adaptable, encouraging, and supportive and an effective leader. I learned a lot from him as a person, as a leader, and I took forward to see the team continue to grow under his vision and leadership.",
  },
  {
    id: 6,
    avatar: AVTR6,
    clientName: "Saloni Rai",
    history: "Worked at TuteDude together",
    review:
      "Prajjwal was cooperative, sincere and passionate about all the tasks assigned to him throughout the internship program.His performance at Tutedude as a Brand Ambassador was commendable. I would highly recommend Prajjwal for future opportunities.",
  },
  {
    id: 6,
    avatar: AVTR7,
    clientName: "Ritvik Kala",
    history: "Worked at W3dev together",
    review:
      "Prajjwal is an enthusiastic individual who is always up to help the team and is willing to learn at all times. Coming with a strong skillet he would turn out to be a good asset for any organization he works for. ",
  },
];
const testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Reviews from coworkers</h5>
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
              <h2 className="history">{i.history}</h2>
              <small className="client__review">{i.review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default testimonials;
