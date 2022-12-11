import React from 'react'
// import PropTypes from 'prop-types'


const NewsItem = (props) => {
  return (
    <div>
      <div className="card my-1">
        <img src={props.imageUrl ? props.imageUrl : "https://www.innovationnewsnetwork.com/wp-content/uploads/2022/11/iStockbrightstars-509689300.jpg"} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <p className="card-text my-0"><small className="text-muted">Source: {props.source}</small></p>
          <p className="card-text my-0"><small className="text-muted">By {props.author} on {new Date(props.date).toGMTString()}</small></p>
          <a href={props.newsUrl} className="btn btn-primary my-3">Visit Article</a>
        </div>
      </div>
    </div>
  )
}

export default NewsItem
