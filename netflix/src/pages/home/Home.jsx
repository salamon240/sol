import React, { useEffect, useState } from "react";
import "./home.scss";
import Navbar from "../../componets/navbar/Navbar";
import Featured from "../../componets/featured/Featured";
import List from "../../componets/list/List";
import axios from "axios";
function Home({ type }) {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomList = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${genre ? "genre=" + genre : ""}`,
          {
            headers: {
              token:
                "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNGVlMDY5NzAwMjlhNzczN2IyMmRhOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MjE5NDcyMCwiZXhwIjoxNjUyNjI2NzIwfQ.zVH1w8fodIEGeUa2GdIcFnRA4ZVKC3sa1m33_IXsXqs",
            },
          }
        );
        setLists(res.data);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomList();
  }, [type, genre]);

  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      {lists.map((list) => (
        <List list={list} />
      ))}
    </div>
  );
}

export default Home;
