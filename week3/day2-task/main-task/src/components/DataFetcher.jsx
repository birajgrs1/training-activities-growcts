import { useState, useEffect } from "react";
import "../../src/index.css"

const DataFetcher = ({onFetch}) => {
  // const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //     useEffect(() => {
  //       fetch('https://jsonplaceholder.typicode.com/posts')
  //           .then(response => response.json())
  //           .then(data => setPosts(data));

  //           // console.log(posts);
  //   }, [posts]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://jsonplaceholder.typicode.com/posts", { signal })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        // setPosts(data);
        onFetch(data);
        setLoading(false);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          console.error("Error fetching data:", err);
          setError("Failed to fetch posts. Please try again.");
        }
        setLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, [onFetch]);

  if (loading) return <div className="text-gray-700">Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return null;
};

export default DataFetcher;


