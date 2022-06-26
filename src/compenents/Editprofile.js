import React, { useState } from "react";
import { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";
import Nav from "./Nav";
import { auth } from "../firebase";

function Editprofile() {
  const user = useSelector(selectUser);

  const [standard, setstandard] = useState(false);
  const [bas, setbas] = useState(false);
  const [pemium, setpemium] = useState(false);

  const stanfunc = () => {
    setstandard(true);
    setbas(false);
    setpemium(false);
  };

  const basfunc = () => {
    setstandard(false);
    setbas(true);
    setpemium(false);
  };

  const pemfunc = () => {
    setstandard(false);
    setbas(false);
    setpemium(true);
  };

  const waktusekarang = (d) => {
    const bulan = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const hari = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = hari[d.getDay()],
      date = d.getDate(),
      month = bulan[d.getMonth()],
      year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div className="h-screen text-white ">
      <Nav />
      <div className="flex flex-col w-6/12 ml-auto mr-auto max-w-[800px] pt-32">
        <h1 className="mb-6 text-3xl font-bold">Edit Profile</h1>
        <div className="flex">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png"
            alt=""
            className="w-14 h-14 object-contain"
          />
          <div className="w-full ml-7">
            <h3 className="text-white bg-stone-600 p-3 text-[15px] ">
              {user.email}
            </h3>
            <h3 className="border-b-2 text-[17px] font-semibold border-stone-700 my-2">
              Plans (Current Plan:{" "}
              <span>
                {standard && "Standard"}
                {bas && "Basic"}
                {pemium && "Premium"}
              </span>
              )
            </h3>
            <h6 className="text-[14px] mt-[20px]">
              Renewal date: {waktusekarang(new Date())}
            </h6>
            <div className="p-4 flex justify-between text-stone-300 hover:text-white ">
              <div className=" font-extralight text-[14px]">
                <h3>Netflix Standard</h3>
                <h6>1080p</h6>
              </div>
              {standard ? (
                <button className="bg-zinc-500 text-[15px] font-semibold px-6 ">
                  Current Package
                </button>
              ) : (
                <button
                  onClick={stanfunc}
                  className="bg-red-500 text-[15px] font-semibold px-6 "
                >
                  Subscribe
                </button>
              )}
            </div>
            <div className="p-4 flex justify-between text-stone-300 hover:text-white ">
              <div className=" font-extralight text-[14px]">
                <h3>Netflix Basic</h3>
                <h6>480p</h6>
              </div>
              {bas ? (
                <button className="bg-zinc-500 text-[15px] font-semibold px-6 ">
                  Current Package
                </button>
              ) : (
                <button
                  onClick={basfunc}
                  className="bg-red-500 text-[15px] font-semibold px-6 "
                >
                  Subscribe
                </button>
              )}
            </div>
            <div className="p-4 flex justify-between text-stone-300 hover:text-white ">
              <div className=" font-extralight text-[14px]">
                <h3>Netflix Premium</h3>
                <h6>4k+HDR</h6>
              </div>

              {pemium ? (
                <button className="bg-zinc-500 text-[15px] font-semibold px-6 ">
                  Current Package
                </button>
              ) : (
                <button
                  onClick={pemfunc}
                  className="bg-red-500 text-[15px] font-semibold px-6 "
                >
                  Subscribe
                </button>
              )}
            </div>
            <button
              className="bg-red-500 w-full h-10 mt-7 font-semibold"
              onClick={() => auth.signOut()}
            >
              Sign out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Editprofile;
