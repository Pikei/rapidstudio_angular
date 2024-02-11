import { Component, OnInit } from '@angular/core';
import { MenuBlackComponent } from '../../menu/menu-black/menu-black.component';

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [MenuBlackComponent],
  templateUrl: './newsletter.component.html',
  styleUrl: './newsletter.component.css'
})
export class NewsletterComponent implements OnInit{
  ngOnInit(): void {
    const news = document.querySelector("#newsletterBtn");
    if (!news) return;
    news.addEventListener("click", () => {this.newsletterJoin()});
  }

  newsletterJoin():void {
    const firstName = <HTMLInputElement>document.querySelector("#firstName");
    const lastName = <HTMLInputElement>document.querySelector("#lastName");
    const email = <HTMLInputElement>document.querySelector("#email");
    const chk = <HTMLInputElement>document.querySelector("#rodo");
    // console.log(firstName?.value);
    // console.log(lastName?.value);
    // console.log(email?.value);

    if (!chk?.checked || !firstName?.value || !lastName?.value || !email?.value) {
      alert("Pola nie mogą być puste!");
      return;
    } else {
      const data: string[] = [firstName?.value, lastName?.value, email?.value];
      // console.log(data);
      this.sendData(data);
      alert("Dodaliśmy cię do naszej bazy danych. Do usłyszenia w krótce!");
    }
  }

  async sendData(formValue: any[]) {
    const dataToSend = {
      firstName: formValue[0],
      lastName: formValue[1],
      email: formValue[2]
    }
    console.log(dataToSend)
    const response = await fetch('http://localhost:3001/postNewsData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(dataToSend),
    });
    let data = await response.json();
    // console.log(data);
  }
}
