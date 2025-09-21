'use server';

/**
 * @fileOverview This file contains a Genkit flow that optimizes Vite configurations for React projects.
 * It provides functions to automatically generate and validate Vite configurations to optimize build outputs, 
 * recommend code-splitting strategies, and analyze configurations for potential areas of optimization.
 *
 * - optimizeViteConfig - A function that takes project details and returns optimized Vite configurations.
 * - OptimizeViteConfigInput - The input type for the optimizeViteConfig function.
 * - OptimizeViteConfigOutput - The return type for the optimizeViteConfig function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const OptimizeViteConfigInputSchema = z.object({
  projectType: z.string().describe('The type of project (e.g., React, Vue, etc.)'),
  projectDetails: z.string().describe('Detailed information about the project, such as dependencies and configurations.'),
});
export type OptimizeViteConfigInput = z.infer<typeof OptimizeViteConfigInputSchema>;

const OptimizeViteConfigOutputSchema = z.object({
  optimizedConfig: z.string().describe('The optimized Vite configuration in JSON format.'),
  recommendations: z.string().describe('Recommendations for further optimization.'),
});
export type OptimizeViteConfigOutput = z.infer<typeof OptimizeViteConfigOutputSchema>;

export async function optimizeViteConfig(input: OptimizeViteConfigInput): Promise<OptimizeViteConfigOutput> {
  return optimizeViteConfigFlow(input);
}

const optimizeViteConfigPrompt = ai.definePrompt({
  name: 'optimizeViteConfigPrompt',
  input: {schema: OptimizeViteConfigInputSchema},
  output: {schema: OptimizeViteConfigOutputSchema},
  prompt: `You are an expert in optimizing Vite configurations for various project types.

  Based on the provided project details, generate an optimized Vite configuration that includes:
  - Code-splitting recommendations for efficient bundle caching.
  - Analysis of the existing configuration for potential optimizations, such as code elimination and dead code removal.

  Project Type: {{{projectType}}}
  Project Details: {{{projectDetails}}}

  Return the optimized configuration in JSON format and provide recommendations for further optimization.
  Ensure the generated configuration is valid and compatible with the project type.
  `, 
});

const optimizeViteConfigFlow = ai.defineFlow(
  {
    name: 'optimizeViteConfigFlow',
    inputSchema: OptimizeViteConfigInputSchema,
    outputSchema: OptimizeViteConfigOutputSchema,
  },
  async input => {
    const {output} = await optimizeViteConfigPrompt(input);
    return output!;
  }
);
