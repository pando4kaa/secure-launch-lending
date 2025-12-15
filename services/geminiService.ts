import { GoogleGenAI } from "@google/genai";

export const generateHeroImage = async (): Promise<string | null> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const model = 'gemini-2.5-flash-image'; // Using the requested nano banana / flash image model equivalent

    const response = await ai.models.generateContent({
      model: model,
      contents: {
        parts: [
          {
            text: 'A futuristic abstract cybersecurity visualization. Blue and black color scheme. Neon geometric shapes, digital shield, secure data flow. Minimalist, professional, high quality 4k render suitable for a tech landing page background.',
          },
        ],
      },
      config: {
        imageConfig: {
            aspectRatio: "16:9",
        }
      }
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
  } catch (error) {
    console.error("Failed to generate image with Gemini:", error);
  }
  return null;
};