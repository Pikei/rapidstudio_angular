import { Component, OnInit } from '@angular/core';
import { MenuWhiteComponent } from '../menu/menu-white/menu-white.component';

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [MenuWhiteComponent],
  templateUrl: './media.component.html',
  styleUrl: './media.component.css'
})
export class MediaComponent implements OnInit{
  ngOnInit(): void {
    this.getLinks();
    this.getLocations();
  }

  async getLinks() {
    const response = await fetch('http://localhost:3001/getMedia', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    });
    let data = await response.json();
    // console.log(data);
    this.printMedia(data);
  }

  async getLocations() {
    const response = await fetch('http://localhost:3001/getLocations', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    });
    let data = await response.json();
    // console.log(data);
    this.printLocations(data);
  }

  printMedia(data: []) {
    const links: HTMLElement | null = document.querySelector("#media .content #left");
    if (!links) {return;}
    for (let i in data) {
      const newObject: any = data[i];
      links.innerHTML += `<p><a href = "${newObject.link}" target = "_blank">${newObject.nazwa}</a></p>`;
    }
    links.innerHTML += '<br><p><a href = "mailto: rapidstudio@contact.com">rapidstudio@contact.com</a></p>';
  }

  printLocations(data: []) {
    const locations: HTMLElement | null = document.querySelector("#media .content #right");
    if (!locations) {return;}
    for (let i in data) {
      const newObject: any = data[i];
      locations.innerHTML += `<p>${newObject.miasto}<br>${newObject.adres}<br>${newObject.kodPocztowy} ${newObject.miasto}</p>`;
    }
  }
}
