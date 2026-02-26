import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/1_Home";
import ContextReducer from "../pages/5_ContextReducer";
import ReactHook from "../pages/3_ReactHook";
import ReactQuery from "../pages/6_ReactQuery";
import Zustand from "../pages/7_Zustand";
import Zod from "../pages/8_Zod";
import ReactHookForm from "../pages/9_ReactHookForm";
import CustomHook from "../pages/4_CustomHook";
import FramerMotion from "../pages/11_FramerMotion";
import Tailwind from "../pages/10_Tailwind";

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
            {
                path: "/react-hook-form",
                element: <ReactHookForm />
            },
            {
                path: "/custom-hook",
                element: <CustomHook/>
            },
            {
                path: "/framer-motion",
                element: <FramerMotion />
            },
            {
                path: "/tailwind",
                element: <Tailwind />
            },
            {
                path: "*",
                element: <h1>404 Not Found</h1>
            },
        ]
    }
])