import React, { useState } from "react";
import Signup from "./Signup";

function Login() {
  const [sign, setsign] = useState(false);

  return (
    <div className="relative loginpage">
      <div className="">
        <img
          src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
          alt=""
          className="w-32 object-contain fixed left-6 mt-7 "
        />
        <button
          onClick={() => setsign(true)}
          className="text-white bg-red-500 h-9 w-24 font-bold fixed right-6 mt-7"
        >
          Sign In
        </button>
        <div className="gradientlogin"></div>
      </div>
      <div className="absolute text-white ml-auto mr-auto alig top-[30%] px-32 z-1 w-full    ">
        {sign ? (
          <div>
            <Signup />
          </div>
        ) : (
          <>
            <h1 className="font-bold text-7xl">
              Film, acara TV tak terbatas, dan lebih banyak lagi.
            </h1>
            <h2 className="text-4xl font-semibold my-5">
              Tonton di mana pun. Batalkan kapan pun
            </h2>
            <h4 className="text-2xl">
              Siap menonton? Masukkan email untuk membuat atau memulai lagi
              keanggotaanmu.
            </h4>
            <div className="mt-4 p-3">
              <input
                type="email"
                className="p-5 w-4/12 outline-none text-black"
                placeholder="Alamat Email"
              />
              <button
                onClick={() => setsign(true)}
                className="p-5 bg-red-500 text-[16px] w-36 font-semibold"
              >
                Mulai
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
