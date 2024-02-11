import { Component } from '@angular/core';
import { DisappearComponent } from '../disappear/disappear.component';
import { RapidGamesComponent } from './rapid-games/rapid-games.component';
import { RapidTeamComponent } from './rapid-team/rapid-team.component';
import { MediaComponent } from '../media/media.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [DisappearComponent, RapidGamesComponent, RapidTeamComponent, MediaComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
}
