import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AboutDialogComponent} from "../../dialog/about-dialog/about-dialog.component";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  year: Date;
  site = 'https://www.creative-tim.com/';
  nure = 'https://nure.ua/';
  blog = 'https://dou.ua/';

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.year = new Date();
  }

  openAboutDialog() {
    this.dialog.open(AboutDialogComponent,
      {
        autoFocus: false,
        data: {
          dialogTitle: 'About us',
          message: 'We are NURE students from Kharkiv.<br>Our specialty is computer engineering.<br><br>' +
            'This application was created to learn Angular, Spring Boot and Keycloak technologies.'
        },
        width: '400px'
      });
  }
}
