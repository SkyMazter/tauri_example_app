import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Chat_Box from "./Chat_Box";

import { BsPlusLg } from "react-icons/bs";

const Chats = () => {
  return (
    <Container className="px-3">
      <Row>
        <Col>
          <h5 className="py-2 d-flex justify-content-start align-items-center">
            Incoming Messages
          </h5>
        </Col>
        <Col
          xs={2}
          md={1}
          className="d-flex justify-content-center align-items-center text-primary"
        >
          {/* <Button variant="outline-primary">
            {" "}
            <BsPlus />
          </Button> */}
          <BsPlusLg />
        </Col>
      </Row>

      <Chat_Box name="Name" latest_message="Hello World!" />
      <Chat_Box name="Name" latest_message="Hello World!" />
      <Chat_Box name="Name" latest_message="Hello World!" />
    </Container>
  );
};

export default Chats;
