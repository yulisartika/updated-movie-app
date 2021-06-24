import React, { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "reactstrap";
import ReactStars from "react-rating-stars-component";

function MovieCard(props) {
  const {
    className,
    image,
    title,
    rating,
    vote,
    overview,
    release,
    forAge,
  } = props;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div>
      {/* <Card className="movie-card-container" onClick={toggle}>
        <CardImg src={image} />
        <CardBody className="card-body">
          <div className="rating-review-total">
            <CardSubtitle className="card-subtitle">
              <ReactStars size={15} value={rating} edit={false} isHalf={true} />
            </CardSubtitle>
            <CardSubtitle>{vote} votes</CardSubtitle>
          </div>
          <CardTitle>
            <b>{title}</b>
          </CardTitle>
        </CardBody>
      </Card> */}
      <div onClick={toggle}>
        <img src={image} alt="movie-img-rate" />
        <ReactStars size={15} value={rating} edit={false} isHalf={true} />
        <span>{vote} votes</span>
        <h5>{title}</h5>
      </div>
      <div className="modal">
        <Modal isOpen={modal} toggle={toggle} className={className}>
          <ModalHeader toggle={toggle}>{title}</ModalHeader>
          <div className="modal-body-popUp">
            <img src={image}  alt="movie-img-header" />
            <ModalBody>
              <b>
                <u>Overview</u>
              </b>
              : {overview}
              <br />
              <b>
                <u>Release Date</u>:{" "}
              </b>{" "}
              {release}
              <br />
              <b>
                <u>Age</u>
              </b>
              : {forAge ? "Adult" : "All Ages"}
            </ModalBody>
          </div>
          <ModalFooter className="rating-review-total">
            <ReactStars size={24} value={rating} edit={false} isHalf={true} />
            <Button color="secondary" onClick={() => alert("thanks for waiting! it's still under developed :)")}>
              See Reviews
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
}

export default MovieCard;
