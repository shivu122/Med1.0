// AI Model configuration
export const AI_CONFIG = {
  API_KEY: 'AIzaSyD775P_p56q3ebGsj-A1UZSdRDEJvqyqrE',
  MODEL: 'gemini-1.5-flash',
  MAX_IMAGE_SIZE: 5 * 1024 * 1024, // 5MB
};

// Analysis prompts
export const ANALYSIS_PROMPT = `Analyze this image and determine if it shows medicine/pills/tablets. If it does, provide detailed information in the following format:

Name: [Medicine Name]
Type: [Medicine Type]
Category: [Medicine Category]
Form: [Form of Medicine]
Strength: [Medicine Strength]
Manufacturer: [Manufacturer Name]

Uses:
- [Use 1]
- [Use 2]

Dosage:
Adults: [Adult Dosage]
Children: [Children Dosage]
Elderly: [Elderly Dosage]

Warnings:
- [Warning 1]
- [Warning 2]

If it's not medicine, respond with 'NOT_MEDICINE'`;