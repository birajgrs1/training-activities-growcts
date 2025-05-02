import { useEffect, useState } from "react";
import "../src/index.css";

const DemoFetch = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /*
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data.products || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setError("Failed to fetch products. Please try again.");
        setLoading(false);
      });
  }, []);

  if (loading) return <span className="loader"></span>;

  if (error)
    return (
      <p className="error-text text-[red] items-center text-[16px]">{error}</p>
    );

    */

  // Applying abort.controller

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/products", { signal })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data.products || []);
        setLoading(false);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          console.error("Error fetching data:", err);
          setError("Failed to fetch products. Please try again.");
        }
        setLoading(false);
      });

    return () => {
      controller.abort(); //cleanup  function
    };
  }, []);

  if (loading) return <span className="loader"></span>;

  if (error)
    return (
      <p className="error-text text-[red] items-center text-[16px]">{error}</p>
    );

  return (
    <div className="max-w-[800px] mx-auto bg-white p-5 rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-4">Product List</h2>
      <ul className="list-none p-0">
        {products.map((product) => (
          <li key={product.id} className="mb-5 border-b border-gray-300 pb-2">
            <h3 className="text-xl font-medium">{product.title}</h3>
            <p className="text-gray-700">{product.description}</p>
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-[120px] rounded-lg mt-2 block"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DemoFetch;
