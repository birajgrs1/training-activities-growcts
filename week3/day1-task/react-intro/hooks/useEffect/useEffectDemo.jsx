import { useState, useEffect } from "react";

const UseEffectDemo = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch("https://jsonplaceholder.typicode.com/todos");
      const result = await api.json();

      console.table(result);
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold text-center mb-6">Fetched Data</h1>

      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">User ID</th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">ID</th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Title</th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Completed</th>
          </tr>
        </thead>
        <tbody>
          {data.slice(0, 10).map((item) => (
            <tr key={item.id} className="border-t">
              <td className="px-4 py-2 text-sm text-gray-600">{item.userId}</td>
              <td className="px-4 py-2 text-sm text-gray-600">{item.id}</td>
              <td className="px-4 py-2 text-sm text-gray-600">{item.title}</td>
              <td className="px-4 py-2 text-sm text-gray-600">{item.completed ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UseEffectDemo;
