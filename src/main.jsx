import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home.jsx";
import Collection from "./routes/Collection.jsx";
import Jewelry from "./routes/Jewelry.jsx";
import Accessories from "./routes/Accessories.jsx";
import Extras from "./routes/Extras.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />
      },
      // change this to a path to something that would include the side bar & navbar and the children outlet would be the display of prdoducts 
      { path: "/jewelry",
    element: <Jewelry />,
    children: [
      {
        path: "/jewelry",
        element: <Jewelry/>
      },
      {
        path: "/jewelry/collections",
        element: <Collection />
      },
      
    ]

  },
  {
    path: "/accessories",
    element: <Accessories /> ,
    children: [
      {
        path:"/accessories",
        element: <Accessories />
      },
      {
        path: "/accessories/extras",
        element: <Extras />
      }
    ]
  }
    ],
  },
  

  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
