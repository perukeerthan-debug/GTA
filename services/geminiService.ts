
import { GoogleGenAI, Type } from "@google/genai";
import { GameConcept } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

const gameConceptSchema = {
  type: Type.OBJECT,
  properties: {
    title: { type: Type.STRING, description: "A catchy, cool title for the game." },
    logline: { type: Type.STRING, description: "A one-sentence summary of the game's core premise." },
    synopsis: { type: Type.STRING, description: "A 2-3 paragraph detailed summary of the game's plot, setting, and main character." },
    keyFeatures: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
      description: "A list of 4-5 unique and exciting gameplay features."
    },
    missions: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING, description: "An exciting title for the mission." },
          description: { type: Type.STRING, description: "A brief description of the mission's objectives." },
          type: { type: Type.STRING, description: "The type of mission (e.g., Heist, Assassination, Getaway)." },
        },
        required: ["title", "description", "type"],
      },
      description: "A list of 5 sample missions."
    },
    vehicles: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          name: { type: Type.STRING, description: "The name of the vehicle." },
          type: { type: Type.STRING, description: "The class of vehicle (e.g., Muscle Car, Superbike, Armored Truck)." },
          description: { type: Type.STRING, description: "A cool description of the vehicle." },
        },
        required: ["name", "type", "description"],
      },
      description: "A list of 5 iconic vehicles available in the game."
    },
  },
  required: ["title", "logline", "synopsis", "keyFeatures", "missions", "vehicles"],
};

export async function generateGameConcept(): Promise<GameConcept> {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: "Generate a concept for a game of open world stealing cars, robbing banks, heists, killings, and missions.",
      config: {
        systemInstruction: `You are a creative director and lead game designer for a AAA video game studio. 
        Your task is to generate a compelling and detailed concept for a new open-world action-adventure crime game. 
        The concept should be gritty, modern, and have a unique hook that sets it apart. 
        Provide a complete JSON object based on the provided schema.`,
        responseMimeType: "application/json",
        responseSchema: gameConceptSchema,
      },
    });

    const jsonText = response.text;
    if (!jsonText) {
      throw new Error("API returned an empty response.");
    }
    
    return JSON.parse(jsonText) as GameConcept;
  } catch (error) {
    console.error("Error generating game concept:", error);
    throw new Error("Failed to generate game concept from AI. Please check the API key and try again.");
  }
}
