import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  url="https://localhost:3000/student";
  
  constructor(private http:HttpClient) { }
  getAllStudent(){
  return this.http.get(this.url);
}
}
