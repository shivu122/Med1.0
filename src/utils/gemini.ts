import { GoogleGenerativeAI } from '@google/generative-ai';
import { AI_CONFIG, ANALYSIS_PROMPT } from './constants';
import { validateImageData } from './validators';
import type { AnalysisResult } from '../types/analysis';

const genAI = new GoogleGenerativeAI(AI_CONFIG.API_KEY);

export async function analyzeMedicineImage(imageData: string): Promise<AnalysisResult> {
  try {
    const base64Data = validateImageData(imageData);
    const model = genAI.getGenerativeModel({ model: AI_CONFIG.MODEL });
    
    const result = await model.generateContent([
      ANALYSIS_PROMPT,
      {
        inlineData: {
          mimeType: 'image/jpeg',
          data: base64Data
        }
      }
    ]);

    const response = await result.response;
    const text = response.text();
    
    if (!text || typeof text !== 'string') {
      throw new Error('Invalid response from AI model');
    }
    
    return {
      isMedicine: !text.includes('NOT_MEDICINE'),
      details: text.includes('NOT_MEDICINE') ? null : text
    };
      
  } catch (error) {
    console.error('Image analysis error:', {
      name: error instanceof Error ? error.name : 'Unknown Error',
      message: error instanceof Error ? error.message : 'An unknown error occurred',
      stack: error instanceof Error ? error.stack : undefined
    });

    if (error instanceof Error) {
      if (error.message.includes('API key')) {
        throw new Error('Authentication failed. Please try again later.');
      }
      if (error.message.includes('Invalid image')) {
        throw new Error('Please provide a valid image file.');
      }
      if (error.message.includes('network')) {
        throw new Error('Network error. Please check your connection and try again.');
      }
      if (error.message.includes('model')) {
        throw new Error('AI service temporarily unavailable. Please try again later.');
      }
    }

    throw new Error('Failed to analyze image. Please try again.');
  }
}