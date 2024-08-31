import './Testemonials.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBRow,
    MDBTypography,
  } from "mdb-react-ui-kit";
export default function Testemonials() {

        return (
            <MDBContainer className="py-5" id='testimonials' style={{  marginTop: "100px"}}>
            <MDBRow className="d-flex justify-content-center">
              <MDBCol md="10" xl="8" className="text-center">
                <h3 className="mb-4">What Our Customers Say</h3>
                <p className="mb-4 pb-2 mb-md-5 pb-md-0">
                  
            We are thrilled to hear what our customers say about their experience with our flower shop! From stunning bouquets to exceptional service, we strive to make every purchase a delightful one.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="text-center">
              <MDBCol md="4" className="mb-5 mb-md-0">
                <div className="d-flex justify-content-center mb-4">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                    className="rounded-circle shadow-1-strong"
                    width="150"
                    height="150"
                  />
                </div>
                <h5 className="mb-3">Maria Smantha</h5>
                <h6 className="text-primary mb-3">Web Developer</h6>
                <p className="px-xl-3">
                  <MDBIcon fas icon="quote-left" className="pe-2" />
                  I've been a customer of this flower shop for years, and I've never been disappointed. The quality of their flowers is exceptional, and their customer service is always top-notch. I highly recommend them to anyone looking for a beautiful bouquet.
                </p>
                <MDBTypography
                  listUnStyled
                  className="d-flex justify-content-center mb-0"
                >
                  <li>
                    <MDBIcon fas icon="star" size="sm" className="text-warning" />
                  </li>
                  <li>
                    <MDBIcon fas icon="star" size="sm" className="text-warning" />
                  </li>
                  <li>
                    <MDBIcon fas icon="star" size="sm" className="text-warning" />
                  </li>
                  <li>
                    <MDBIcon fas icon="star" size="sm" className="text-warning" />
                  </li>
                  <li>
                    <MDBIcon
                      fas
                      icon="star-half-alt"
                      size="sm"
                      className="text-warning"
                    />
                  </li>
                </MDBTypography>
              </MDBCol>
              <MDBCol md="4" className="mb-5 mb-md-0">
                <div className="d-flex justify-content-center mb-4">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                    className="rounded-circle shadow-1-strong"
                    width="150"
                    height="150"
                  />
                </div>
                <h5 className="mb-3">Lisa Cudrow</h5>
                <h6 className="text-primary mb-3">Graphic Designer</h6>
                <p className="px-xl-3">
                  <MDBIcon fas icon="quote-left" className="pe-2" />
                  The flowers I ordered for my mom's birthday were absolutely beautiful! They were fresh, vibrant, and arranged perfectly. The delivery was prompt and courteous. I will definitely be using your flower shop again
                </p>
                <MDBTypography
                  listUnStyled
                  className="d-flex justify-content-center mb-0"
                >
                  <li>
                    <MDBIcon fas icon="star" size="sm" className="text-warning" />
                  </li>
                  <li>
                    <MDBIcon fas icon="star" size="sm" className="text-warning" />
                  </li>
                  <li>
                    <MDBIcon fas icon="star" size="sm" className="text-warning" />
                  </li>
                  <li>
                    <MDBIcon fas icon="star" size="sm" className="text-warning" />
                  </li>
                  <li>
                    <MDBIcon fas icon="star" size="sm" className="text-warning" />
                  </li>
                </MDBTypography>
              </MDBCol>
              <MDBCol md="4" className="mb-5 mb-md-0">
                <div className="d-flex justify-content-center mb-4">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
                    className="rounded-circle shadow-1-strong"
                    width="150"
                    height="150"
                  />
                </div>
                <h5 className="mb-3">John Smith</h5>
                <h6 className="text-primary mb-3">Marketing Specialist</h6>
                <p className="px-xl-3">
                  <MDBIcon fas icon="quote-left" className="pe-2" />
                  I needed a last-minute flower arrangement for a friend's housewarming party, and your shop came to the rescue! The staff was incredibly helpful in creating a beautiful bouquet that fit my budget perfectly. My friend loved it! Thank you for your amazing service
                </p>
                <MDBTypography
                  listUnStyled
                  className="d-flex justify-content-center mb-0"
                >
                  <li>
                    <MDBIcon fas icon="star" size="sm" className="text-warning" />
                  </li>
                  <li>
                    <MDBIcon fas icon="star" size="sm" className="text-warning" />
                  </li>
                  <li>
                    <MDBIcon fas icon="star" size="sm" className="text-warning" />
                  </li>
                  <li>
                    <MDBIcon fas icon="star" size="sm" className="text-warning" />
                  </li>
                  <li>
                    <MDBIcon far icon="star" size="sm" className="text-warning" />
                  </li>
                </MDBTypography>
              </MDBCol>
            </MDBRow>
          </MDBContainer>

        )
    }
