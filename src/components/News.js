import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {

  static defaultProps = {
    category: "general"
  }

  static propTypes = {
    category: PropTypes.string
  }

  constructor() {
    super();
    console.log("constructor");
    this.state = {
      articles: null,
      loading: false,
      page: 1,
      totalResults: 0
    };
  }

  async updateNews() {
    console.log(this.props.apiKey)
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=9`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    console.log(data);
    let parsedData = await data.json();
    this.props.setProgress(60);
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false });
    console.log("Hello World");
    console.log(this.state.articles);
    console.log(this.state.totalResults);
    this.props.setProgress(100);
  }

  async componentDidMount() {
    // this.props.setProgress(0);
    this.updateNews();
    // this.props.setProgress(100);
  }

  // handlePrevClick = async () => {
  //   this.setState({ page: this.state.page - 1 });
  //   this.updateNews();
  // }
  // handleNextClick = async () => {
  //   this.setState({ page: this.state.page + 1 });
  //   this.updateNews();
  // }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=9`;
    this.setState({ loading: true });
    let data = await fetch(url);
    console.log(data);
    let parsedData = await data.json();
    this.setState({ articles: this.state.articles.concat(parsedData.articles), totalResults: parsedData.totalResults, loading: false });
    // console.log(this.state.articles.length) 
    console.log(this.state.totalResults);
  };

  render() {
    console.log("render");
    return (
      <>
      {/* {this.props.setProgress(0)} */}
        <h1 className="text-center">Top Headlines</h1>
        {this.state.loading && <Spinner/>}
        {this.state.articles && <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length <= 100}
          loader={<Spinner />}
        >
            <div className="row" style={{width:"100%", margin:"auto"}}>
              {this.state.articles && this.state.articles.map((element) => {
                return <div key={element.url} className="col-md-4">
                  <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} source={element.source.name} author={element.author ? element.author : "(auhor not known)"} date={element.publishedAt} />
                </div>
              })}
            </div>
        </InfiniteScroll>}
        {/* {this.props.setProgress(100)} */}
        {/* <div className="buttons">
          <button className="btn btn-dark my-5" disabled={this.state.page === 1} onClick={this.handlePrevClick}>&larr; Previous</button>
          <button className="btn btn-dark mx-5 my-5" disabled={this.state.page === 5} onClick={this.handleNextClick}>Next &rarr;</button>
        </div> */}
      </>
    )
  }
}

export default News
