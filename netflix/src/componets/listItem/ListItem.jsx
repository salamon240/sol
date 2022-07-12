import { Add, PlayArrow, ThumbDown, ThumbUp } from "@material-ui/icons";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";import "./listItem.scss";
const ListItem = ({index,item}) => {
  const [isHovered, setIsHover] = useState(false);
  const [movie, setMovies] = useState({});

  
 useEffect(()=>{
   const movieList=async()=>{
    try{
      const res=await axios.get("/movies/find/"+item ,{
        headers:{
          token:"bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNGVlMDY5NzAwMjlhNzczN2IyMmRhOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MjE5NDcyMCwiZXhwIjoxNjUyNjI2NzIwfQ.zVH1w8fodIEGeUa2GdIcFnRA4ZVKC3sa1m33_IXsXqs"

        }
       }
       
       );
       setMovies(res.data)
       
 
    }catch(err){
      console.log(err)
    }
   }
   movieList();

 },[item])
  return (
    <Link to="/watch" state={{ data: movie }}>
    <div
      className="listItem"
      style={{left: isHovered && index * 225-50+index*2.5}}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      
    >
      <img
        alt="avengers: endgame poster"
        src={movie.img}
      ></img>
      {isHovered && (
        <>
        <video src={movie.trailer} autoPlay={true} loop></video>
      <div className="itemInfo">
        <div className="icons">
          <PlayArrow className="icon"/>
          <Add className="icon"/>
          <ThumbUp  className="icon"/>
          <ThumbDown className="icon"/>
        </div>
      </div>
      <div className="itemInfoTop">
        <span>1 hour</span>
        <span className="limit">+{movie.limit}</span>
        <span>{movie.year}</span>
      </div>
      <div className="desc">
        {movie.desc}
      </div>
      <div className="genre">{movie.genre}</div>
   
        </>
      )}
       </div>
       </Link>
      
  );
};

export default ListItem;
