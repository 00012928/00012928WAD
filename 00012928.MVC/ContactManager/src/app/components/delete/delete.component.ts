import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactManagerService } from '../../contact-manager.service';
import { MatButtonModule } from '@angular/material/button';
import { Contacts } from '../../Contacts';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})

export class DeleteComponent implements OnInit {
  contactService = inject(ContactManagerService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);

  showContact: Contacts = {
    id: 0,
    name: '',
    phoneNumber: 0,
    categoryId: 0,
    category: {
      id: 0,
      name: ''
    }
  };

  constructor() { }

  ngOnInit(){
    this.contactService.getById(this.activatedRoute.snapshot.params["id"]).subscribe((result)=>{
      this.showContact = result
    })
  };

  deleteContact() {
    this.contactService.delete(this.showContact.id).subscribe(result => {
      alert("Contact deleted successfully");
      this.router.navigateByUrl("home");
    })
  }

  cancel() {
    this.router.navigateByUrl("home");
  }
}

