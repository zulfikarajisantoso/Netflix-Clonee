import axios from "../axios";
import React, { useEffect, useState } from "react";
import requests from "../Request";

function Banner() {
  const [movie, setmovie] = useState([]);

  useEffect(() => {
    async function ambildata() {
      const req = await axios.get(requests.netflixoriginal);
      setmovie(
        req.data.results[
          Math.floor(Math.random() * req.data.results.length - 1)
        ]
      );
      // return req;
    }

    // setInterval((  ) => {
    ambildata();
    // }, 30000);
  }, []);

  console.log(movie);

  function truncate(subs, n) {
    return subs?.length > n ? subs.substr(0, n - 1) + " ..." : subs;
  }

  return (
    <div
      className=" object-contain relative "
      style={{
        backgroundImage: `url("http://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="ml-20 pt-72 text-white gap-3">
        <h6 className="text-6xl font-extrabold">{movie?.name}</h6>
        <div className="space-x-2 my-6">
          <button className="w-36 h-14 text-2xl bg-neutral-900 text-white font-bold hover:bg-white hover:text-black">
            Play
          </button>
          <button className="w-36 h-14 text-2xl bg-neutral-800 text-white font-bold hover:bg-white hover:text-black">
            My List
          </button>
        </div>
        <h6 className="mt-5 text-1xl w-80">{truncate(movie?.overview, 150)}</h6>
        {/* <h6 className="mt-3 text-1xl w-80">{movie?.overview}</h6> */}
      </div>
      <div className="fadebottom" />
    </div>
  );
}

export default Banner;
