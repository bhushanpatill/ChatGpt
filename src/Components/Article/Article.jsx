import React from 'react'
import './article.css'
// import {blog01, blog02, blog03, blog04, blog05} from './import'

const Article = ({imageUrl,date,text}) => {
  return (
    <div className="gpt3__blog-container_article">
        <div className="gpt3__blog-container_article-image">
           <img src={imageUrl} alt="blog-image" />
        </div>
        <div className="gpt3__blog-container_article-content">
          <div>
             <p>{date}</p>
             <h3>{text}</h3>
          </div>
          <p>Read Full Article..</p>
        </div>
    </div>
  )
}

export default Article

