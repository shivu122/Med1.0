import React, { useState } from 'react';
import { Camera, Upload } from 'lucide-react';
import { analyzeMedicineImage } from '../utils/gemini';
import { validateImageFile } from '../utils/validators';
import { parseMedicineInfo } from '../utils/medicineParser';
import type { AnalysisResult } from '../types/analysis';
import type { ParsedMedicineInfo } from '../types/medicine';
import Button from './ui/Button';
import CameraControl from './CameraControl';
import MedicineSearch from './MedicineSearch';
import MedicineDetails from './MedicineDetails';

const ImageUpload = () => {
  const [image, setImage] = useState<string | null>(null);
  const [showCamera, setShowCamera] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [parsedInfo, setParsedInfo] = useState<ParsedMedicineInfo | null>(null);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleImageUpload = async (file: File) => {
    try {
      validateImageFile(file);
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64String = reader.result as string;
        setImage(base64String);
        await analyzeImage(base64String);
      };
      reader.readAsDataURL(file);
    } catch (error) {
      setResult({
        isMedicine: false,
        details: null,
        error: error instanceof Error ? error.message : 'Failed to process image'
      });
    }
  };

  const handleCapture = async (imageSrc: string) => {
    setImage(imageSrc);
    setShowCamera(false);
    await analyzeImage(imageSrc);
  };

  const handleSearch = async (query: string) => {
    setAnalyzing(true);
    try {
      // Implement medicine search functionality
      console.log('Searching for:', query);
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setAnalyzing(false);
    }
  };

  const analyzeImage = async (imageData: string) => {
    setAnalyzing(true);
    setResult(null);
    setParsedInfo(null);
    
    try {
      const analysis = await analyzeMedicineImage(imageData);
      setResult(analysis);
      
      if (analysis.isMedicine && analysis.details) {
        const parsed = parseMedicineInfo(analysis.details);
        setParsedInfo(parsed);
      }
    } catch (error) {
      setResult({
        isMedicine: false,
        details: null,
        error: error instanceof Error ? error.message : 'Failed to analyze image'
      });
    } finally {
      setAnalyzing(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <MedicineSearch onSearch={handleSearch} />
      
      <div className="space-y-4">
        <div className="flex justify-center space-x-4">
          <Button
            onClick={() => fileInputRef.current?.click()}
            disabled={analyzing}
          >
            <Upload className="h-5 w-5 mr-2" />
            Upload Image
          </Button>
          <Button
            onClick={() => setShowCamera(!showCamera)}
            disabled={analyzing}
          >
            <Camera className="h-5 w-5 mr-2" />
            {showCamera ? 'Hide Camera' : 'Open Camera'}
          </Button>
        </div>

        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept="image/*"
          onChange={(e) => e.target.files?.[0] && handleImageUpload(e.target.files[0])}
        />

        {showCamera && <CameraControl onCapture={handleCapture} />}

        {image && !showCamera && (
          <div className="mt-4">
            <img src={image} alt="Uploaded medicine" className="max-w-full rounded-lg" />
          </div>
        )}

        {analyzing && (
          <div className="text-center py-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mx-auto"></div>
            <p className="mt-2">Analyzing image...</p>
          </div>
        )}

        {result && (
          <div className="mt-4">
            {result.error ? (
              <div className="text-red-600 p-4 bg-red-50 rounded-lg">
                <p className="font-semibold">Error:</p>
                <p>{result.error}</p>
              </div>
            ) : result.isMedicine && parsedInfo ? (
              <MedicineDetails info={parsedInfo} />
            ) : (
              <div className="text-yellow-600 p-4 bg-yellow-50 rounded-lg">
                This image does not appear to contain medicine. Please try again with a clear image of medication.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;