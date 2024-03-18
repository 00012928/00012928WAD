import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Contacts } from './Contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactManagerService {
  httpClient = inject(HttpClient)
  constructor() { }

  getAll(){return this.httpClient.get<Contacts[]>("https://localhost:7223/api/Contacts/GetContacts")}

  getById(id:number){return this.httpClient.get<Contacts>("https://localhost:7223/api/Contacts/GetContact/"+id)}

  edit(id:number, item:Contacts){return this.httpClient.put("https://localhost:7223/api/Contacts/PutContact/"+id, item)}

  delete(id:number){return this.httpClient.delete("https://localhost:7223/api/Contacts/DeleteContact/"+id)}

  create(item:Contacts){return this.httpClient.post("https://localhost:7223/api/Contacts/PostContact", item)}

  getAllCategories(){return this.httpClient.get<Contacts[]>("https://localhost:7223/api/Categories/GetCategories")}
}
