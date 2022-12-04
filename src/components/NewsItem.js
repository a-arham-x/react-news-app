import React, { Component } from 'react'
// import PropTypes from 'prop-types'


export class NewsItem extends Component {
  //   static propTypes = {

  //   }

  // static defaultProps = {
  //     imageUrl : ".../public/unloadedImage.jpg"
  // }

  render() {

    let {title, description, imageUrl, newsUrl, source, author, date} = this.props;
    return (
      <div>
        <div className="card">
          <img src={imageUrl?imageUrl:"https://www.innovationnewsnetwork.com/wp-content/uploads/2022/11/iStockbrightstars-509689300.jpg"} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text my-0"><small className="text-muted">Source: {source}</small></p>
              <p className="card-text my-0"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
              <a href={newsUrl} className="btn btn-primary my-3">Visit Article</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
