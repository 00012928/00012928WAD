import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { ContactManagerService } from '../../contact-manager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatButtonModule, MatChipsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})

export class CreateComponent {
  contactService = inject(ContactManagerService);
  router = inject(Router);
  cate : any;
  cId: number = 0
  createContact: any = {
    name: "",
    phoneNumber: 0,
    categoryId: 0
  }

  ngOnInit(){
    this.contactService.getAllCategories().subscribe((result)=>{
      this.cate = result
    })
  }

  create(){
    this.createContact.categoryId=this.cId
    this.contactService.create(this.createContact).subscribe(result => {
      alert("Contact Saved")
      this.router.navigateByUrl("home")
    })
  }
}
