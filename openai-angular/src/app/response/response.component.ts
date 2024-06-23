import { Component } from '@angular/core';
import { OpenaiService } from '../openai.service';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent {
  prompt: string = '';
  response: string = '';
  errorMessage: string = '';
  suggestions: string[] = [
    "How can I assist you?",
    "How may I help you?",
    "What can I do for you today?",
    "Do you need help with something specific?",
  ];

  constructor(private openaiService: OpenaiService) {}

  async onSubmit() {
    if (this.prompt.trim().length === 0) {
      return;
    }

    try {
      this.response = await this.openaiService.getCompletion(this.prompt);
      this.errorMessage = '';
    } catch (error) {
      console.error('Error during OpenAI API call:', error);
      this.errorMessage = 'Error fetching response from AI.';
      this.response = '';
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
      }
    else {
      this.suggestions = [
        "How can I assist you?",
        "How may I help you?",
        "What can I do for you today?",
        "Do you need help with something specific?"
      ];
    }
  }

  onSelectSuggestion(suggestion: string) {
    this.prompt = suggestion;
    this.suggestions = [];
  }

  onSend() {
    this.onSubmit();
  }

  startVoiceRecognition() {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new (window as any).webkitSpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;


      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        this.prompt = transcript;
        this.onSubmit();
      };

      recognition.onerror = (event: any) => {
        console.error('Voice recognition error', event);
        this.errorMessage = 'Voice recognition error. Please try again.';
      };
      recognition.start();
      
    } else {
      this.errorMessage = 'Voice recognition is not supported in this browser. Please use a different browser.';
    }
  }
}
