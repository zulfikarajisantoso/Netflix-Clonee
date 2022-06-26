import React from "react";
import Banner from "./compenents/Banner";
import Nav from "./compenents/Nav";
import Row from "./compenents/Row";
import requests from "./Request";

function Homesc() {
  return (
    <div>
      {/* NAv */}
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchurl={requests.netflixoriginal}
        isLargeRow
      />
      <Row title="Trending Now" fetchurl={requests.trending} />
      <Row title="Top Rated" fetchurl={requests.toprated} />
      <Row title="Action Movies" fetchurl={requests.actionmovie} />
      <Row title="Comedy Movies" fetchurl={requests.comedymovie} />
      <Row title="Horror Movies" fetchurl={requests.horrormovie} />
      <Row title="Romance Movies" fetchurl={requests.romancemovie} />
      <Row title="Documentaries" fetchurl={requests.documentermovie} />
      <div className="py-2 px-8  flex justify-between items-center">
        <img
          src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
          className="w-12 h-12 object-contain"
          alt=""
        />
        <div className="text-stone-200 text-[13px] font-semibold">
          © 2022 | ZASSL . <span>All rights reserved</span>
        </div>
      </div>
    </div>
  );
}

export default Homesc;
