import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import App from './App.jsx'
import ErrorPage from './Page_Error.jsx'
import Home from './views/Home.jsx'
import Anime from './views/Anime.jsx'
import AnimeDetail from './views/AnimeDetail.jsx'
import Manga from './views/Manga.jsx'
import './css/style.css'
import './css/custom.css'
import './css/remixicon.css'
import './js/script.js'
import 'video-react/dist/video-react.css'

 const router = createBrowserRouter([
   {
     path: "/",
     element: <App />,
     errorElement: <ErrorPage />,
     children : [
        {
        path: "/",
        element: <Home />
        },
        {
        path: "Manga",
        elemen: <Manga />
        },
        {
        path: "Anime",
          element: <Anime />
        }
       ],
   },
   {
        path: "Anime/:animeid",
          element: <AnimeDetail />
      },
   ])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
    <RouterProvider router={router} /> 
  </React.StrictMode>,
)
