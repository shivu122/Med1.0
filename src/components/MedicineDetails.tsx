import React from 'react';
import type { ParsedMedicineInfo } from '../types/medicine';
import { Card, CardHeader, CardContent } from './ui/Card';
import MedicineInfoTable from './MedicineInfoTable';
import DosageTable from './medicine/DosageTable';
import WarningsList from './medicine/WarningsList';
import UsesList from './medicine/UsesList';

interface MedicineDetailsProps {
  info: ParsedMedicineInfo;
}

const MedicineDetails = ({ info }: MedicineDetailsProps) => {
  return (
    <div className="space-y-6">
      <MedicineInfoTable info={info.basicInfo} />

      {info.uses.length > 0 && (
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-purple-900">Uses</h3>
          </CardHeader>
          <CardContent>
            <UsesList uses={info.uses} />
          </CardContent>
        </Card>
      )}

      {info.dosage.length > 0 && (
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-purple-900">Dosage Information</h3>
          </CardHeader>
          <CardContent>
            <DosageTable dosage={info.dosage} />
          </CardContent>
        </Card>
      )}

      {info.warnings.length > 0 && (
        <Card className="bg-yellow-50">
          <CardHeader>
            <h3 className="text-lg font-semibold text-yellow-800">Warnings</h3>
          </CardHeader>
          <CardContent>
            <WarningsList warnings={info.warnings} />
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default MedicineDetails;