import { FC, HTMLAttributes } from "react";
import { HashLink } from "react-router-hash-link";
import { Container, Content, Copyright, Column, Image } from "./styles";
import restaurant from "../../assets/restaurant.jpg";

const Footer: FC<HTMLAttributes<HTMLElement>> = (props): JSX.Element => {
  return (
    <Container {...props}>
      <Content>
        <Image src={restaurant} alt="Restaurant Food" />
        <Column>
          <h4>
            Little Lemon
            <br />
            Lemon
          </h4>
          <ul>
            <li>
              {" "}
              <HashLink to="/">Home</HashLink>{" "}
            </li>
            <li>
              {" "}
              <HashLink to="/#">Menu</HashLink>{" "}
            </li>
            <li>
              {" "}
              <HashLink to="/bookings">Reservations</HashLink>{" "}
            </li>
            <li>
              {" "}
              <HashLink to="/#">Order Online</HashLink>{" "}
            </li>
            <li>
              {" "}
              <HashLink to="/#">Login</HashLink>{" "}
            </li>
          </ul>
        </Column>
        <Column>
          <h4>Contact Us</h4>
          <ul>
            <li>
              <address>
                Little Lemon <br />
                LOREM IPSUM <br />
                Street 5,
                <br />
                ABCA 123 <br />
                Greenland
              </address>
            </li>
            <li>
              {" "}
              <a href="tel:+123123123" target="_blank" rel="external">
                +123 123 123
              </a>{" "}
            </li>
            <li>
              {" "}
              <a
                href="mailto:hello@littlelemon.com"
                target="_blank"
                rel="external"
              >
                hello@littlelemon.com
              </a>{" "}
            </li>
          </ul>
        </Column>
        <Column>
          <h4>Social Media</h4>
          <ul>
            <li>
              {" "}
              <a
                href="https://www.facebook.com/littlelemon"
                target="_blank"
                rel="external"
              >
                Facebook
              </a>{" "}
            </li>
          </ul>
        </Column>
      </Content>
      <Copyright>
        <p>© 2025 Little Lemon. All rights reserved.</p>
      </Copyright>
    </Container>
  );
};

export default Footer;
