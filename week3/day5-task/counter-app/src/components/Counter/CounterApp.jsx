import React, { useState } from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { CardContent } from "@/components/ui/card";

const CounterApp = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-sm text-center shadow-lg">
        <CardContent className="p-6">
          <h1 className="text-2xl font-semibold mb-4">Counter App</h1>
          <div className="text-4xl font-bold mb-6">{count}</div>
          <div className="flex justify-center gap-4">
            <Button onClick={decrement} variant="outline">
              Decrement
            </Button>
            <Button onClick={increment}>Increment</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CounterApp;
