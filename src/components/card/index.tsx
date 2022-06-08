import "./index.scss"
import React from "react";
import {Post} from "../../state/actions";
import {Link} from "react-router-dom";

const Card: React.FC<Post> = ({id, title, body, tags, reactions}) => {

  function showBodyText(str: string | null): string {
    if (str == null) return "";
    if (str.length > 50) {
      if (str.charAt(50) === '.' || str.charAt(50) === ',') {
        return str.substring(0, 49) + "..."
      } else {
        return str.substring(0, 50) + "..."
      }
    }

    return str;
  }

  return (
    <div className="card">
      <Link to={`/posts/${id}`}>
        <div className="card-title">{title}</div>
      </Link>
      <div className="card-body">{showBodyText(body)}</div>
      <div className="card-tags">
        {tags.map((tag, index) => <span className="card-tag" key={index}>{tag}</span>)}
      </div>
    </div>
  )
}

export default Card;