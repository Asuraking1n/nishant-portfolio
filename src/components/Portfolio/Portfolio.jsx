import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Gallery from "../../img/gallery.PNG";
import Ecommerce from "../../img/ecom.PNG";
import Tab from "../../img/tab.PNG";
import Cl from "../../img/cl.PNG";
import Tracker from "../../img/tracker.PNG";
import Codepen from "../../img/codepan.PNG";
import Disney from "../../img/disney.PNG";
import Sword from "../../img/sword.PNG";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}

    <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Gallery} alt="" />
          <a href="https://github.com/Asuraking1n/amayras-vedio-gallery"><div style={{color: darkMode?'white': ''}} className='project-view'>View</div></a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
          <a href="https://github.com/Asuraking1n/amayra-shop-ecom"><div style={{color: darkMode?'white': ''}} className='project-view'>View</div></a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Tab} alt="" />
          <a href="https://github.com/Asuraking1n/amyrastab"><div style={{color: darkMode?'white': ''}} className='project-view'>View</div></a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Tracker} alt="" />
          <a href="https://github.com/Asuraking1n/amayrastracker"><div style={{color: darkMode?'white': ''}} className='project-view'>View</div></a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Cl} alt="" />
          <a href="https://github.com/Asuraking1n/wish-ui"><div style={{color: darkMode?'white': ''}} className='project-view'>View</div></a>
        </SwiperSlide>

        <SwiperSlide>
          <img src={Disney} alt="" />
          <a href="https://github.com/Asuraking1n/Disney-Clone-reactApp"><div style={{color: darkMode?'white': ''}} className='project-view'>View</div></a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Sword} alt="" />
          <a href="https://github.com/Asuraking1n/pureCSS_art-sword"><div style={{color: darkMode?'white': ''}} className='project-view'>View</div></a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Codepen} alt="" />
          <a href="https://github.com/Asuraking1n/Fuse-Editor"><div style={{color: darkMode?'white': ''}} className='project-view'>View</div></a>
        </SwiperSlide>
        
      </Swiper>
    </div>
  
  );
};

export default Portfolio;
