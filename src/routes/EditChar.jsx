import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { supabase } from "../client";
import './EditChar.css'

const EditChar = (props) => {
   const [title, setTitle] = useState('')
   const [content, setContent] = useState(0)
   
   const {id} = useParams();
   console.log(props)
   const post = props.posts.filter((post) => post.id === parseInt(id))[0];

   const updateChar = async(e) => {
      e.preventDefault();

      await supabase
         .from('Posts')
         .update({Title: title, Content: content})
         .eq('id', id)
      
         window.location = "/";
   }

   const deleteChar = async (e) => {
      e.preventDefault();
      await supabase
         .from('Posts')
         .delete()
         .eq('id', id);

      window.location = "/";

   }
   return (
      <div className="Edit">
         <div className="info">
         <h2>Update your Footy Post</h2>
         <div className="container"></div>
         <h4>Current Footy Post Information:</h4>
            <div className="card">
               <p>Title: {post.Title}</p>
               <p>Content: {post.Content}</p>
            </div>
         </div>
         <div className="update">
         <form onSubmit={updateChar}>
         <label>Title
            <input 
               type="text" 
               id="name" 
               name="name"
               onChange={(e) => setTitle(e.target.value)}
               required
               />
            <br />
         </label>
         <label><span className="space">Content</span>
            <textarea  
               id="content" 
               name="content"
               rows="4" 
               cols="50"
               onChange={(e) => setContent(e.target.value)}
               required  
            />
         </label>
         
         <br></br>
         <input type="submit" value="Submit" id="submit"/>
         <button className="deleteButton" onClick={deleteChar}>Delete</button>
         </form>
         </div>
         
      </div>
   )
}

export default EditChar;