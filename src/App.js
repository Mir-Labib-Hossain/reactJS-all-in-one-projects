import "./App.css";
import "./List.css";
import "font-awesome/css/font-awesome.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import McDonals from "./Projects/McDonals/McDonals";
import Messenger from "./Projects/Messenger/Messenger";
import TextUtils from "./Projects/TextUtils/TextUtils";
import ThemeChanger from "./Projects/ThemeChanger/ThemeChanger";
import { Link, Route } from "react-router-dom";
import {useEffect} from "react"
import List from "./List";
import Newspaper from "./Projects/Newspaper/Newspaper";
import NewsPaper2 from "./Projects/NewsPaper2/NewsPaper2";
import BlackFriday from "./Projects/ECommerce/BlackFriday";
function App() {

  let files = [
    {
      name: "McDonals",
      icon: "https://img.icons8.com/color/240/000000/mcdonalds.png",
      background: "lightyellow",
      Component: McDonals,
    },
    {
      name: "BlackFriday",      
      icon: "https://img.icons8.com/external-justicon-lineal-color-justicon/100/000000/external-black-friday-black-friday-justicon-lineal-color-justicon.png",
      background: "#454545",
      Component: BlackFriday,
    },
    {
      name: "Messenger",
      icon: "//img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-messenger-social-media-justicon-lineal-color-justicon.png",
      background: "lightblue",
      Component: Messenger,
    },
    {
      name: "TextUtils",
      icon: "//img.icons8.com/external-justicon-lineal-color-justicon/100/000000/external-edit-graphic-design-justicon-lineal-color-justicon.png",
      background: "white",
      Component: TextUtils,
    },
    {
      name: "ThemeChanger",
      icon: "https://img.icons8.com/external-justicon-lineal-color-justicon/100/000000/external-paint-elearning-and-education-justicon-lineal-color-justicon.png",
      background: "tomato",
      Component: ThemeChanger,
    },
    {
      name: "NewsPaper",
      icon: "https://img.icons8.com/doodle/100/000000/news.png",
      background: "lightgray",
      Component: Newspaper,
    },
    {
      name: "NewsPaper2.0",
      icon: "https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/100/000000/external-newspaper-news-flatart-icons-lineal-color-flatarticons-1.png",
      background: "lightgray",
      Component: NewsPaper2,
    },
  ];
useEffect(() => {
  AOS.init({
  });
}, []);
  return (
    <div className="App">
      <Route path="/" exact={true}>
        <div className="list">
          <h1>Projects</h1>
          {files.map((project) => {
            return (
              <Link to={project.name} key={project.name}>
                <List name={project.name} icon={project.icon} background={project.background} />
              </Link>
            );
          })}
        </div>
      </Route>
      {files.map((project) => {
        return (
          <Route path={"/" + project.name} key={project.name}>
            <project.Component projectName={project.name} projectIcon={project.icon} />
          </Route>
        );
      })}
    </div>
  );
}
export default App;
