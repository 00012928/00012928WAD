import { Component, inject } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { Contacts } from '../../Contacts';
import { ContactManagerService } from '../../contact-manager.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [MatChipsModule, MatCardModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
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
}
