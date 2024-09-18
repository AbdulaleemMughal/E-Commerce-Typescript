import React from "react";
import { FaHeart } from "react-icons/fa";
import { Container } from "react-bootstrap";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSnapchatSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

type FooterProps = {
  styles: React.CSSProperties;
};

const Footer = ({ styles }: FooterProps) => {
  return (
    <div style={styles}>
      <Container>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <p>
              Made with <FaHeart style={{color: 'red'}} /> by AbdulAleem
            </p>
          </div>
          <div>
            <FaInstagram style={{color: 'purple', fontSize: '30px', margin: '4px', cursor: 'pointer'}} />
            <FaFacebook style={{color: 'blue', fontSize: '30px', margin: '4px', cursor: 'pointer'}} />
            <FaSnapchatSquare style={{color: 'yellow', fontSize: '30px', margin: '4px', cursor: 'pointer'}} />
            <FaYoutube style={{color: 'red', fontSize: '30px', margin: '4px', cursor: 'pointer'}} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
