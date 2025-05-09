import Counter from "../components/Counter";

const Home = () => {
  return (
    <>
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Home Page</h1>
      
    </div>
    <div className="counter-container flex items-center justify-center">
      <Counter/>
    </div>
    </>
  );
};

export default Home;
