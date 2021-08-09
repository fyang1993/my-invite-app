import { Container, TextWrapper, Content } from "./styles";

interface Props {
  title: string;
  content: string;
  t: any;
}

const Block = ({ title, content}: Props) => {
  return (
    <Container>
      <h6>{title}</h6>
      <TextWrapper>
        <Content>{content}</Content>
      </TextWrapper>
    </Container>
  );
};

export default Block;
