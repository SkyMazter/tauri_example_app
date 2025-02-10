import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { BsChevronCompactRight } from "react-icons/bs";

interface Props {
  name: string;
  latest_message: string;
}

const Chat_Box = ({ name, latest_message }: Props) => {
  return (
    <Row>
      {" "}
      <Col className="chat-box">
        {" "}
        <div className="py-1">
          <h6> {name} </h6> <p className="latest-message"> {latest_message}</p>
        </div>
        <BsChevronCompactRight />
      </Col>
    </Row>
  );
};

export default Chat_Box;
