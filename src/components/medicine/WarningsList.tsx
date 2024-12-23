import React from 'react';

interface WarningsListProps {
  warnings: string[];
}

const WarningsList = ({ warnings }: WarningsListProps) => (
  <ul className="space-y-2">
    {warnings.map((warning, index) => (
      <li key={index} className="flex items-start text-yellow-700">
        <span className="mr-2">•</span>
        <span>{warning}</span>
      </li>
    ))}
  </ul>
);

export default WarningsList;