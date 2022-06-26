import React, { useEffect } from "react";
import Homesc from "./Homesc";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import Editprofile from "./compenents/Editprofile";
function App() {
  const userr = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const masuk = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        dispatch(
          login({
            uid: user.uid,
            email: user.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return masuk;
  }, [dispatch]);

  return (
    <div className="app">
      <BrowserRouter>
        {userr ? (
          <Routes>
            <Route index path="/" element={<Homesc />} />
            <Route path="/profile" element={<Editprofile />} />
          </Routes>
        ) : (
          <Login />
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
