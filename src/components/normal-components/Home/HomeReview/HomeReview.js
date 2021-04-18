import { makeStyles } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import AOS from "aos";
import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import { UserContext } from "../../../../App.js";
import SingleReview from "./SingleReview/SingleReview";
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

export default function HomeReview() {
  const [, , , , reviews, , , , ,] = useContext(UserContext);
  const classes = useStyles();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-5 " data-aos="fade-up" data-aos-duration="2000">
      <Container>
        <Row>
          <Col className="text-center text-dark px-5">
            <h1>Client's Review</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
              quasi repellendus in fugit, fugiat, nam saepe neque nisi nemo,
              quidem eum architecto fuga porro illum. Ipsa similique delectus
              alias quidem?
            </p>
          </Col>
        </Row>
        {reviews.length === 0 && (
          <div className={classes.root}>
            <CircularProgress color="secondary" />
          </div>
        )}
        <Slider className="mt-5" {...settings}>
          {reviews.map((review) => (
            <SingleReview key={review._id} review={review}></SingleReview>
          ))}
        </Slider>
      </Container>
    </div>
  );
}
