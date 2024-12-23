import React, { useState } from 'react';
import Webcam from 'react-webcam';
import { Camera, RefreshCw } from 'lucide-react';
import Button from './ui/Button';

interface CameraControlProps {
  onCapture: (imageSrc: string) => void;
}

const CameraControl = ({ onCapture }: CameraControlProps) => {
  const [facingMode, setFacingMode] = useState<'user' | 'environment'>('environment');
  const webcamRef = React.useRef<Webcam>(null);

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode
  };

  const toggleCamera = () => {
    setFacingMode(prev => prev === 'user' ? 'environment' : 'user');
  };

  const capture = () => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      onCapture(imageSrc);
    }
  };

  return (
    <div className="relative">
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
        className="w-full rounded-lg"
      />
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4">
        <Button onClick={capture} variant="primary">
          <Camera className="w-5 h-5 mr-2" />
          Capture
        </Button>
        <Button onClick={toggleCamera} variant="secondary">
          <RefreshCw className="w-5 h-5 mr-2" />
          Switch Camera
        </Button>
      </div>
    </div>
  );
};

export default CameraControl;