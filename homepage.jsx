import React from "react";
import Swiper from "react-id-swiper";
import "swiper/swiper-bundle.css"; //Important for swiper to be responsive
import { Container, Grid, Button } from "@material-ui/core";

// This import is just to show the dummy testimonials, to be replaced with original testimonials
import Jumbotron from "react-bootstrap/Jumbotron";

//Local image Imports
import welcome from "../Assets/imgs/Welcome.png";
import aboutUs from "../Assets/imgs/Aboutus.png";
import downArrow from "../Assets/imgs/downarrow.png";
// import gsLogo from "../Assets/imgs/gslogo.png";

//HomePage components

//layout properties for downarrow
<<<<<<< HEAD
const dnarr={
  marginLeft: "50%",
  width: "40px",
  height:"25px",
=======
const dnarr = {
  left: "620px",
  width: "40px",
  height: "25px",
  position: "absolute",
>>>>>>> 530f7d9582fa77e616e0b7307059b5f57cfcd356
};

//Welcome
const Welcome = () => {
  //layout properties for heading
  const param = {
    width: "80%",
<<<<<<< HEAD
    marginLeft:"10%",
    marginTop:"30%",
=======
    height: "160px",
    marginLeft: "140px",
    marginTop: "200px",
>>>>>>> 530f7d9582fa77e616e0b7307059b5f57cfcd356
    textAlign: "left",
    color: "#707070",
  };
  //layout properties for welcome image
<<<<<<< HEAD
    const welimg = {
      marginTop: "10%",
    };

    //button styling
    const btnstyle={
      marginLeft:"10%",
      backgroundColor:"#FF9E04",
      boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)",
      borderRadius:"100px",
      color:"#fff",
    }

  return(
    <div>
      <Container component="main" maxWidth="lg" style={{marginBottom:"1%"}}>
        <Grid container spacing={2} className="my-2">
          <Grid item sm={12} lg={6}>
            <img src={gsLogo} style={{height:"10%",width:"14%",marginTop:"15%"}}className="img img-fluid" alt="" />
            <h1 style={param}>Welcome to GirlScript<br /> Hubli-Dharwad</h1>
            <Button style={btnstyle}>Become a member!</Button>{' '}
          </Grid>
          <Grid item sm={12} lg={6}>
            <div className="d-flex">
              <img src={welcome} style={welimg} className="img img-fluid" alt="" />
            </div>
          </Grid>
        </Grid>
      </Container>
      <div className="d-flex">
        <Container component="main" maxWidth="lg" style={{marginBottom:"10%"}}>
          <img src={downArrow} style={dnarr} className="img img-fluid" alt="" />
        </Container>
      </div>
    </div>
  );
};

//About Us
const AboutUs = () => {
  return (
    <div>
<<<<<<< HEAD
      <Container component="main" maxWidth="lg" style={{marginBottom:"10%"}}>
        <Grid container spacing={4} className="my-2">
          <Grid item sm={12} lg={6}>
            <img src={aboutUs} className="img img-fluid" alt="" />
=======
      <Container
        component="main"
        maxWidth="lg"
        style={{ marginBottom: "100px" }}
      >
        <Grid container spacing={4} className="my-2">
          <Grid item xs={12} sm={6}>
            <img
              src={aboutUs}
              style={{ width: "441px", height: "231px", opacity: "1" }}
              className="img img-fluid"
              alt=""
            />
>>>>>>> 530f7d9582fa77e616e0b7307059b5f57cfcd356
          </Grid>
          <Grid item sm={12} lg={6}>
            <h2>About Us</h2>
            <p style={{ width: "70%" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s,
            </p>
          </Grid>
        </Grid>
      </Container>
<<<<<<< HEAD
      <Container component="main" maxWidth="lg" style={{marginBottom:"10%"}}>
=======
      <Container
        component="main"
        maxWidth="lg"
        style={{ marginBottom: "200px" }}
      >
>>>>>>> 530f7d9582fa77e616e0b7307059b5f57cfcd356
        <img src={downArrow} style={dnarr} className="img img-fluid" alt="" />
      </Container>
    </div>
  );
};

// Testimonials component - (Can also be put in Components directory and import it here)
const Testimonials = () => {
  const params = {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: (index, className) => {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
    breakpoints: {
      1024: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  };
  return (
    <div className="my-5">
      <Container component="main" maxWidth="lg">
        <Grid container spacing={8}>
          <Grid item xs={12}>
            <h1 className="text-center my-5">Testimonials</h1>
          </Grid>
          <Grid item xs={12}>
            <Swiper {...params}>
              <div>
                <Jumbotron>
                  <h3>Testimonial 1</h3>
                  <br />
                  <h6>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime cumque porro quod nulla vitae ad quibusdam beatae
                    nostrum iusto fuga?
                  </h6>
                  <br />
                  <Button color="primary">KNOW MORE!</Button>
                </Jumbotron>
              </div>

              <div>
                <Jumbotron>
                  <h3>Testimonial 2</h3>
                  <br />
                  <h6>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime cumque porro quod nulla vitae ad quibusdam beatae
                    nostrum iusto fuga?
                  </h6>
                  <br />
                  <Button color="primary">KNOW MORE!</Button>
                </Jumbotron>
              </div>

              <div>
                <Jumbotron>
                  <h3>Testimonial 3</h3>
                  <br />
                  <h6>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime cumque porro quod nulla vitae ad quibusdam beatae
                    nostrum iusto fuga?
                  </h6>
                  <br />
                  <Button color="primary">KNOW MORE!</Button>
                </Jumbotron>
              </div>

              <div>
                <Jumbotron>
                  <h3>Testimonial 4</h3>
                  <br />
                  <h6>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime cumque porro quod nulla vitae ad quibusdam beatae
                    nostrum iusto fuga?
                  </h6>
                  <br />
                  <Button color="primary">KNOW MORE!</Button>
                </Jumbotron>
              </div>

              <div>
                <Jumbotron>
                  <h3>Testimonial 5</h3>
                  <br />
                  <h6>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime cumque porro quod nulla vitae ad quibusdam beatae
                    nostrum iusto fuga?
                  </h6>
                  <br />
                  <Button color="primary">KNOW MORE!</Button>
                </Jumbotron>
              </div>

              <div>
                <Jumbotron>
                  <h3>Testimonial 6</h3>
                  <br />
                  <h6>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime cumque porro quod nulla vitae ad quibusdam beatae
                    nostrum iusto fuga?
                  </h6>
                  <br />
                  <Button color="primary">KNOW MORE!</Button>
                </Jumbotron>
              </div>
            </Swiper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export const HomePage = () => {
  return (
    <div>
      {/* All the main home page contents will come here. */}
      <Welcome />
      <AboutUs />
      {/* Testimonials section */}
      <Testimonials />
      {/* End of Testimonials */}
    </div>
  );
};
