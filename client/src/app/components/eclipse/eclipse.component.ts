import { Component } from '@angular/core';
import { DisappearComponent } from '../disappear/disappear.component';
import { EclipseMainComponent } from './eclipse-main/eclipse-main.component';
import { EclipseGameplayComponent } from './eclipse-gameplay/eclipse-gameplay.component';
import { EclipseWeaponsComponent } from './eclipse-weapons/eclipse-weapons.component';
import { EclipseWorldComponent } from './eclipse-world/eclipse-world.component';
import { MediaComponent } from '../media/media.component';

@Component({
  selector: 'app-eclipse',
  standalone: true,
  imports: [
    DisappearComponent,
    EclipseMainComponent, 
    EclipseGameplayComponent, 
    EclipseWeaponsComponent, 
    EclipseWeaponsComponent, 
    EclipseWorldComponent, 
    MediaComponent
  ],
  templateUrl: './eclipse.component.html',
  styleUrl: './eclipse.component.css'
})
export class EclipseComponent {

}
