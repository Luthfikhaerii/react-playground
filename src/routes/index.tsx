import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ContextReducer from "../pages/ContextReducer";
import ReactHook from "../pages/ReactHook";
import ReactQuery from "../pages/ReactQuery";
import Zustand from "../pages/Zustand";
import Zod from "../pages/Zod";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/react-hook",
                element: <ReactHook />
            },
            {
                path: "/context-reducer",
                element: <ContextReducer />
            },
            {
                path: "/react-query",
                element: <ReactQuery />
            },
            {
                path: "/zustand",
                element: <Zustand />
            },
            {
                path: "/zod",
                element: <Zod />
            },
        ]
    }
])