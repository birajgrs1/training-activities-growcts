import React from "react";
import { useLoaderData } from "react-router-dom";

const Products = () => {
  const allProducts = useLoaderData();

  // Handle loading state
  if (allProducts === undefined || allProducts === null) {
    return <h2>Loading products...</h2>;
  }

  // Handle empty state
  if (allProducts.length === 0) {
    return <h2>No products available!</h2>;
  }

  // Ensure allProducts is an array before calling .map()
  if (!Array.isArray(allProducts)) {
    return <h2>Error: Invalid data format.</h2>;
  }

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h1 className="text-[36px] mt-[20px] font-semibold">Products Page</h1>
      
      {/* Render all products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {allProducts.map((product) => (
          <div key={product.id} className="p-4 border rounded-lg shadow-md">
            <p className="font-bold text-xl">{product.name}</p>
            <p className="text-gray-700">{product.category}</p>
            <p className="text-gray-500">{`ID: ${product.id}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;


/*
Loader Functions:

Loader functions in React Router enable you to fetch data before rendering a route. 
This ensures that your components have the necessary data available when they are displayed, 
improving the user experience.

useLoaderData
The useLoaderData hook in React Router is a powerful tool that allows you to fetch data for your routes
and make it available to your components before they are rendered. 
This can be useful for a number of reasons, such as improving performance, preventing empty states, 
and providing a better user experience.

Why is useLoaderData useful?

Reduces the amount of network requests made in your application and increases performance by retrieving
data for routes before they are rendered.
Keeps users from seeing empty states by providing components with data before they are rendered.
The faster you can provide data to your users, the better your application will work for them.

E.g:

import { useLoaderData } from 'react-router-dom';

const HomePageComponent = () => {
  const data = useLoaderData();

  if (data.isLoading) {
    return <div>Loading...</div>;
  }

  if (data.isError) {
    return <div>Error loading data.</div>;
  }

  // Render the data
  return (
    <ul>
      {data.map((currentData) => (
        <li key={currentData.id}>{currentData.title}</li>
      ))}
    </ul>
  );
};

export default HomePageComponent;
*/
