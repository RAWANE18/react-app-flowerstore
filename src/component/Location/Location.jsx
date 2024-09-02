import { FaCalendarAlt, FaPhoneAlt } from "react-icons/fa";
import "./Location.css";
import { FaLocationDot } from "react-icons/fa6";

export default function Location() {
  return (
    <div className="location-ctn" id="location">
      <div className="store-infos">
        <h1>Location</h1>
        <h3>
          <FaCalendarAlt /> Mon - Sat
        </h3>
        <p>9:00 am - 7:00 pm</p>
        <h3>
          <FaLocationDot />
          450 W Sample Ave, Fresno, CA 93704, États-Unis
        </h3>
        <p>Store Adress</p>
        <h3>
          <FaPhoneAlt /> +1 310 555-6789
        </h3>
        <p>Phone numbder</p>
        <p></p>
      </div>
      <div className="location">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d204393.45544129418!2d-119.80048009999999!3d36.826960199999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8094673eb9ddbfff%3A0x2e0e44386edd3e59!2sLily%E2%80%99s%20Bouquet!5e0!3m2!1sfr!2sdz!4v1725187678557!5m2!1sfr!2sdz"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
        
        ></iframe>
      </div>
    </div>
  );
}
