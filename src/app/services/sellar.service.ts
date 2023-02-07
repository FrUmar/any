import { rejister, login } from './../data-type';
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SellarService {

  constructor(private http:HttpClient) { 
   
  }
  userregister(data:rejister)
  {
  return this.http.post('http://localhost:3000/salar',data)
  }
  
}
