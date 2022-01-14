import React, { Component } from "react";
import { Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import Container from "./Container";
import Navbar from "./Navbar";
import "./Newspaper.css";
export default class Newspaper extends Component {
  News = [
    {
      category: "Business",
      icon: "https://img.icons8.com/external-justicon-lineal-color-justicon/33/000000/external-cash-gambling-justicon-lineal-color-justicon.png",
    },
    {
      category: "Entertainment",
      icon:"https://img.icons8.com/external-justicon-lineal-color-justicon/33/000000/external-ballet-shoes-russia-justicon-lineal-color-justicon.png",
    },
    {
      category: "General",
      icon: "https://img.icons8.com/external-justicon-lineal-color-justicon/33/000000/external-brainstorming-light-bulbs-justicon-lineal-color-justicon.png",
    },

    {
      category: "Health",
      icon: "https://img.icons8.com/external-justicon-lineal-color-justicon/33/000000/external-heart-rate-hospital-and-medical-justicon-lineal-color-justicon.png",
    },
    {
      category: "Science",
      icon: "https://img.icons8.com/external-justicon-blue-justicon/33/000000/external-atom-science-justicon-blue-justicon.png",
    },
    {
      category: "Sports",
      icon: "https://img.icons8.com/external-justicon-lineal-color-justicon/33/000000/external-basketball-sport-justicon-lineal-color-justicon.png",
    },
    {
      category: "Technology",
      icon:"https://img.icons8.com/external-justicon-blue-justicon/33/000000/external-rocket-science-justicon-blue-justicon.png",
    },
  ];
  constructor() {
    super();
    this.state = {
      apiKey:process.env.REACT_APP_NEWS2_API,
      lang: {
        code: "US",
        icon: "https://img.icons8.com/external-justicon-lineal-color-justicon/30/000000/external-united-states-countrys-flags-justicon-lineal-color-justicon.png",
      },
      currentCategory: "Home",
      progress: 0,
    };
  }
  setCurrentCategory = (currentCategory) => {
    this.setState({
      currentCategory: currentCategory,
    });
  };
  setLang = (code, icon) => {
    this.setState({
      lang: {
        code: code,
        icon: icon,
      },
    });
  };
  setProgress = (progress) => {
    this.setState({
      progress: progress,
    });
  };
  render() {
    return (
      <div>
        <Navbar News={this.News} lang={this.state.lang} setLang={this.setLang} currentCategory={this.state.currentCategory} setCurrentCategory={this.setCurrentCategory} />
        <LoadingBar color="#FFC107" progress={this.state.progress} /> 
        <Route exact={true} path="/Newspaper2.0">
          <div className="home">
            <h1>
              Welcome to "Khoborer Kagog <span className="text-warning">2.0</span>"
            </h1>
            <p className="spaced">AN E-NEWSPAPER SITE</p>
            <p className="text-secondary">
              [ Only for <span className="text-warning">Delux</span> user ]
            </p>
          </div>
        </Route>
        {this.News.map((news) => {
          return (
            <Route exact={true} path={`/Newspaper2.0/${news.category}`} key={news.category}>
              <Container setCurrentCategory={this.setCurrentCategory} category={news.category} lang={this.state.lang.code} setProgress={this.setProgress} apiKey={this.state.apiKey} />
            </Route>
          );
        })}
      </div>
    );
  }
}
