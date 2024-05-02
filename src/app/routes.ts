import { Routes } from "@angular/router"


export const routes:Routes =  [
   {path:'',loadChildren:()=>import('./pages/home/home.module').then(m=>m.HomeModule)},
   {path:'about',loadChildren:()=>import('./pages/about/about.module').then(m=>m.AboutModule)},
   {path:'contact',loadChildren:()=>import('./pages/contact/contact.module').then(m=>m.ContactModule)},
]