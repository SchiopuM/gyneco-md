import React from "react";
import Card from "react-bootstrap/Card";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Check from "../../assets/Check.png";
import CardGroup from "react-bootstrap/CardGroup";
import classes from "./PaymentPachet.module.css";

const PaymentPachet = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <CardGroup>
        <div style={{ padding: "25px" }}>
          <Card
            style={{
              width: "18rem",
              borderRadius: "10px",
              borderColor: "#007344",
            }}
          >
            <Card.Body>
              <Card.Title>
                <span className={classes.hederText}>Basic</span>
              </Card.Title>
              <Card.Text>
                <span className={classes.fieldText}>Gratuit</span>
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>
                <img
                  alt=""
                  src={Check}
                  width="27"
                  height="27"
                  className="d-inline-block align-top"
                />{" "}
                <span className={classes.lineText}>
                  quiz-uri pe subiecte de interes
                </span>
              </ListGroupItem>
              <ListGroupItem>
                <img
                  alt=""
                  src={Check}
                  width="27"
                  height="27"
                  className="d-inline-block align-top"
                />{" "}
                <span className={classes.lineText}>
                  Lista de contacte a secialistilor
                </span>
              </ListGroupItem>
              <ListGroupItem>
                <img
                  alt=""
                  src={Check}
                  width="27"
                  height="27"
                  className="d-inline-block align-top"
                />{" "}
                <span className={classes.lineText}>Articole din blog</span>
              </ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">
                <Button style={{ backgroundColor: "#007344" }}>
                  Vreau pachetul
                </Button>
              </Card.Link>
            </Card.Body>
          </Card>
        </div>

        <div style={{ padding: "25px" }}>
          <Card
            style={{
              width: "18rem",
              borderRadius: "10px",
              borderColor: "#007344",
            }}
          >
            <Card.Body>
              <Card.Title>
                <span className={classes.hederText}>Basic</span>
              </Card.Title>
              <Card.Text>
                <span className={classes.fieldText}>Gratuit</span>
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>
                <img
                  alt=""
                  src={Check}
                  width="27"
                  height="27"
                  className="d-inline-block align-top"
                />{" "}
                <span className={classes.lineText}>
                  quiz-uri pe subiecte de interes
                </span>
              </ListGroupItem>
              <ListGroupItem>
                <img
                  alt=""
                  src={Check}
                  width="27"
                  height="27"
                  className="d-inline-block align-top"
                />{" "}
                <span className={classes.lineText}>
                  Lista de contacte a secialistilor
                </span>
              </ListGroupItem>
              <ListGroupItem>
                <img
                  alt=""
                  src={Check}
                  width="27"
                  height="27"
                  className="d-inline-block align-top"
                />{" "}
                <span className={classes.lineText}>Articole din blog</span>
              </ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">
                <Button style={{ backgroundColor: "#007344" }}>
                  Vreau pachetul
                </Button>
              </Card.Link>
            </Card.Body>
          </Card>
        </div>
        <div style={{ padding: "25px" }}>
          <Card
            style={{
              width: "18rem",
              borderRadius: "10px",
              borderColor: "#007344",
            }}
          >
            <Card.Body>
              <Card.Title>
                <span className={classes.hederText}>Basic</span>
              </Card.Title>
              <Card.Text>
                <span className={classes.fieldText}>Gratuit</span>
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>
                <img
                  alt=""
                  src={Check}
                  width="27"
                  height="27"
                  className="d-inline-block align-top"
                />{" "}
                <span className={classes.lineText}>
                  quiz-uri pe subiecte de interes
                </span>
              </ListGroupItem>
              <ListGroupItem>
                <img
                  alt=""
                  src={Check}
                  width="27"
                  height="27"
                  className="d-inline-block align-top"
                />{" "}
                <span className={classes.lineText}>
                  Lista de contacte a secialistilor
                </span>
              </ListGroupItem>
              <ListGroupItem>
                <img
                  alt=""
                  src={Check}
                  width="27"
                  height="27"
                  className="d-inline-block align-top"
                />{" "}
                <span className={classes.lineText}>Articole din blog</span>
              </ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">
                <Button style={{ backgroundColor: "#007344" }}>
                  Vreau pachetul
                </Button>
              </Card.Link>
            </Card.Body>
          </Card>
        </div>
      </CardGroup>
    </div>
  );
};

export default PaymentPachet;
