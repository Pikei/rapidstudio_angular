import { Component } from '@angular/core';
import { DisappearComponent } from '../disappear/disappear.component';
import { DreadborneMainComponent } from './dreadborne-main/dreadborne-main.component';
import { DreadborneGameComponent } from './dreadborne-game/dreadborne-game.component';
import { DreadbornePlotComponent } from './dreadborne-plot/dreadborne-plot.component';
import { DreadborneClassesComponent } from './dreadborne-classes/dreadborne-classes.component';
import { DreadborneWorldComponent } from './dreadborne-world/dreadborne-world.component';
import { DreadborneGameplayComponent } from './dreadborne-gameplay/dreadborne-gameplay.component';
import { MediaComponent } from '../media/media.component';

@Component({
  selector: 'app-dreadborne',
  standalone: true,
  imports: [
    DisappearComponent,
    DreadborneMainComponent, 
    DreadborneGameComponent, 
    DreadbornePlotComponent, 
    DreadborneClassesComponent, 
    DreadborneWorldComponent,
    DreadborneGameplayComponent,
    MediaComponent
  ],
  templateUrl: './dreadborne.component.html',
  styleUrl: './dreadborne.component.css'
})
export class DreadborneComponent {

}
