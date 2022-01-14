import React, { Component } from "react";
import Loading from "./Loading";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";

export default class Container extends Component {

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      title: this.props.category,
      totalResults: 0,
      page: 1,
      country: this.props.lang,
    };
  }

  fetchData = async () => {
    this.props.setProgress(10);
    this.setState({ loading: true });
    let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.state.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=6`);
    this.props.setProgress(50);
    let parsedData = await data.json();
    this.setState({ loading: false });
    this.props.setProgress(100);
    return parsedData;
  };
   hell() {
    return "hello";
  };
  // componentDidUpdate used for flag only
  async componentDidUpdate(preProps, preState) {
    if (preProps.lang !== this.props.lang) {
      this.setState({ country: this.props.lang }, async () => {
        let parsedData = await this.fetchData();
        this.setState({
          articles: parsedData.articles,
        });
      });
    }
  }
  async componentDidMount() {
    document.title = this.props.category + " - Khoborer Kagoj 2.0";
    this.props.setCurrentCategory(this.state.title);
    let parsedData = await this.fetchData();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    let parsedData = await this.fetchData();
    this.setState({ articles: this.state.articles.concat(parsedData.articles) });
  };
  render() {
    return (
      <div>
        <h1 className="title">
          Top Headlines of <span className="text-warning"> {this.state.title}</span>
        </h1>
        {this.state.loading && <Loading margin="33" />}
        {this.state.articles !== undefined ? (
          <InfiniteScroll dataLength={this.state.articles.length} next={this.fetchMoreData} hasMore={this.state.articles.length !== this.state.totalResults} loader={<Loading margin="5" />}>
            <div>
              <div className="container">
                <div className="row">
                  {this.state.articles.map((article) => {
                    return (
                      <div className="col-md-4 my-2" key={article.url}>
                        <NewsItem name={article.source.name} author={article.author} title={article.title} description={article.description} url={article.url} urlToImage={article.urlToImage} publishedAt={article.publishedAt} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </InfiniteScroll>
        ) : (
          <div className="error">
            <h1>426 Error</h1>
            <img src="https://img.icons8.com/ios-filled/250/000000/sad-cloud.png" alt="Error icon" />
            <h3>
              Sorry there was a problem while fetching the data <span className="text-warning">!</span>
            </h3>
          </div>
        )}
      </div>
    );
  }
}
