import React, { useState } from "react";
import ButtonComponent from "./components/ButtonComponent";
import CardComponent from "./components/CardComponent";
import Counter from "./components/counter/Counter";
import DynamicComponent from "./components/dynamicComponent";
import ListItem from "./components/ListItem";

const PureComponentDemo = ({ data }) => {
  console.log("It`s me Pure component.");
  return <div>{data.text}</div>;
};

const App = () => {
  const [count, setCount] = useState(0);
  const [items] = useState([
    { id: 1, text: "item1" },
    { id: 2, text: "item2" },
    { id: 3, text: "item3" },
  ]);

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">All Practical Tasks</h2>

      {/* reusable components */}
      <div className="space-y-4 mb-8">
        <ButtonComponent variant="primary">Primary Button</ButtonComponent>
        <ButtonComponent variant="secondary">Secondary Button</ButtonComponent>

        <CardComponent title="Sample Card" className="mt-4">
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </CardComponent>

        <ul className="mt-4">
          <ListItem text="List Item 1" />
          <ListItem text="List Item 2" />
        </ul>

        {/* 2 Counters */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Shared Counters</h2>
          <Counter
            count={count}
            onIncrement={() => setCount((c) => c + 1)}
            onDecrement={() => setCount((c) => c - 1)}
          />
          <Counter
            count={count}
            onIncrement={() => setCount((c) => c + 1)}
            onDecrement={() => setCount((c) => c - 1)}
          />
        </div>

        {/* Dynamic Listings */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Dynamic List</h2>
          <DynamicComponent items={items} />

        </div>

        <div className="mb-8">
          <Counter
            count="invalid string" 
            onIncrement={() => {}}
            onDecrement={() => {}}
          />
        </div>

        <div>
          <PureComponentDemo data={{ text: "Static content" }} />
        </div>
      </div>
    </div>
  );
};

export default App;
