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
import { HashLink } from "react-router-hash-link";
import About from "../../component/About/About";
import "animate.css";
import ScrollAnimation from "react-animate-on-scroll";
import Location from "../../component/Location/Location";

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
           <HashLink to='#location'> <button className="button-65 btn1">Get Directions</button></HashLink>
          </div>
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
          <HashLink to="#testimonials">
          <button className="button-65 btn2">Read Testimonials</button></HashLink>
          </div> </SwiperSlide>
      
      </Swiper>
      <About/>
      <div className="services">
      <div className="services-main">
        <h1>Get in Touch with Us</h1>
        <p>Stay connected with us by signing up for our newsletter! Be the first to know about our latest collections, special offers, and upcoming events.</p>
      <Link to={"/account"}> <button className="button-65 btn2">Sign Up</button></Link> 
      </div>

      <div className="services-items">
        <ScrollAnimation className="items first" animateIn="animate__backInLeft">
          
            <h3>Exclusive Offers:</h3> 
            <p>Receive special promotions and discounts available only to our subscribers.</p>
        
        </ScrollAnimation>
        
        <ScrollAnimation className="items second" animateIn="animate__backInRight">
          
            <h3>Flower Care Tips:</h3>  
            <p>Get expert advice on how to keep your flowers fresh and vibrant.</p>
          
        </ScrollAnimation>
        
        <ScrollAnimation className="items third" animateIn="animate__backInLeft">
         
            <h3>Event Invitations:</h3> 
            <p>Be invited to our exclusive events, floral workshops, and more.</p> 
        
        </ScrollAnimation>
      </div>
    </div>

      <Testemonials/>
     <Location/>
        
    </div>
  );
}
