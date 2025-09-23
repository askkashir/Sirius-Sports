'use server';
/**
 * @fileOverview A support chatbot flow that uses an AI model to answer user questions.
 *
 * - chat - A function that takes a user's question and returns an AI-generated response.
 */
import { ai } from '@/ai/genkit';
import { z } from 'zod';

const chatPrompt = ai.definePrompt({
  name: 'chatPrompt',
  input: { schema: z.string() },
  output: { schema: z.string() },
  prompt: `You are a friendly and helpful customer support agent for Sirius Sports,
  an e-commerce store that sells high-quality sportswear.

  Your goal is to answer the user's questions accurately and concisely.
  Keep your answers short and to the point.

  User question: {{{input}}}`,
});

export async function chat(question: string): Promise<string> {
  const { output } = await chatPrompt(question);
  return output ?? "I'm sorry, I couldn't generate a response. Please try again.";
}
