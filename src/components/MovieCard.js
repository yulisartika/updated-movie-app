import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import ReactStars from "react-rating-stars-component";

function MovieCard(props) {
  const { image, title, rating, vote } = props;
  return (
    <div>
      <Card className="movie-card-container">
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
      </Card>
    </div>
  );
}

export default MovieCard;
