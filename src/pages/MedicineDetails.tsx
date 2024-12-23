import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, AlertTriangle, Info, Clock, Shield } from 'lucide-react';
import { Card, CardHeader, CardContent } from '../components/ui/Card';

const MedicineDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { image, details } = location.state || {};

  if (!details) {
    navigate('/identify');
    return null;
  }

  // Parse and structure the medicine information
  const formatDetails = (detailsText: string) => {
    const sections = {
      name: '',
      description: '',
      uses: [] as string[],
      dosage: [] as string[],
      warnings: [] as string[]
    };

    const lines = detailsText.split('\n');
    let currentSection = '';

    lines.forEach(line => {
      if (line.toLowerCase().includes('name:')) {
        sections.name = line.split(':')[1].trim();
      } else if (line.toLowerCase().includes('uses:') || line.toLowerCase().includes('indications:')) {
        currentSection = 'uses';
      } else if (line.toLowerCase().includes('dosage:') || line.toLowerCase().includes('dose:')) {
        currentSection = 'dosage';
      } else if (line.toLowerCase().includes('warning:') || line.toLowerCase().includes('precaution:')) {
        currentSection = 'warnings';
      } else if (line.trim()) {
        if (currentSection === 'uses') {
          sections.uses.push(line.trim().replace(/^\*\s*/, ''));
        } else if (currentSection === 'dosage') {
          sections.dosage.push(line.trim().replace(/^\*\s*/, ''));
        } else if (currentSection === 'warnings') {
          sections.warnings.push(line.trim().replace(/^\*\s*/, ''));
        } else if (!sections.description) {
          sections.description = line.trim();
        }
      }
    });

    return sections;
  };

  const medicineInfo = formatDetails(details);

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={() => navigate('/identify')}
        className="flex items-center text-purple-600 hover:text-purple-700 mb-6"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back to Identification
      </button>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Image Section */}
        <Card>
          <CardContent>
            <img
              src={image}
              alt="Medicine"
              className="w-full rounded-lg"
            />
          </CardContent>
        </Card>

        {/* Details Section */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center text-purple-600">
                <Info className="h-6 w-6 mr-2" />
                <h2 className="text-2xl font-bold">{medicineInfo.name || 'Medicine Information'}</h2>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">{medicineInfo.description}</p>
              
              {medicineInfo.uses.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-purple-600 mb-2">Uses</h3>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <ul className="list-disc list-inside space-y-2">
                      {medicineInfo.uses.map((use, index) => (
                        <li key={index} className="text-gray-700">{use}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {medicineInfo.dosage.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-purple-600 mb-2">Recommended Dosage</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-purple-200">
                      <thead className="bg-purple-50">
                        <tr>
                          <th className="px-4 py-2 text-left text-sm font-semibold text-purple-600">Condition</th>
                          <th className="px-4 py-2 text-left text-sm font-semibold text-purple-600">Dosage</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-purple-100">
                        {medicineInfo.dosage.map((dose, index) => {
                          const [condition, dosage] = dose.split(':').map(s => s.trim());
                          return (
                            <tr key={index}>
                              <td className="px-4 py-2 text-gray-700">{condition || dose}</td>
                              <td className="px-4 py-2 text-gray-700">{dosage || '-'}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {medicineInfo.warnings.length > 0 && (
            <Card className="bg-yellow-50">
              <CardHeader>
                <div className="flex items-center text-yellow-600">
                  <AlertTriangle className="h-6 w-6 mr-2" />
                  <h3 className="text-xl font-semibold">Important Warnings</h3>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {medicineInfo.warnings.map((warning, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span className="text-yellow-700">{warning}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-purple-50">
              <CardContent>
                <div className="flex items-center text-purple-600 mb-2">
                  <Clock className="h-5 w-5 mr-2" />
                  <h4 className="font-semibold">Last Updated</h4>
                </div>
                <p className="text-gray-600">{new Date().toLocaleDateString()}</p>
              </CardContent>
            </Card>
            <Card className="bg-purple-50">
              <CardContent>
                <div className="flex items-center text-purple-600 mb-2">
                  <Shield className="h-5 w-5 mr-2" />
                  <h4 className="font-semibold">Verified</h4>
                </div>
                <p className="text-gray-600">AI-Powered Analysis</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicineDetails;