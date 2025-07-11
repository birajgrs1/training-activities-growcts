import "./App.css";
import { useSelector } from "react-redux";
import Product from "./components/product.jsx";
function App() {
  const productsList = useSelector((state) => state.products);

  return (
       <div className="products-container">
      {productsList.map(({ id, title, rating, price, image }) => (
        <Product
          key={id}
          title={title}
          rating={rating.rate}
          price={price}
          imageUrl={image}
        />
      ))}
    </div>
  );
}

export default App;
