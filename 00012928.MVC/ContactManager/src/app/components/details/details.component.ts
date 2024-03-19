import { Component, inject } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { Contacts } from '../../Contacts';
import { ContactManagerService } from '../../contact-manager.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [MatChipsModule, MatCardModule, MatButtonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})

export class DetailsComponent {
  router = inject(Router)
  detailsContact:Contacts={
    id:0,
    name:"",
    phoneNumber:0,
    categoryId:0,
    category:{
      id:0,
      name:""
    }
  }

  serviceContact = inject(ContactManagerService)
  activatedRoute = inject(ActivatedRoute)
  ngOnInit(){
    this.serviceContact.getById(this.activatedRoute.snapshot.params["id"]).subscribe((resultedItem)=>{
      this.detailsContact=resultedItem
    })
  }

  editClicked(){
    this.router.navigateByUrl("edit/"+this.detailsContact.id);
  }

  toHome(){
    this.router.navigateByUrl("home");
  }

  deleteClicked(){
    this.router.navigateByUrl("delete/"+this.detailsContact.id);
  }
}
