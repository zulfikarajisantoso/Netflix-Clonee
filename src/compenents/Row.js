import { async } from "@firebase/util";
import React, { useEffect, useState } from "react";
import axios from "../axios";

function Row({ title, fetchurl, isLargeRow }) {
  const [movies, setmovies] = useState([]);
  const [ambilid, setambilid] = useState("");

  useEffect(() => {
    async function ambildatanya() {
      const req = await axios.get(fetchurl);
      setmovies(req.data.results);
      return req;
    }

    ambildatanya();
  }, [fetchurl]);

  const baseimage = "http://image.tmdb.org/t/p/original/";

  return (
    <div className="row">
      <div className="flex  justify-between px-3 items-center">
        <h2 className="text-white text-2xl font-2xl w-screen">{title} :</h2>
        <h5 className="text-white text-[16px] w-7/12 text-right">
          {" "}
          {ambilid && `${ambilid}`}
        </h5>
      </div>

      <div className="haha flex overflow-y-hidden overflow-x-scroll p-[20px] relative">
        {movies.map(
          (dapat, i) =>
            ((isLargeRow && dapat.poster_path) ||
              (!isLargeRow && dapat.backdrop_path)) && (
              <>
                <img
                  onClick={() => setambilid(dapat.name)}
                  className={`max-h-[150px] object-contain mr-[10px] w-full  tras hover:transform hover:scale-[1.08] opacity-[1]   ${
                    isLargeRow &&
                    "max-h-[350px] hover:transform hover:scale-[1.10] opacity-[1]"
                  }`}
                  key={dapat.id}
                  src={`${baseimage}${
                    isLargeRow ? dapat.poster_path : dapat.backdrop_path
                  }`}
                  alt={dapat.name}
                />
              </>
            )
        )}
      </div>
    </div>
  );
}

export default Row;
