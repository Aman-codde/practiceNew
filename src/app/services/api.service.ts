import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = "https://api.disneyapi.dev/"

  constructor(
    private http: HttpClient
  ) { }

  get<T>() {
    return this.http.get(this.baseUrl);
  }
}
