import { lazy } from "react";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));


const Home = () => {
  return (
    <Container>
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      />
    </Container>
  );
};

export default Home;
