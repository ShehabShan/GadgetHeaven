import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import GadgetDetails from "../pages/GadgetDetails";
import Gadget from "../layouts/Gadget";
import Dashboard from "../pages/Dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "gadget",
    element: <Gadget></Gadget>,
    children: [
      {
        path: "gadget/:id",
        element: <GadgetDetails></GadgetDetails>,
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
      },
    ],
  },
]);

export default router;
