import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ContactManagerService } from '../../contact-manager.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Contacts } from '../../Contacts';

function findIndexByID(jsonArray: any[], indexToFInd:number):number{
  return jsonArray.findIndex((item)=>item.id === indexToFInd);
}

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatButtonModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit{
  contactService = inject(ContactManagerService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  editContact: Contacts = {
    id: 0,
    name: '',
    phoneNumber: 0,
    categoryId: 0,
    category: {
      id: 0,
      name: ''
    }
  };
  
  categoryObject:any;
  selected:any
  cId:number=0;
  ngOnInit(){
    this.contactService.getById(this.activatedRoute.snapshot.params["id"]).subscribe(result=>{
      this.editContact = result;
      this.selected = this.editContact.categoryId;
    })
    this.contactService.getAllCategories().subscribe((result)=>{
      this.categoryObject = result;
    })
  }
  toHome(){
    this.router.navigateByUrl("home");
  }
  edit(){
    this.editContact.categoryId = this.cId;
    this.editContact.category = this.categoryObject[findIndexByID(this.categoryObject, this.cId)];
    this.contactService.edit(this.editContact.id, this.editContact).subscribe(result=>{
      alert("Changes applied")
      this.router.navigateByUrl("home");
    })
  }
}
