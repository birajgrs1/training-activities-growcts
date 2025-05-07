import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";

const ProductsLayout = () => {
  const productDetails = useLoaderData();
  return (
    <div>
      <div className="flex items-center justify-center m-[28px] mb-[40px]">
        <h2 className="text-[24px] font-semibold border-b-2 border-dashed border-[#0a0707]">
          Display all products
        </h2>
        <div className="products">
          {productDetails.map((product) => (
            <Link
              to={`/products/${product.id}`}
              key={product.id}
              className="mb-4"
            >
              <div className="p-4 border rounded-lg">
                <h3 className="text-[18px]">{product.id}</h3>
                <h2 className="text-[24px]">{product.name}</h2>
                <p className="text-[24px]">{product.category}</p>
                <p className="text-[24px]">{product.price}</p>
                <p className="text-[24px]">{product.stock}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default ProductsLayout;

/*
npx json-server --watch data.json --port 5000     //if data.json is in assets
npx json-server --watch src/data/data.json --port 5000
*/
