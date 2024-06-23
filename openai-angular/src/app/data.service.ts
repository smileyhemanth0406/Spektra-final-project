import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://localhost:7111/api/Values/usersRegisteredPerDay';

  constructor(private http: HttpClient) { }

  getUsersRegisteredPerDay(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
