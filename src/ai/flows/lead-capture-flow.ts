'use server';
/**
 * @fileOverview A flow for capturing user leads and saving them to a text file.
 *
 * - captureLead - A function that takes a user's name and email and appends it to a file.
 * - Lead - The Zod schema for the lead data.
 */

import { ai } from '@/ai/genkit';
import { promises as fs } from 'fs';
import path from 'path';
import { z } from 'zod';

export const LeadSchema = z.object({
  name: z.string().describe('The name of the user.'),
  email: z.string().email().describe('The email address of the user.'),
});

export type Lead = z.infer<typeof LeadSchema>;

const saveLeadToFile = async (lead: Lead): Promise<void> => {
  const leadData = `Name: ${lead.name}, Email: ${lead.email}, Timestamp: ${new Date().toISOString()}\n`;
  const filePath = path.join(process.cwd(), 'leads.txt');
  
  try {
    await fs.appendFile(filePath, leadData, 'utf-8');
  } catch (error) {
    console.error('Failed to write lead to file:', error);
    throw new Error('Could not save lead information.');
  }
}

const leadCaptureTool = ai.defineTool(
  {
    name: 'leadCaptureTool',
    description: 'Saves the user\'s name and email address as a lead.',
    inputSchema: LeadSchema,
    outputSchema: z.string(),
  },
  async (lead) => {
    await saveLeadToFile(lead);
    return 'Lead captured successfully.';
  }
);

export async function captureLead(lead: Lead): Promise<string> {
    await saveLeadToFile(lead);
    return 'Lead captured successfully.';
}
