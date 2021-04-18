import { CircularProgress, makeStyles } from "@material-ui/core";
import AOS from "aos";
import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { UserContext } from "../../../../App";
import SingleService from "./SingleService/SingleService";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
    justifyContent: "center",
    marginTop: "20px",
  },
}));
AOS.init();
export default function HomeServices() {
  const [, , Service, , , , , ,] = useContext(UserContext);
  const classes = useStyles();

  return (
    <div className="py-5 bg-brand" data-aos="fade-up" data-aos-duration="1500">
      <Container>
        <Row>
          <Col className="text-center text-dark px-5">
            <h1>Our Services</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
              quasi repellendus in fugit, fugiat, nam saepe neque nisi nemo,
              quidem eum architecto fuga porro illum. Ipsa similique delectus
              alias quidem?
            </p>
          </Col>
        </Row>
        {Service.length === 0 && (
          <div className={classes.root}>
            <CircularProgress color="secondary" />
          </div>
        )}
        <Row className="mt-5" xl={3} lg={3} md={2} xs={1}>
          {Service.map((sr) => (
            <SingleService key={sr._id} service={sr}></SingleService>
          ))}
        </Row>
      </Container>
    </div>
  );
}
