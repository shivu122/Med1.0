export interface MedicineInfo {
  name: string;
  type: string;
  category: string;
  form: string;
  strength: string;
  manufacturer: string;
  uses: string[];
  dosage: DosageInfo[];
  warnings: string[];
}

export interface DosageInfo {
  condition: string;
  dosage: string;
  frequency?: string;
}

export interface ParsedMedicineInfo {
  basicInfo: Omit<MedicineInfo, 'uses' | 'dosage' | 'warnings'>;
  uses: string[];
  dosage: DosageInfo[];
  warnings: string[];
}