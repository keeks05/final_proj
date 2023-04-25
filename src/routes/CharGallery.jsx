import React, {useState, useEffect} from "react"
import Card from '../components/Card'
import { Link } from "react-router-dom";

const CharGallery = (props) => {
   const [posts, setCharacters] = useState([]);

   useEffect(() => {
      setCharacters(props.posts);
   }, [props]);
   return (
      <div className="ReadPosts">
         {
            posts && posts.length > 0 ?
            posts.map((post) =>
            <Link to={'/detail/'+post.id} key={post.id}>
                  <Card id={post.id} title={post.Title} content={post.Content} key={post.id}/>
            </Link>
            ) : <h2>{'There are no posts yet'}</h2>
         }
      </div>
   )
}

export default CharGallery;