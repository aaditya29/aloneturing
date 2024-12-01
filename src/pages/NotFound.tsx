import React from 'react';
import { FileQuestion } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center">
        <FileQuestion className="w-24 h-24 mx-auto mb-8 text-gray-400" />
        <h1 className="text-4xl font-serif font-bold mb-4">404: Page Not Found</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          This poem is still being written...
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}