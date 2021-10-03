import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  constructor( private http: HttpClient) { }

  getPosts() {
  	return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
}
