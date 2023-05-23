import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private backendUrl="http://localhost:8282"

  constructor(private httpClient:HttpClient) { }

  createContact(contact:Contact):Observable<string>{
    return this.httpClient.post(`${this.backendUrl}/contact`,contact,{responseType:"text"});
  }

  getContact():Observable<Contact[]>{
     return this.httpClient.get<Contact[]>(`${this.backendUrl}/contacts`)
  }

  findContactById(id:number):Observable<Contact>{
     return this.httpClient.get<Contact>(`${this.backendUrl}/contact/${id}`)
  }

  deleteContactById(id:number):Observable<string>{
    return this.httpClient.delete(`${this.backendUrl}/contact/${id}`,{responseType:"text"})
 }
}
