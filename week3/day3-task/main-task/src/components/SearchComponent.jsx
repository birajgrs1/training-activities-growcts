import React, { useState, useEffect } from "react";
import { useDebounce } from "../hooks/useBounce";

export default function SearchProducts() {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    if (debouncedQuery.trim() === "") {
      setProducts([]);
      return;
    }

    const fetchData = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        const filtered = data.filter(item =>
          item.title.toLowerCase().includes(debouncedQuery.toLowerCase())
        );
        setProducts(filtered);
      } catch (error) {
        console.error("API fetch failed", error);
      }
    };

    fetchData();
  }, [debouncedQuery]);

  return (
    <div className="p-6 bg-yellow-50 rounded-xl shadow-md max-w-2xl mx-auto mt-10">
      <h2 className="text-2xl font-bold text-pink-600 mb-4">Search FakeStore Products</h2>
      <input
        type="text"
        value={query}
        placeholder="Search by title..."
        onChange={(e) => setQuery(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg mb-4 text-purple-800 focus:ring-pink-300 focus:outline-none"
      />
      {products.length > 0 ? (
        <ul className="space-y-3">
          {products.map((item) => (
            <li key={item.id} className="p-4 border rounded-md bg-pink-100">
              <p className="font-semibold  text-purple-950">{item.title}</p>
              <p className="text-sm text-purple-600">${item.price}</p>
            </li>
          ))}
        </ul>
      ) : (
        debouncedQuery && <p className="text-purple-500">No products found.</p>
      )}
    </div>
  );
}
