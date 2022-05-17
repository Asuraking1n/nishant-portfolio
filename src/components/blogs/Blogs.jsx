import React from "react";
import "./blogs.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/blog1.PNG";
import profilePic2 from "../../img/blog2.PNG";
import profilePic3 from "../../img/blog3.PNG";
import profilePic4 from "../../img/blog4.PNG";

const Blogs = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "https://nishant99tiwari.medium.com/useeffect-a-whole-new-mental-model-8f1d01d41d04",
    },
    {
      img: profilePic2,
      review:
        "https://nishant99tiwari.medium.com/transpiler-vs-compiler-2c138de85d01",
    },
    {
      img: profilePic3,
      review:
        "https://nishant99tiwari.medium.com/css-flex-boxing-guide-46f0a093e778",
    },
    {
      img: profilePic4,
      review:
        "https://nishant99tiwari.medium.com/methodolgy-general-approach-to-hunt-bugs-8a75643f74a",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Some Awesome  </span>
        <span>Blogs </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <a href={client.review}>View Blog</a>
                
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Blogs;
