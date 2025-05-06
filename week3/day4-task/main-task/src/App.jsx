import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Rootlayout from "./layouts/RootLayout";
import Profile from "./pages/Profile";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Rootlayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="users/:id" element={<Profile />} />
      </Route>
    )
  );
  return <RouterProvider router={router}>App</RouterProvider>;
};

export default App;
