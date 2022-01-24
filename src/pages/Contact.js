import React from "react";
import Nav from "../components/Nav";
import SocialNetwork from "../components/SocialNetwork";
import CopyToClipboard from "react-copy-to-clipboard";
import ButtonBottom from "../components/ButtonBottom";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <main>
      <div className="contact">
        <Nav />
        <ContactForm />
        <div className="contact-infos">
          <div className="address">
            <div className="content">
              <h4>Adresse</h4>
              <p>6, Rue Henry Bordeaux</p>
              <p>74000 Annecy</p>
            </div>
          </div>

          <div className="phone">
            <div className="content">
              <h4>Téléphone</h4>
              <CopyToClipboard text="0618732413" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard hover"
                  onClick={() => {
                    alert("Téléphone copié !");
                  }}
                >
                  06 18 73 24 13
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
                    alert("Email copié !");
                  }}
                >
                  valkemarvin@gmail.com
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <SocialNetwork />
        </div>
        <ButtonBottom left={"/poject-5"} />
      </div>
    </main>
  );
};

export default Contact;
