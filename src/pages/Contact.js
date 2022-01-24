import React from "react";
import Nav from "../components/Nav";
import SocialNetwork from "../components/SocialNetwork";
import CopyToClipboard from "react-copy-to-clipboard";
import ButtonBottom from "../components/ButtonBottom";
import ContactForm from "../components/ContactForm";
import Mouse from "../components/Mouse";

const Contact = () => {
  return (
    <main>
      <Mouse />
      <div className="contact">
        <Nav />
        <ContactForm />
        <div className="contact-infos">
          <div className="address">
            <div className="content">
              <h4>Address</h4>
              <p>6, Rue Henry Bordeaux</p>
              <p>74000 Annecy</p>
            </div>
          </div>

          <div className="phone">
            <div className="content">
              <h4>Phone</h4>
              <CopyToClipboard text="0618732413" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard hover"
                  onClick={() => {
                    alert("Phone copied !");
                  }}
                >
                  +33(0)6 18 73 24 13
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <div className="email">
            <div className="content">
              <h4>email</h4>
              <CopyToClipboard text="valkemarvin@gmail.com" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard hover"
                  onClick={() => {
                    alert("Email copied !");
                  }}
                >
                  valkemarvin@gmail.com
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <SocialNetwork />
        </div>
        <ButtonBottom left={"/project-5"} />
      </div>
    </main>
  );
};

export default Contact;
