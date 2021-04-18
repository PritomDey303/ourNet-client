import { CircularProgress, makeStyles } from "@material-ui/core";
import AOS from "aos";
import { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import { UserContext } from "../../../../App";
import SingleFeature from "./SingleFeature/SingleFeature";
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

export default function HomeFeatures() {
  const [, , , , , , Feature, ,] = useContext(UserContext);
  const classes = useStyles();

  console.log(Feature);

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
    <div className="py-5 bg_brand" data-aos="fade-up" data-aos-duration="1500">
      <Container>
        <Row className="mb-5">
          <Col className="text-center text-dark px-5">
            <h1>Our Features</h1>
            <p className="px-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
              quasi repellendus in fugit, fugiat, nam saepe neque nisi nemo,
              quidem eum architecto fuga porro illum. Ipsa similique delectus
              alias quidem?
            </p>
          </Col>
        </Row>
        {Feature.length === 0 && (
          <div className={classes.root}>
            <CircularProgress color="secondary" />
          </div>
        )}
        <Slider {...settings}>
          {Feature.map((feature) => (
            <SingleFeature key={feature._id} feature={feature}></SingleFeature>
          ))}
        </Slider>
      </Container>
    </div>
  );
}
