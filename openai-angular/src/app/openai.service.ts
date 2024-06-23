import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { AzureKeyCredential, OpenAIClient } from '@azure/openai';

@Injectable({  
  providedIn: 'root'
})
export class OpenaiService {
  private endpoint = environment.azureOpenAiEndpoint;
  private apiKey = environment.azureOpenAiApiKey;
  private model = environment.azureOpenAiModel;


  // private frequentlyAskedQuestions: string[] = [
  //   "How can I reset my password?",
  //   "What is the refund policy?",
  //   "How do I update my profile information?",
  //   "What are the delivery options?",
  //   "How can I track my order?"
  // ];

  constructor(private http: HttpClient) {}

  async getCompletion(prompt: string): Promise<string> {
    try {
      const client = new OpenAIClient(this.endpoint, new AzureKeyCredential(this.apiKey));
      const result = await client.getCompletions(this.model, [prompt], {
        maxTokens: 250,
        temperature: 1.0
      });

      let answer = '';
      for (const choice of result.choices) {
        answer += choice.text;
      }
      
      return answer;
    } catch (error) {
      console.error('Error during OpenAI API call:', error);
      throw new Error('Failed to get completion from OpenAI API.');
    }
  }

  async getCompletionSuggestions(prompt: string): Promise<string[]> {
    try {
      const client = new OpenAIClient(this.endpoint, new AzureKeyCredential(this.apiKey));
      const result = await client.getCompletions(this.model, [prompt], {
        maxTokens: 4, 
        temperature: 0.9 
      });

      const suggestions: string[] = result.choices.map(choice => choice.text.trim());
      return suggestions;
    } catch (error) {
      console.error('Error during OpenAI API call:', error);
      throw new Error('Failed to get completion suggestions from OpenAI API.');
    }
  }
}

