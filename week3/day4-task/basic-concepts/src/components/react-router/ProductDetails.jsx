import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();

  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto mt-10">
        <h2 className="text-[22px]">Product details</h2>
        <p className="text-[20px]">Id: {id}</p>
      </div>
    </>
  );
};

export default ProductDetails;

export const ProductsDetailsLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch("http://localhost:5000/products/" + id);
  if (!res.ok) {
    throw new Error("Failed to fetch product details");
  }
  return res.json();
};
