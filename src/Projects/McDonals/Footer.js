export default function Footer(props) {
  return (
    <div className="footer">
      <div className="bag">
        <p>{props.item}</p>
        <img src="https://img.icons8.com/external-justicon-lineal-color-justicon/60/000000/external-shopping-bag-ecommerce-justicon-lineal-color-justicon.png" alt="shopping bag" />
      </div>
      <h1>Total : ${props.total===null?"0":props.total}</h1>
      {
        props.total && <button className="pay-btn border-effect" onClick={() => { props.pay(); }}>
        <img src="https://img.icons8.com/external-itim2101-lineal-color-itim2101/64/000000/external-pay-currency-and-money-itim2101-lineal-color-itim2101.png" alt="pay bill" />
      </button>
      }
    </div>
  );
}
