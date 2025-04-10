import { useState } from 'react';
import Counter from '~/components/counter-card';

export default function App() {
  const [showCounter, setShowCounter] = useState(true);

  return (
    <div className="min-h-screen relative bg-gradient-to-r from-blue-100 to-purple-200">
      {/* Checkbox fixed at top center */}
      <div className="w-full flex justify-center p-4">
        <label className="flex items-center space-x-2 text-lg font-medium text-gray-700 bg-white px-4 py-2 rounded-full shadow-md cursor-pointer">
          <input
            type="checkbox"
            checked={showCounter}
            onChange={() => setShowCounter((prev) => !prev)}
            className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
          />
          <span>Show Counter</span>
        </label>
      </div>

      {/* Counter centered on the screen */}
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
        {showCounter && <Counter />}
      </div>
    </div>
  );
}
