import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footerComponent',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footer = {
    logo: "bootstrap",
    date: new Date,
    companyName: "TeachCareer",
    tLogo: "twitter",
    iLogo: "instagram",
    fLogo: "facebook",
  }
  constructor() { }

  ngOnInit(): void {
  }

}
