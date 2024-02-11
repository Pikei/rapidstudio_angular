import { Component, OnInit } from '@angular/core';
import { MenuBlackComponent } from '../../menu/menu-black/menu-black.component';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [MenuBlackComponent],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})
export class JobsComponent implements OnInit{

  ngOnInit(): void {
    this.scroll();
    this.generateJobs();
  }

  scroll() : void {
    const newscroll = document.querySelector("#newsletterScroll");
    if (!newscroll) return;
    const screen = document.querySelector("#newsletter");
    if (!screen) return;
    newscroll.addEventListener("click", () => {
        screen.scrollIntoView({behavior: 'smooth'});
    });
  }

  async generateJobs() {
    const response = await fetch('http://localhost:3001/getJobs', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    });
    let data = await response.json();
    // console.log(data);
    this.createTable(data)

  }

  createTable(data: []) : void {
    const offers: HTMLElement | null = document.getElementById('jobOffers');
    if (!offers) return
    for (let i in data) {
      const newObject: any = data[i];
      const newRow = document.createElement('tr');
      const newCell = document.createElement('td');
      const newLink = document.createElement('a');
  
      newLink.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
      newLink.target = '_blank';
      newLink.innerText = `${newObject.poziom} ${newObject.nazwa} | ${newObject.lokalizacja}`;
  
      newCell.appendChild(newLink);
      newRow.appendChild(newCell);
      
      offers.appendChild(newRow);
    }
    // for (let i in data) {
    //   const newObject: any = data[i];
    //   offers.innerHTML += `<tr><td class="job"><a href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ" target = "_blank">
    //   ${newObject.poziom} ${newObject.nazwa} | ${newObject.lokalizacja}</a></td></tr>`;
    // }
  }
}
