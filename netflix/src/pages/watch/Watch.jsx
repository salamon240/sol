import { ArrowBack } from "@material-ui/icons";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./watch.scss";
function Watch() {
  const location = useLocation();
  const movie = location.state.data;
  console.log(location,movie)
  return (
    <div className="watch">
      <Link to="/">
      <div className="back">
        <ArrowBack  />
        home
      </div>
      </Link>
      <video
        className="video"
       autoPlay
       Progress
       controls
        src={movie.trailer}
      ></video>
    </div>
  );
}

export default Watch;
