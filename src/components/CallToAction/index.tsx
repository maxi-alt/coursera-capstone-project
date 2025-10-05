import { FC } from "react";
import Button from "../Button";
import { useNavigate, NavigateFunction } from "react-router-dom";
import { Container, Content, Image } from "./styles";
import restaurant_food from "../../assets/restaurantfood.jpg";

const CallToAction: FC = ():  JSX.Element => {
  const navigate: NavigateFunction = useNavigate();

  return (
    <Container>
      <Content>
        <h1>Little Lemon</h1>
        <h2>Italia</h2>
        <p className="lead-txt">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </p>
        <Button onClick={() => navigate("/bookings")} aria-label="Go to reservation table page.">Reserve a Seat</Button>
      </Content>
      <Image>
        <img src={restaurant_food} alt="Restaurant Food" />
      </Image>
    </Container>
  );
};

export default CallToAction;