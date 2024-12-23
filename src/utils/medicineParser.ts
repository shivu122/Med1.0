import type { ParsedMedicineInfo, DosageInfo } from '../types/medicine';

export function parseMedicineInfo(text: string): ParsedMedicineInfo {
  const sections = extractSections(text);
  
  return {
    basicInfo: {
      name: sections.name || '',
      type: sections.type || '',
      category: sections.category || '',
      form: sections.form || '',
      strength: sections.strength || '',
      manufacturer: sections.manufacturer || ''
    },
    uses: sections.uses || [],
    dosage: sections.dosage || [],
    warnings: sections.warnings || []
  };
}

function extractSections(text: string) {
  const lines = text.split('\n').map(line => line.trim());
  let currentSection = '';
  const sections: Record<string, any> = {
    uses: [],
    dosage: [],
    warnings: []
  };

  lines.forEach(line => {
    if (!line) return;

    const sectionMatch = line.match(/^([A-Za-z]+):/);
    if (sectionMatch) {
      currentSection = sectionMatch[1].toLowerCase();
      if (currentSection === 'name' || currentSection === 'type' || 
          currentSection === 'category' || currentSection === 'form' || 
          currentSection === 'strength' || currentSection === 'manufacturer') {
        sections[currentSection] = line.split(':')[1].trim();
      }
      return;
    }

    if (line.startsWith('-') || line.startsWith('•')) {
      const content = line.substring(1).trim();
      if (currentSection === 'uses') sections.uses.push(content);
      if (currentSection === 'warnings') sections.warnings.push(content);
    } else if (currentSection === 'dosage' && line.includes(':')) {
      const [condition, dosage] = line.split(':').map(s => s.trim());
      if (condition && dosage) {
        sections.dosage.push({ condition, dosage });
      }
    }
  });

  return sections;
}