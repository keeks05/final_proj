import React, {Component, useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import './charView.css'

const charView = (props) => {
   const {id} = useParams();
   const post = props.data.filter((post) => post.id === parseInt(id))[0];

   return (
      // Need to fix this part to deal with posts
      <div>
         <h2>Summary of Footy Post</h2>
         <p className="summary">
            Title: {post.Title}
            <br></br>
            Content: {post.Content}
         </p>
      </div>
   );
};

export default charView;