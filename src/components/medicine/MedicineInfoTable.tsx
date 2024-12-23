import React from 'react';
import { Card } from '../ui/Card';

interface MedicineInfoTableProps {
  info: {
    name: string;
    type: string;
    category: string;
    form: string;
    strength: string;
    manufacturer: string;
  };
}

const MedicineInfoTable = ({ info }: MedicineInfoTableProps) => {
  const rows = [
    { label: 'Name', value: info.name },
    { label: 'Type', value: info.type },
    { label: 'Category', value: info.category },
    { label: 'Form', value: info.form },
    { label: 'Strength', value: info.strength },
    { label: 'Manufacturer', value: info.manufacturer },
  ];

  return (
    <Card className="overflow-hidden">
      <table className="min-w-full divide-y divide-purple-200">
        <tbody className="divide-y divide-purple-100">
          {rows.map((row) => (
            <tr key={row.label}>
              <td className="px-4 py-3 bg-purple-50 font-medium text-purple-900 w-1/3">
                {row.label}
              </td>
              <td className="px-4 py-3 text-gray-700">
                {row.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
};

export default MedicineInfoTable;