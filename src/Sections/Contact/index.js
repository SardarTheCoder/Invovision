import Facebook from "../../assets/facebook-square-brands.svg";
import LinkedId from "../../assets/linkedin-brands.svg";
import Twitter from "../../assets/twitter-square-brands.svg";
import Instagram from "../../assets/instagram-square-brands.svg";
import styled from "styled-components";
import './Contact.css'

const ContactSection = styled.section`
  width: 100vw;
  padding: calc(2.5rem + 2.5vw) 0;
  background-color: #0a0b10;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  justify-content: center;
`;



const Icons = styled.div`
  display: flex;
  margin-bottom: 3rem;
  a {
    &:hover {
      img {
        filter: invert(20%) sepia(100%) saturate(500%) hue-rotate(580deg)
          brightness(100%) contrast(97%);
      }
    }
    &:not(:last-child) {
      margin-right: 2rem;
    }
    img {
      width: 3rem;
      height: 3rem;
    }
  }
`;



const Contact = () => {
  return (
    <ContactSection id="contact">
       <h5 class="heading">InvoVision</h5>
      {/* <Text>Lorem ipsum dolor sit amet, consectetur adipisicing.</Text> */}
      <Icons>
        <a href="https://www.facebook.com/macrosoar/">
          {" "}
          <img src={Facebook} alt="Facebook" />
        </a>
        <a href="https://www.linkedin.com/company/invovision-technologies/?originalSubdomain=pk">
          <img src={LinkedId} alt="LinkedId" />
        </a>
        <a href="https://twitter.com/">
          <img src={Twitter} alt="Twitter" />
        </a>
        <a href="https://www.instagram.com/macrosoar/?igshid=jdln1f8fa33k">
          <img src={Instagram} alt="Instagram" />
        </a>
      </Icons>

      <div class="container">
    <div class="heading-container">
       
        <p class="description">We hope you enjoy our services as much as<br/> we enjoy offering them to you. If you have any questions<br/> or comments, please don’t hesitate and feel free to<br/> contact us.</p>
    </div>

    <div class="contact-info">
    <h1 className="heading2">LOCATION:</h1>  <a href="https://www.google.com/maps/place/Pakland+Business+Center/@33.6666574,73.0761395,17z/data=!3m1!4b1!4m6!3m5!1s0x38df954f581447df:0x2f018f6e34b5f9f9!8m2!3d33.6666574!4d73.0761395!16s%2Fg%2F11g8_15sjr?entry=ttu" class="address">
           Office #19, 2nd Floor, Huzaifa plaza, I-8 Markaz, Islamabad, Pakistan
        </a>
        <a href="info@invovision.io" class="email">
          <h1 className="heading2">  Email:</h1> info@invovision.io
        </a>
        <a href="https://api.whatsapp.com/send/?phone=%2B923455237716&text&type=phone_number&app_absent=0" class="whatsapp">
            <ul class="phone-numbers"><h1 className="heading2"> Whatsapp:</h1>
                <li>923455237716</li>
                <li>923355135135</li>
            </ul>
        </a>
    </div>
</div>
      
    </ContactSection>
  );
};

export default Contact;
