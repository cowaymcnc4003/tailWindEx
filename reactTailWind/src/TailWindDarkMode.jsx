import { useState, useEffect } from 'react';

function TailWindDarkMode() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="h-screen flex items-center justify-center bg-white dark:bg-gray-900">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-4 py-2 text-white bg-blue-500 rounded"
      >
        Toggle Dark Mode
      </button>
    </div>
  );
}

export default TailWindDarkMode;