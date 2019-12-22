import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// import { NormaComponent } from './components/norma/norma.component';
import { NormasComponent } from './components/normas/normas.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
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
    path: 'retos',
    loadChildren: () => import('./pages/retos/retos.module').then( m => m.RetosPageModule)
  },
  {
    path: 'activities',
    loadChildren: () => import('./pages/activities/activities.module').then( m => m.ActivitiesPageModule)
  },
  {
    path: 'retos-firebase',
    loadChildren: () => import('./pages/retos-firebase/retos-firebase.module').then( m => m.RetosFirebasePageModule)
  },
  // {
  //   path: 'normas',
  //   loadChildren: () => import('./pages/normas/normas.module').then( m => m.NormasPageModule)
  // },
  // {
  //   path: 'norma/:id',
  //   loadChildren: () => import('./components/norma/norma.component').then( m => m.NormaPageModule)
  // },
  // { path : 'norma/:id', component: NormaComponent},
  {path : 'normas', component: NormasComponent}


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
