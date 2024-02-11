import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disappear',
  standalone: true,
  imports: [],
  template: `
    <div id="disappearingLogo">
      <img id="disappearingLogoIMG" [src]="blackLogo" alt="Logo" />
    </div>
  `,
  styleUrl: './disappear.component.css'
})
export class DisappearComponent implements OnInit{
  blackLogo: string = '../../../assets/images/rapid/logo rapid czarne.png';

  ngOnInit(): void {
    this.disappear();
  }

  disappear(): void {
    const section = document.querySelector("#disappearingLogo");
    if (section == null) {return;}
    section.scrollIntoView({ behavior: 'smooth' });

    const main = document.querySelector(".page");
    if (main == null) {return;}
    const logo = document.querySelector("#disappearingLogoIMG");
    if (logo == null) {return;}


    logo.addEventListener("animationend", () => {
      main.scrollIntoView({ behavior: 'smooth' });
    });
  }
}
