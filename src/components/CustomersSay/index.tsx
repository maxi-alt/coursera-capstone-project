import { FC, HTMLAttributes } from "react";
import { Container, Title, Cards } from "./styles";
import CustomersSayCard from "../CustomersSayCard";

const CustomersSay: FC<HTMLAttributes<HTMLDivElement>> = (props): JSX.Element => {
  return (
    <Container {...props}>
      <Title>Customer reviews</Title>
      <Cards>
        <CustomersSayCard
          rating={5}
          customerImg="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          customerName="Customer A"
          testimonial="Exceptional!!!"
        />
        <CustomersSayCard
          rating={4}
          customerImg="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=688&auto=format&fit=crop&w=1470&q=80"
          customerName="Customer B"
          testimonial="Highly recommended."
        />
        <CustomersSayCard
          rating={3}
          customerImg="https://images.unsplash.com/photo-1660716040448-6215916d87be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"
          customerName="Customer C"
          testimonial="3/5"
        />
        <CustomersSayCard
          rating={5}
          customerImg="https://images.unsplash.com/photo-1580656169983-bef557382466?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D"
          customerName="Customer D"
          testimonial="Super good"
        />
      </Cards>
    </Container>
  );
};

export default CustomersSay;