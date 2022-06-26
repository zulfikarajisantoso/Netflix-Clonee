import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Nav() {
  const [show, setshow] = useState(false);
  const navigate = useNavigate();

  const jika = () => {
    if (window.scrollY > 100) {
      setshow(true);
    } else setshow(false);
  };
  window.addEventListener("scroll", jika);

  return (
    <div className={` fixed  w-full h-18   anim ${show && "bg-black"} `}>
      <div className="flex justify-between px-10 py-5">
        <img
          onClick={() => navigate("/")}
          src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
          alt=""
          className="w-32 object-contain  cursor-pointer "
        />
        <img
          onClick={() => navigate("/profile")}
          src="https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png"
          alt=""
          className="h-10 w-10 rounded-full object-contain cursor-pointer"
        />
      </div>
    </div>
  );
}

export default Nav;
