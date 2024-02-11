import { Component } from '@angular/core';
import { DisappearComponent } from '../disappear/disappear.component';
import { JobsComponent } from './jobs/jobs.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { MediaComponent } from '../media/media.component';

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [DisappearComponent, JobsComponent, NewsletterComponent, MediaComponent],
  templateUrl: './career.component.html',
  styleUrl: './career.component.css'
})
export class CareerComponent {

}