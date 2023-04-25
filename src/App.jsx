import React from "react";
import './App.css'
import { useEffect, useState } from "react";
import { useRoutes, Link } from 'react-router-dom';
import Create from './routes/CreateChar';
import Gallery from './routes/CharGallery';
import Home from './routes/Home';
import Edit from './routes/EditChar';
import ErrorPage from './routes/error-page'
import DetailView from "./routes/DetailView";

import { supabase } from "./client";

const App = () => {
   // Update this to deal with the posts from the database
   const [posts, setPosts] = useState([]);

   // Set up routes
   let element = useRoutes([
      {
         path: "/",
         element: <Home />,
         errorElement: <ErrorPage />,
      }, 
      {
         path:"/",
         element: <Home />
      },
      {
         path: "/create",
         element: <Create />
      },
      {
         path: "/gallery",
         element: <Gallery posts={posts} />,
      },
      {
         path: "/edit/:id",
         element: <Edit posts={posts} />,
      },
      {
         path: '/detail/:id',
         element: <DetailView data={posts} />
      }
   ]);

   useEffect(() => {
      const fetchData = async () => {
         const {data} = await supabase
         .from('Posts')
         .select()
         .order('created_at', {ascending: false})
         
         setPosts(data)
      }
      fetchData();
   }, []);
   console.log(posts)
   return (
      <div className="App">
         <div className="header">
            <img src="index.png" alt="" />
            <h1 className="pingus">Footy Forum for the Fun</h1>
            <div className="content">
               <Link to="/"><button className="homeBtn"> Home </button></Link>
               <Link to="/create"><button className="createBtn"> Create a Post </button></Link>
               <Link to="/gallery"><button className="galleryBtn"> Post Gallery </button></Link>
            </div>
         </div>
         {element}
      </div>
   )

}

export default App;