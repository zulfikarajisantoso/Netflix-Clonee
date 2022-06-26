import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useRef } from "react";
import { auth } from "../firebase";

function Signup() {
  const emailref = useRef(null);
  const passref = useRef(null);

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      emailref.current.value,
      passref.current.value
    )
      .then((datanya) => {
        // console.log(datanya);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  const signin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(
      auth,
      emailref.current.value,
      passref.current.value
    )
      .then((datanya) => {
        // console.log(datanya);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="max-w-[400px]  mx-auto  loginback">
      <form action="" className="flex flex-col space-y-4 ">
        <h1 className="text-4xl font-semibold text-left">Sign In</h1>
        <input
          ref={emailref}
          type="email"
          className="p-2 outline-none rounded-md text-black"
          placeholder="Email"
        />
        <input
          ref={passref}
          type="password"
          className="p-2 outline-none rounded-md text-black"
          placeholder="Password"
        />
        <button
          onClick={signin}
          type="submit"
          className="bg-red-600 h-12 rounded-md mt-10"
        >
          Sign In
        </button>

        <h6 className="text-[14px]">
          <span className="text-stone-400">Belum punya akun? </span>
        </h6>
        <button
          onClick={register}
          type="submit"
          className="bg-red-600 h-12 rounded-md mt-10"
        >
          Daftar
        </button>
      </form>
    </div>
  );
}

export default Signup;
