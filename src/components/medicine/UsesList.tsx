import React from 'react';

interface UsesListProps {
  uses: string[];
}

const UsesList = ({ uses }: UsesListProps) => (
  <ul className="list-disc list-inside space-y-2">
    {uses.map((use, index) => (
      <li key={index} className="text-gray-700">{use}</li>
    ))}
  </ul>
);

export default UsesList;