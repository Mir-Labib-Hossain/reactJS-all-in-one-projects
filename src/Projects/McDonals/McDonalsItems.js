export function McDonalItems(props) {
  let burgers = [
    {
      name: "McDonal's Veggie Burger",
      image: "https://www.mcdonalds.com/is/image/content/dam/uk/nfl/nutrition/nfl-product/menu/products/mcdonalds-Vegetable-Deluxe.jpg?$Category_Desktop$",
      price: 150,
    },
    {
      name: "Veg Maharaja Mac Burger,",
      image: "https://thegoofys.in/MaharajaVegBurger.png",
      price: 200,
    },
    {
      name: "McSpicy Chicken Burger",
      image: "https://www.frugalfeeds.com.au/wp-content/uploads/2020/10/McDonalds-McSpicy-Burger.png",
      price: 450,
    },
  ];
  let frenchfries = [
    {
      name: "French Fries Small",
      image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2017%2F06%2Ffwx-mcdonalds-improves-its-fries.jpg&q=85",
      price: 50,
    },
    {
      name: "French Fries Medium",
      image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2017%2F06%2Ffwx-mcdonalds-improves-its-fries.jpg&q=85",
      price: 100,
    },
    {
      name: "French Fries Large",
      image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2017%2F06%2Ffwx-mcdonalds-improves-its-fries.jpg&q=85",
      price: 150,
    },
    {
      name: "McWedges",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc3Ev_jACswsgiYQD1LCCdLkAX8hfc630_GQ&usqp=CAU",
      price: 130,
    },
  ];
  let beverage = [
    {
      name: "CocaCola",
      image: "https://freepngimg.com/thumb/cocacola/3-coca-cola-can-png-image.png",
      price: 50,
    },
    {
      name: "Pepsi",
      image: "https://simg.nicepng.com/png/small/6-69544_pepsi-transparent-background-png-pepsi-transparent-background.png",
      price: 50,
    },
    {
      name: "Fanta",
      image: "https://pnglux.com/wp-content/uploads/2021/02/1612570223_785_Fanta-PNG-Free-Download.png",
      price: 50,
    },
    {
      name: "Sprite",
      image: "https://www.kindpng.com/picc/m/753-7534657_sprite-drink-hd-png-download.png",
      price: 50,
    },
  ];
  let coffee = [
    {
      name: "Iced Mocha",
      image:
        "data:image/jpeg;base64,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",
      price: 150,
    },
    {
      name: "Regular Hot Coffee",
      image: "http://3.bp.blogspot.com/_rlOWtUjJQ0M/TA_XJI81HBI/AAAAAAAAAB8/mWoNH6vsNW8/s1600/McDonalds+Coffee.jpg",
      price: 50,
    },
    {
      name: "Caramel Frappé",
      image: "https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/iconic/desktop/t-mcdonalds-Frappe-Caramel-Medium.jpg",
      price: 160,
    },
    {
      name: "Hot Chocolate",
      image: "https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/iconic/desktop/t-mcdonalds-McCafe-Mocha-Medium.jpg",
      price: 199,
    },
    {
      name: "McLatte",
      image: "https://www.circularonline.co.uk/wp-content/uploads/2021/07/LIN-MCD-210607-LoopCup-1645-L.png",
      price: 99,
    },
  ];
  let product;
  switch (props.name) {
    case "Burger":
      product = burgers;
      break;
    case "FrenchFries":
      product = frenchfries;
      break;
    case "Beverage":
      product = beverage;
      break;
    default:
      product = coffee;
      break;
  }
  return (
    <div className="McDonalItems">
      {product.map((item) => {
        return (
          <div className="product border-effect" key={product.name}>
            <div className="image " style={{ backgroundImage: "url(" + item.image + ")" }}></div>
            <div className="product-info">
              <p>{item.name}</p>
              <p>${item.price}</p>
              <button onClick={() => props.setBagInfo(item.price)}>
                Add to bag <i className="fa fa-shopping-bag"></i>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
