import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";

import "./index.css";
import Homepage from "./pages/homepage";
import NotFound from "./pages/404";
import Aboutpage from "./pages/about";
import Servicespage from "./pages/services";
import Contactpage from "./pages/contact";
import FrequentlyAskedQuestionsPage from "./pages/faq";

const router = createBrowserRouter([
    {
        path: "*",
        element: <NotFound />,
    },
    {
        path: "/",
        element: <Homepage />,
    },
    {
        path: "/about",
        element: <Aboutpage />,
    },
    {
        path: "/services",
        element: <Servicespage />,
    },
    {
        path: "/contact",
        element: <Contactpage />,
    },
    {
        path: "/faqs",
        element: <FrequentlyAskedQuestionsPage />,
    },
]);

ReactDOM.createRoot(document.getElementById("root") as any).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
