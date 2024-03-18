import { Component, inject } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { Contacts } from '../../Contacts';
import {MatButtonModule} from '@angular/material/button';
import { ContactManagerService } from '../../contact-manager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTableModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  router = inject(Router)
  contactService = inject(ContactManagerService)
  itemsList:Contacts[]=[]
  ngOnInit(){
    this.contactService.getAll().subscribe((result)=>{
      this.itemsList=result
    })
  }
  displayedColumns: string[] = ['ID', 'Name', 'Phone Number', 'Category', 'Actions'];
  e(id:number){
    console.log("edit", id);
    this.router.navigateByUrl("edit/"+id)
  }
  dt(id:number){
    console.log("details", id);
    this.router.navigateByUrl("details/"+id)
  }
  dl(id:number){
    console.log("delete", id);
    this.router.navigateByUrl("delete/"+id)
  }
}
