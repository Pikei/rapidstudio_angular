import { Component } from '@angular/core';
import { DisappearComponent } from '../disappear/disappear.component';
import { EclipseScreenComponent } from './eclipse-screen/eclipse-screen.component';
import { DreadborneScreenComponent } from './dreadborne-screen/dreadborne-screen.component';
import { TeamScreenComponent } from './team-screen/team-screen.component';
import { MediaComponent } from '../media/media.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    EclipseScreenComponent, 
    DreadborneScreenComponent, 
    TeamScreenComponent, 
    MediaComponent,
    DisappearComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
