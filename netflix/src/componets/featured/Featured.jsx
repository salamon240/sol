import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import "./featured.scss";
import axios from 'axios'

function Featured({type}) {
  const [conatant,setContant]=useState({})
  useEffect(()=>{
    const getRandomCntant=async ()=>{
   
      try{
        const conantData=await axios.get(`/movies/random?type=${type}`,{
          headers:{
            token:"bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNGVlMDY5NzAwMjlhNzczN2IyMmRhOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MjE5NDcyMCwiZXhwIjoxNjUyNjI2NzIwfQ.zVH1w8fodIEGeUa2GdIcFnRA4ZVKC3sa1m33_IXsXqs"
  
          }
        });
      setContant(conantData.data[0])

      }catch(err){
        console.log(err)
      }
     
    }
    getRandomCntant()
  },[])
  return (
    <div className="featured">
        {type&&(
            <div className="category">
                <span>{type==="movie"?"Movies":"Series"}</span>
                <select name="genre" id="genre">
                    <option >Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="thrller">Thrller</option>
                    <option value="westren">Western</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>
                </select>
            </div>
        )}
      <img
        src={conatant.img}
        alt={conatant.titel}
      ></img>

      <div className="info">
        <img
       
          src={conatant.imgSm}
          alt="Black Widow"
        />
        <span className="desc">
          {conatant.desc}
        </span>
        <div className="button">
          <button className="play">
            <PlayArrow />
            <span>play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>info</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Featured;
