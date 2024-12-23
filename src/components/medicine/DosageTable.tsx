import React from 'react';
import type { DosageInfo } from '../../types/medicine';

interface DosageTableProps {
  dosage: DosageInfo[];
}

const DosageTable = ({ dosage }: DosageTableProps) => (
  <div className="overflow-x-auto">
    <table className="min-w-full divide-y divide-purple-200">
      <thead className="bg-purple-50">
        <tr>
          <th className="px-4 py-3 text-left text-sm font-semibold text-purple-900">Patient Type</th>
          <th className="px-4 py-3 text-left text-sm font-semibold text-purple-900">Dosage</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-purple-100">
        {dosage.map((item, index) => (
          <tr key={index}>
            <td className="px-4 py-3 text-gray-700">{item.condition}</td>
            <td className="px-4 py-3 text-gray-700">{item.dosage}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default DosageTable;