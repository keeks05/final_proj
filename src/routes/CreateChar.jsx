import {React} from "react";
import './CreateChar.css'
import { supabase } from "../client"
import { useState } from "react";

const createChar = () => {
   const [title, setTitle] = useState('')
   const [content, setContent] = useState('')

   // Need to fix this so that its viable for the posts 
   const createCharacter = async(e) => {
      e.preventDefault();
      await supabase
         .from ('Posts')
         .insert({Title: title, Content: content})
         .select();
      
      window.location = '/';
   }
   return (
      <div className="create">
         <form onSubmit={createCharacter}>
         <div className="wrapper-name">
         <label><span className="space">Title</span>
            <input 
               type="text" 
               id="title" 
               name="title"
               onChange={(e) => setTitle(e.target.value)}
               required
               />
            <br />
         </label>
         </div>
         <div className="wrapper-textarea">
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
         </div>
         
         
         <input type="submit" value="Submit" id="submit"/>
         </form>
      </div>
   )

}


export default createChar