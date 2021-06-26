import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// import MovieCard from "../../components/MovieCard";
import {
  getMovieDetail,
  getMovieReviews,
} from "../../redux/actions/movieAction";

import { image_baseUrl } from "../../api/API";
import noImageFound from "../../assets/no_image_found.png";
import { Spinner } from "reactstrap";
import ReactStars from "react-rating-stars-component";

const MovieDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { movieDetail, movieReviews } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getMovieDetail(id));
    dispatch(getMovieReviews(id));
  }, [dispatch, id]);

  // console.log(id);
  // console.log(
  //   movieDetail !== null &&
  //     movieDetail.genres.map((item) => item.name).join(", ")
  // );

  return (
    <div>
      <h3 style={{ textAlign: "center", textDecoration: "underline" }}>
        HAS NOT BEEN STYLED, JUST INSERTED THE CONTENT, WILL BE STYLED LATER! :)
      </h3>
      {movieDetail !== null ? (
        <div className="movie-item">
          <span>
            <h1>{movieDetail.title} </h1>
            <h2>({movieDetail.release_date.split("-")[0]})</h2>
          </span>
          <img
            src={
              movieDetail.poster_path !== null
                ? `${image_baseUrl}${movieDetail.poster_path}`
                : noImageFound
            }
            alt="movie poster"
          />
          <div>
            <h3>
              {movieDetail.homepage !== undefined && (
                <a href={movieDetail.homepage}>Watch the Trailer</a>
              )}
            </h3>

            <ReactStars
              size={15}
              value={movieDetail.vote_average / 2}
              edit={false}
              isHalf={true}
            />
            <p>{movieDetail.runtime} minutes</p>
            <p>{movieDetail.vote_count} votes</p>
            <p>Release Date: {movieDetail.release_date}</p>
            <p>
              Genres: {movieDetail.genres.map((item) => item.name).join(", ")}
            </p>
            <p>
              Production Company: {movieDetail.production_companies[0].name} (
              {movieDetail.production_companies[0].origin_country})
            </p>
          </div>{" "}
          <br />
          <h2>Overview</h2>
          <p>{movieDetail.overview}</p>
          <div>
            <h3>REVIEWS:</h3>
            {movieReviews.length !== 0 &&
              movieReviews.map((item) => (
                <>
                  {/* <img
                      src={`${image_baseUrl}${item.author_details.avatar_path}`}
                      alt="avatar"
                    /> */}
                  <span style={{ display: "flex" }}>
                    <h5>{item.author} </h5>
                    <ReactStars
                      size={15}
                      value={item.author_details.rating / 2}
                      edit={false}
                      isHalf={true}
                    />
                  </span>
                  <p>Created at: {item.created_at.split("T")[0]}</p>
                  <p>
                    {item.content.slice(0, 500)} <a href={item.url}> . . . .</a>
                  </p>
                </>
              ))}
          </div>
        </div>
      ) : (
        <Spinner color="danger" className="spinner" />
      )}
    </div>
  );
};

export default MovieDetail;
