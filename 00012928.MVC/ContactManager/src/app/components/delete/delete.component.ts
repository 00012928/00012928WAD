import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactManagerService } from '../../contact-manager.service';
import { MatButtonModule } from '@angular/material/button';

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
  contactId: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.contactId = this.activatedRoute.snapshot.params["id"];
  }

  deleteContact() {
    this.contactService.delete(this.contactId).subscribe(result => {
      alert("Contact deleted successfully");
      this.router.navigateByUrl("home");
    })
  }

  cancel() {
    this.router.navigateByUrl("home");
  }
}

