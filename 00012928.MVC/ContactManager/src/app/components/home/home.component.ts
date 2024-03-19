import { Component, inject } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Contacts } from '../../Contacts';
import { MatButtonModule } from '@angular/material/button';
import { ContactManagerService } from '../../contact-manager.service';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  router = inject(Router)
  contactService = inject(ContactManagerService)
  itemsList: MatTableDataSource<Contacts>;
  displayedColumns: string[] = ['ID', 'Name', 'Phone Number', 'Category', 'Actions'];

  constructor() {
    this.itemsList = new MatTableDataSource<Contacts>();
  }

  ngOnInit() {
    this.loadItems();
  }

  loadItems() {
    this.contactService.getAll().subscribe((result) => {
      this.itemsList.data = result;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.itemsList.filter = filterValue.trim().toLowerCase();
  }

  e(id: number) {
    this.router.navigateByUrl("edit/" + id)
  }
  dt(id: number) {
    this.router.navigateByUrl("details/" + id)
  }
  dl(id: number) {
    console.log("delete", id);
    this.router.navigateByUrl("delete/" + id)
  }
}