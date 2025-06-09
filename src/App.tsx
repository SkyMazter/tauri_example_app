import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Offcanvas from "react-bootstrap/Offcanvas";

import {
  BsThreeDotsVertical,
  BsMoonStarsFill,
  BsMoonStars,
} from "react-icons/bs";
// import Chats from "./components/Chats";

function App() {
  const [isDark, setIsDark] = useState(false);

  const [show, setShow] = useState(false);

  const user_name: string = "User_Name";

  function handleToggle() {
    if (isDark == true) setIsDark(false);
    else setIsDark(true);
  }

  const handleShow = () => {
    if (show == true) setShow(false);
    else setShow(true);
  };

  return (
    <Container
      fluid
      className="quicksand"
      style={{
        height: "100vh",
        backgroundColor: isDark ? "black" : "white",
        color: isDark ? "white" : "black",
        transition: "0.3s",
        overflow: "scroll",
      }}
    >
      <Row>
        <Col xs={2} className="d-flex justify-content-start align-items-center">
          {isDark ? (
            <BsMoonStarsFill className="bttn" onClick={handleToggle} />
          ) : (
            <BsMoonStars className="bttn" onClick={handleToggle} />
          )}
        </Col>
        <Col className="d-flex justify-content-center">
          <h2>Chat</h2>
        </Col>
        <Col xs={2} className="d-flex justify-content-end align-items-center">
          <BsThreeDotsVertical className="bttn" onClick={handleShow} />
        </Col>
      </Row>

      <Row>
        <Col></Col>
      </Row>
      <Offcanvas
        className="quicksand"
        show={show}
        onHide={handleShow}
        placement="end"
        style={{
          backgroundColor: isDark && "grey",
          color: isDark && "white",
        }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <h3>Logged in as: {user_name}</h3>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Container>
            <Row className="fs-5 py-1 menu-bttn">Home</Row>

            <Row className="fs-5 py-1 menu-bttn">About</Row>

            <Row className="fs-5 py-1 menu-bttn">Settings</Row>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </Container>
  );
}

export default App;
