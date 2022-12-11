import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

  // constructor() {
  //   super();
  //   console.log("constructor");
  //   this.state = {
  //     articles: null,
  //     loading: false,
  //     page: 1,
  //     totalResults: 0
  //   };
  // }

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const updateNews = async () => {
    console.log(props.apiKey);
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=9`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    console.log(data);
    let parsedData = await data.json();
    props.setProgress(60);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    // this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false });
    console.log("Hello World");
    console.log(articles);
    console.log(totalResults);
    props.setProgress(100);
  }

  useEffect(() => {
    updateNews();
  }, []);

  // async componentDidMount() {
  //   // this.props.setProgress(0);
  //   this.updateNews();
  //   // this.props.setProgress(100);
  // }

  // handlePrevClick = async () => {
  //   this.setState({ page: page - 1 });
  //   this.updateNews();
  // }
  // handleNextClick = async () => {
  //   this.setState({ page: page + 1 });
  //   this.updateNews();
  // }

  const fetchMoreData = async () => {
    setPage(page + 1);
    let url = `https://newsapi.org/v2/top-headlines?category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=9`;
    setLoading(true);
    let data = await fetch(url);
    console.log(data);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    // this.setState({ articles: this.state.articles.concat(parsedData.articles), totalResults: parsedData.totalResults, loading: false });
    // console.log(this.state.articles.length) 
    console.log(totalResults);
  };

  console.log("render");
  return (
    <>
      {/* {this.props.setProgress(0)} */}
      <h1 className="text-center">Top Headlines</h1>
      {/* {loading && <Spinner />} */}
      {articles && <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length <= 100}
        loader={<Spinner />}
      >
        <div className="row" style={{ width: "100%", margin: "auto" }}>
          {articles && articles.map((element) => {
            return <div key={element.url} className="col-md-4">
              <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} source={element.source.name} author={element.author ? element.author : "(auhor not known)"} date={element.publishedAt} />
            </div>
          })}
        </div>
      </InfiniteScroll>}
      {/* {this.props.setProgress(100)} */}
      {/* <div className="buttons">
          <button className="btn btn-dark my-5" disabled={page === 1} onClick={this.handlePrevClick}>&larr; Previous</button>
          <button className="btn btn-dark mx-5 my-5" disabled={page === 5} onClick={this.handleNextClick}>Next &rarr;</button>
        </div> */}
    </>
  )
}

News.defaultProps = {
  category: "general"
}

News.propTypes = {
  category: PropTypes.string
}

export default News
