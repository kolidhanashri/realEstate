import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login-page/login-page.module').then(m=> m.LoginPagePageModule)
  },
  {
    path: 'items',
    loadChildren: () => import('./list/list.module').then(m=> m.ListPageModule)
  },
  {
    path: 'properties',
    loadChildren: () => import('./properties-list/properties-list.module').then(m=> m.PropertiesListPageModule)
  },
  {
    path: 'create-property',
    loadChildren: () => import('./create-property/create-property.module').then(m=> m.CreatePropertyPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login-page',
    loadChildren: () => import('./login-page/login-page.module').then( m => m.LoginPagePageModule)
  },
  {
    path: 'create-property',
    loadChildren: () => import('./create-property/create-property.module').then( m => m.CreatePropertyPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
