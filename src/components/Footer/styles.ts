import styled from "styled-components";

export const FooterSection = styled("footer")`
  background: rgb(241, 242, 243);
  padding: 1rem 0;
  height:100px;
  position:absolute;
  bottom:0;
  width:100%;
`;

export const Title = styled("h4")`
  font-size: 22px;
  text-transform: capitalize;
  color: #18216d;

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
  }
`;


export const Para = styled("div")`
  color: #18216d;
  font-size: 14px;
  width: 90%;
`;

