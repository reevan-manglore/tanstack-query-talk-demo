import React, { useState, useEffect } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  const [thought, setThought] = useState('');

  useEffect(() => {
    console.log(`🟢 Count value is:  ${count}`);
  }, []);

  return (
    <div className="bg-white shadow-2xl rounded-2xl p-10 text-center space-y-6 w-96">
      <h1 className="text-3xl font-bold text-gray-800">Counter Demo</h1>

      <input
        type="text"
        value={thought}
        onChange={(e) => setThought(e.target.value)}
        placeholder="Enter your thought"
        autoComplete="off"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
      />

      <p className="text-xl text-gray-600">
        Current count:{' '}
        <span
          key={count}
          className="inline-block px-3 py-1 rounded-md font-semibold text-gray-900 animate-once"
        >
          {count}
        </span>
      </p>

      <div className="flex justify-center space-x-4">
        <button
          onClick={() => setCount((count) => count - 1)}
          className="bg-red-500 text-white px-5 py-2 rounded-full hover:bg-red-600 transition-all duration-200 shadow-md cursor-pointer"
        >
          −
        </button>
        <button
          onClick={() => setCount(0)}
          className="bg-gray-300 text-gray-800 px-5 py-2 rounded-full hover:bg-gray-400 transition-all duration-200 shadow-md cursor-pointer"
        >
          Reset
        </button>
        <button
          onClick={() => setCount((count) => count + 1)}
          className="bg-green-500 text-white px-5 py-2 rounded-full hover:bg-green-600 transition-all duration-200 shadow-md cursor-pointer"
        >
          +
        </button>
      </div>
    </div>
  );
}
