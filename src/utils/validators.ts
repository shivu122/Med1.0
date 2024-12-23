export const validateImageFile = (file: File): void => {
  if (!file.type.startsWith('image/')) {
    throw new Error('Please upload a valid image file');
  }

  if (file.size > 5 * 1024 * 1024) {
    throw new Error('Image size should be less than 5MB');
  }
};

export const validateImageData = (imageData: string): string => {
  if (!imageData || !imageData.includes('base64')) {
    throw new Error('Invalid image format');
  }

  const base64Data = imageData.split(',')[1];
  if (!base64Data) {
    throw new Error('Invalid image data');
  }

  return base64Data;
};