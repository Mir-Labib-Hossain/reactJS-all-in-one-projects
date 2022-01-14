
import { useHistory } from "react-router-dom";
export default function Header(props) {
 let history = useHistory();
  return (
    <div className="header">
      <img src={props.icon} alt={props.title} />
      <h1>{props.title}</h1>
      <button className="BackButton" onClick={history.goBack}>
        <img src="https://img.icons8.com/ios/60/000000/circled-chevron-left.png" alt="previous page button" />
      </button>
    </div>
  );
}
