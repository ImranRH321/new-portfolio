import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Components/Home/Home/Home";
import Skills from "../Components/Home/Skills/Skills";
import Conact from "../Components/Conact/Conact";
import Project from "../Components/Project/Project";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            { path: '/', element: <Home></Home> }
            , { path: '/skills', element: <Skills></Skills> }
            , { path: '/conact', element: <Conact></Conact> }
            , { path: '/projects', element: <Project></Project> }
        ]
    },
]);
