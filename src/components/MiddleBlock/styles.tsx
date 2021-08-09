import styled from "styled-components";

export const MiddleBlockSection = styled("section")`
  position: relative;
  padding: 7.5rem 0 3rem;
  text-align: center;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    padding: 5.5rem 0 3rem;
  }
`;

export const Content = styled("p")`
  padding: 0.75rem 0 0.75rem;
`;

export const ContentWrapper = styled("div")`
  max-width: 570px;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

export const ButtonContainer = styled("div")`
  text-align: center;
  position: relative;

  @media only screen and (max-width: 414px) {
    padding-top: 0.75rem;
  }
`;

export const Title = styled("h4")`
  text-align: center;
  font-size: 22px;
  text-transform: capitalize;
  color: #18216d;
  padding-bottom: 2rem;
  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
  }
`;

export const ContactContainer = styled("div")`
  padding: 0.75rem 0;
`;

export const Para = styled("div")`
  color: #18216d;
  font-size: 22px;
  width: 90%;
  padding-bottom: 0.75rem;
`;