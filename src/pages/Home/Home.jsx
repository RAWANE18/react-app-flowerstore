import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import flower21 from "../../assets/rosesbg.jpeg";
import flower20 from "../../assets/OIG12.jpeg";
import flower22 from "../../assets/sidegirl.jpg";
import { Autoplay } from "swiper/modules";
import "./Home.css";
import "swiper/css/autoplay";
import { Link } from "react-router-dom";
import Testemonials from "../../component/Testemonials/Testemonials";
export default function Home() {
  return (
    <div style={{ height: "100%", marginTop: "72px" }}>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 2000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        <SwiperSlide
          className="swiper-slider"
          style={{
            backgroundImage: `url(${flower21}) `,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",           
          }}
        >
          {" "}
          <div className="slider-content">
            <h1>Fresh from our Garden</h1>
            <p>
              We will help you find the best bouquet of fresh flowers from our
              garden. <br />
              Whether you re celebrating a special occasion or simply want to
              brighten someone s day,
              <br />
              our selection of vibrant blooms is sure to delight.
            </p>
            <Link to={"/products"}>
              <button className="button-65" role="button">
                Buy Now
              </button>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="swiper-slider"
          style={{
            backgroundImage: `url(${flower20}) `,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
      
          }}
        >
          <div className="slider-content ">
            <h1>Visit Us at Our Store</h1>
            <p style={{width:"70%"}}>
              Discover the beauty of our flowers in person. We invite you to
              visit our store, where you can explore our full collection and
              experience the vibrant atmosphere. Click the button below for
              directions to our location. We can't wait to see you!
            </p>
            <button className="button-65 btn1">Get Directions</button>
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide className="swiper-customers"
          style={{
            backgroundImage: `url(${flower22}) `,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        > <div className="slider-content customers">
          <h1> What Our Customers Are Saying
          </h1>
          <p>We’re proud to share the words of our satisfied customers. Their experiences reflect our commitment to quality and service. Read their testimonials to see why we’re the trusted choice for beautiful flowers and exceptional service.
          </p>
          <button className="button-65 btn2">Read Testimonials</button>
          </div> </SwiperSlide>
        {/* */}
      </Swiper>
      <div style={{height:"100vh",}}>
        <Testemonials/>
         </div>
      
    </div>
  );
}
