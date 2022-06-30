import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class DisneyService {

  constructor(
    private api: ApiService
  ) { }

  getCharacters() {
    return this.api.get();
  }
}
