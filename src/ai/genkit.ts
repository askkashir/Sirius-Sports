/**
 * @fileoverview This file configures and exports the Genkit AI instance.
 */
'use server';
import { genkit } from 'genkit';
import { googleAI } from '@genkit-ai/googleai';
import next from '@genkit-ai/next';

export const ai = genkit({
  plugins: [
    googleAI({
      apiVersion: ['v1beta'],
    }),
    next({
      //
    }),
  ],
  logLevel: 'debug',
  enableTracingAndMetrics: true,
});
