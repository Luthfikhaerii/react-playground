import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/1_Home";
import ContextReducer from "../pages/3_ContextReducer";
import ReactHook from "../pages/2_ReactHook";
import ReactQuery from "../pages/5_ReactQuery";
import Zustand from "../pages/4_Zustand";
import Zod from "../pages/6_Zod";
import ReactHookForm from "../pages/7_ReactHookForm";
import CustomHook from "../pages/8_CustomHook";

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
                path: "*",
                element: <h1>404 Not Found</h1>
            },
        ]
    }
])