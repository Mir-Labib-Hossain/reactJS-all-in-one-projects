
export default function List(props) {
    return (
      <div className="list-item border-effect" style={{ backgroundColor: props.background }}>
        <img src={props.icon} alt={props.name}/>
        <div>
          <p>{props.name}</p>
        </div>
      </div>
    );
}