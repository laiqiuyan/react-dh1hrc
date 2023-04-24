import React from "react";
import { Route, RouterProvider, Routes } from "react-router-dom";
import Layout from "./components/Layout.js";
import Homepage from "./pages/Homepage.js";
import Profilepage from "./pages/Profilepage.js";
import AuthPage from "./pages/AuthPage.js";
const App = () => {
  return (
    <div>
      <Layout>
        {/* App只关注Routes */}
        <Routes>
          <Route path={"/"} element={<Homepage />}></Route>
          <Route path={"profile"} element={<Profilepage />}></Route>
          <Route path={"auth"} element={<AuthPage />}></Route>
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
