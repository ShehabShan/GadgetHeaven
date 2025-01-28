import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "../Component/ErrorPage";
import Home from "../Layout/Home";
import MainLayout from "../Layout/MainLayout";
import Login from "../Pages/Authentication/Login";
import UserDashboard from "../Layout/UserDashboard";
import AdminDashboard from "../Layout/AdminDashboard";
import ModaratorDashboard from "../Layout/ModaratorDashboard";
import MyProfile from "../Pages/UserPage/MyProfile/MyProfile";
import MyApplication from "../Pages/UserPage/MyApplication/MyApplication";
import MyReviews from "../Pages/UserPage/MyReviews/MyReviews";
import ManageScholarships from "../Pages/ModaratorPages/ManageScholarships/ManageScholarships";
import AllReviews from "../Pages/ModaratorPages/AllReviews/AllReviews";
import AllAppliedScholarship from "../Pages/ModaratorPages/AllAppliedScholarship/AllAppliedScholarship";
import AddScholarship from "../Pages/ModaratorPages/AddScholarship/AddScholarship";
import ManageAppliedApplication from "../Pages/AdminPages/ManageAppliedApplication/ManageAppliedApplication";
import ManageUsers from "../Pages/AdminPages/ManageUsers/ManageUsers";
import ManageReview from "../Pages/AdminPages/ManageReviews/ManageReview";
import AllScholership from "../Pages/AllScholership/AllScholership";
import ScholarshipDetails from "../Pages/ScholarshipDetails/ScholarshipDetails";
import AddReview from "../Pages/AddReview/AddReview";
import EditScholarship from "../Pages/ModaratorPages/ManageScholarships/EditScholarship";
import Registation from "../Pages/Authentication/Registation";
import PrivateRoute from "./PrivetRouter";
import ModaretorRoute from "./ModaretorRoute";
import AdminRoute from "./AdminRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "allScholership",
        element: <AllScholership></AllScholership>,
      },
      {
        path: "allScholership/:id",
        element: (
          <PrivateRoute>
            <ScholarshipDetails></ScholarshipDetails>
          </PrivateRoute>
        ),
      },

      {
        path: "signIn",
        element: <Login></Login>,
      },
      {
        path: "registration",
        element: <Registation></Registation>,
      },
    ],
  },
  {
    path: "userDashboard",
    element: <UserDashboard></UserDashboard>,
    children: [
      {
        path: "myProfile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "myApplication",
        element: <MyApplication></MyApplication>,
      },
      {
        path: "myReviews",
        element: <MyReviews></MyReviews>,
      },
    ],
  },
  {
    path: "modaratorDashboard",
    element: (
      <ModaretorRoute>
        <ModaratorDashboard></ModaratorDashboard>
      </ModaretorRoute>
    ),
    children: [
      {
        path: "myProfile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "manageScholarships",
        element: <ManageScholarships></ManageScholarships>,
      },
      {
        path: "editScholarship/:id",
        element: <EditScholarship></EditScholarship>,
      },
      {
        path: "myReviews",
        element: <AllReviews></AllReviews>,
      },
      {
        path: "allAppliedScholarships",
        element: <AllAppliedScholarship></AllAppliedScholarship>,
      },
      {
        path: "addScholarships",
        element: <AddScholarship></AddScholarship>,
      },
    ],
  },
  {
    path: "adminDashboard",
    element: (
      <AdminRoute>
        <AdminDashboard></AdminDashboard>
      </AdminRoute>
    ),
    children: [
      {
        path: "adminProfile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "addScholarships",
        element: <AddScholarship></AddScholarship>,
      },
      {
        path: "manageScholarships",
        element: <ManageScholarships></ManageScholarships>,
      },
      {
        path: "manageAppliedApplication",
        element: <ManageAppliedApplication></ManageAppliedApplication>,
      },
      {
        path: "manageUsers",
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: "manageReviews",
        element: <ManageReview></ManageReview>,
      },
    ],
  },
]);

export default router;
