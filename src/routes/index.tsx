import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Mypage from "./pages/Mypage";
import Review from "./pages/Review";
import Write from "./pages/Write";
import Edit from "./pages/Edit";
import NotFound from "./pages/NotFound";
import TermsOfService from "./pages/TermsOfService";
import Share from "./pages/Share";
import Collaborate from "./pages/Collaborate";
import Likes from "./pages/Likes";
import Theme from "./pages/Theme";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Information from "./pages/Information";
import Login from "./pages/Login";
import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            { index: true, element: <Home /> },
            { path: "mypage", element: <Mypage /> },
        ],
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/mypage",
        children: [
            {
                path: "collaborate",
                element: <Collaborate />,
            },
            {
                path: "share",
                element: <Share />,
            },
            {
                path: "likes",
                element: <Likes />,
            },
            {
                path: "theme",
                element: <Theme />,
            },
            {
                path: "terms-of-service",
                element: <TermsOfService />,
            },
            {
                path: "privacy-policy",
                element: <PrivacyPolicy />,
            },
            {
                path: "information",
                element: <Information />,
            },
        ],
    },
    {
        path: "/review/:placeId",
        element: <Review />,
    },
    {
        path: "/write",
        element: <Write />,
    },
    {
        path: "/edit/:postId",
        element: <Edit />,
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);

export default function Router() {
    return (
        <div className="max-w-md h-screen m-auto">
            <RouterProvider router={router} />
        </div>
    );
}
