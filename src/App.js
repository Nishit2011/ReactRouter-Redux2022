import logo from "./logo.svg";
import "./App.css";
import Posts from "./components/Posts";
import Photos from "./components/Photos";
import Error from "./components/Error";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import SharedLayout from "./components/SharedLayout";
import SinglePost from "./components/SinglePost";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import React, { useState } from "react";

export const UserContext = React.createContext();
function App() {
  const [user, setUser] = useState({ uname: "" });
  return (
    <div>
      <UserContext.Provider value={user}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              {/* <Route index element={<Home />}></Route> */}
              <Route
                path="/"
                element={
                  <ProtectedRoute user={user}>
                    <Home user={user} />
                  </ProtectedRoute>
                }
              />

              <Route path="login" element={<Login setUser={setUser} />}></Route>
              <Route path="posts" element={<Posts />}></Route>

              <Route path="posts/:postId" element={<SinglePost />}></Route>
              <Route path="photos" element={<Photos />}></Route>
              {/* <Route
                path="logout"
                element={<Logout setUser={setUser} />}
              ></Route> */}
              <Route path="*" element={<Error />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
