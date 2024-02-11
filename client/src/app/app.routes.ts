import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { EclipseComponent } from './components/eclipse/eclipse.component';
import { DreadborneComponent } from './components/dreadborne/dreadborne.component';
import { CareerComponent } from './components/career/career.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'eclipse', component: EclipseComponent },
  { path: 'dreadborne', component: DreadborneComponent },
  { path: 'career', component: CareerComponent },
  { path: 'about', component: AboutComponent },

//   { path: 'account/:id', component: MainViewComponent },
//   { path: 'login', component: LoginComponent },
//   { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes), 
  ],
  exports: [
    RouterModule,
  ]
})

export class AppRoutingModule { }




// import { RouterModule, Routes } from '@angular/router';
// import { NgModule } from '@angular/core';


// export const routes: Routes = [
//     { path: '', redirectTo: '/home', pathMatch: 'full' },
//     // { path: 'account/:id', component: MainViewComponent },
//     // { path: 'login', component: LoginComponent },
//   ];
  
//   @NgModule({
//     imports: [
//       RouterModule.forRoot(routes), 
//     ],
//     exports: [
//       RouterModule,
//     ]
//   })
  
//   export class AppRoutingModule { }
// ];
