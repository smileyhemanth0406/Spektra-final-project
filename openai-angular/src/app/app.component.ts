import { Component } from '@angular/core';
import { OpenaiService } from './openai.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  prompt: string = '';
  response: string = '';
  errorMessage: string = '';
  suggestions: string[] = [];

  constructor(private openaiService: OpenaiService) {}

  async onSubmit() {
    try {
      this.response = await this.openaiService.getCompletion(this.prompt);
      this.errorMessage = '';
    } catch (error) {
      console.error('Error during OpenAI API call:', error);
      this.errorMessage = 'Error fetching response from AI.';
    }
  }

  async onTyping() {
    if (this.prompt.trim().length > 0) {
      try {
        this.suggestions = await this.openaiService.getCompletionSuggestions(this.prompt);
      } catch (error) {
        console.error('Error fetching suggestions:', error);
        this.suggestions = [];
      }
    } else {
      // Reset to default suggestions if prompt is empty
      this.suggestions = ["How can I assist you?", "How may I help you?"];
    }
  }

  onSelectSuggestion(suggestion: string) {
    this.prompt = suggestion;
    this.suggestions = []; // Clear suggestions after selecting one
  }
}