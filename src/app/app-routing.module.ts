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
  },  {
    path: 'service-list',
    loadChildren: () => import('./service-list/service-list.module').then( m => m.ServiceListPageModule)
  },
  {
    path: 'create-service-request',
    loadChildren: () => import('./create-service-request/create-service-request.module').then( m => m.CreateServiceRequestPageModule)
  },
  {
    path: 'users-list',
    loadChildren: () => import('./users-list/users-list.module').then( m => m.UsersListPageModule)
  },
  {
    path: 'user-profile',
    loadChildren: () => import('./user-profile/user-profile.module').then( m => m.UserProfilePageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
