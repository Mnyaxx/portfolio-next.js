import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Myra Nyakiamo </span>
            from <span className="purple"> Nairobi, Kenya.</span>
            <br />
            I am currently interning as a Back-end developer at Megadel.
            <br />
            I have completed a Software Development Bootcamp at Gomycode Coding Academy.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Building things from scratch i.e legos and the such, As well as solving problems.
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Create with purpose; make what you build count."{" "}
          </p>
          <footer className="blockquote-footer">Mnyaxx!</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
