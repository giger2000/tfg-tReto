import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// import { NormaComponent } from './components/norma/norma.component';
import { NormasComponent } from './components/normas/normas.component';
import { RetoComponent } from './components/reto/reto.component';

// Servicios

import { AuthService } from './services/auth.service';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    canActivate: [AuthService]
  },

  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'activities',
    loadChildren: () => import('./pages/activities/activities.module').then( m => m.ActivitiesPageModule),
    canActivate: [AuthService]
  },
  {
    path: 'retos-firebase',
    loadChildren: () => import('./pages/retos-firebase/retos-firebase.module').then( m => m.RetosFirebasePageModule),
    canActivate: [AuthService]
  },
  {
    path : 'normas', component: NormasComponent,
    canActivate: [AuthService]
  },
  {
    path : 'reto', component: RetoComponent,
    canActivate: [AuthService]
  },
  // {
  //   path: 'tabs',
  //   loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule),
  //    canActivate: [AuthService]
  // },
  // {
  //   path: 'feed',
  //   loadChildren: () => import('./feed/feed.module').then( m => m.FeedPageModule),
  //   canActivate: [AuthService]
  // },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule),
    canActivate: [AuthService]
  }
  // {
  //   path: 'uploader',
  //   loadChildren: () => import('./uploader/uploader.module').then( m => m.UploaderPageModule)
  // }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
