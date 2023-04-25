import React from "react"
import "./Card.css"
import { Link } from "react-router-dom"

const Card = (props) => {
   return (
      <div className="Card" >
         <h2 className="name">Title: {props.title}</h2>
         <p className="age">Content: {props.content}</p>
         <Link to={'/edit/'+props.id}><button className="edit">Edit Post</button></Link>
      </div>
   )
}

export default Card;