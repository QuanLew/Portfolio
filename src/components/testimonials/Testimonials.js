import React from "react";
import "./testimonials.css";
import AVTR2 from "../../assets/portfolio1.jpg";
import AVTR5 from "../../assets/portfolio5.jpg";
import AVTR1 from "../../assets/portfolio1.jpg";
import AVTR3 from "../../assets/portfolio3.jpg";

// import Swiper core and required modules
import { Pagination, Autoplay } from "swiper";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Tina Snow",
    review:
      "Using React, Node.js, Express & MongoDB we gonna implement authentication. where user can signup and login to there account",
  },
  {
    avatar: AVTR2,
    name: "Tina Snow",
    review:
      "Using React, Node.js, Express & MongoDB we gonna implement authentication. where user can signup and login to there account",
  },
  {
    avatar: AVTR3,
    name: "Tina Snow",
    review:
      "Using React, Node.js, Express & MongoDB we gonna implement authentication. where user can signup and login to there account",
  },
  {
    avatar: AVTR5,
    name: "Tina Snow",
    review:
      "Using React, Node.js, Express & MongoDB we gonna implement authentication. where user can signup and login to there account",
  },
];

// function createSlide() {
//   return (
//     <SwiperSlide>
//       {data.map(({ avatar, name, review }, index) => {
//         return (
//           <SwiperSlide key={index} className="testimonial">
//             <div className="client__avatar">
//               <img src={avatar} alt="Avatar One" />
//             </div>
//             <h5 className="client__name">{name}</h5>
//             <small className="client__review">{review}</small>
//           </SwiperSlide>
//         );
//       })}
//     </SwiperSlide>
//   );
// }

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 2000 }}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
