import { Routes } from "@angular/router"


export const routes:Routes =  [
   {path:'',loadChildren:()=>import('./pages/home/home.module').then(m=>m.HomeModule),data:{preload:true}},
   {path:'about',loadChildren:()=>import('./pages/about/about.module').then(m=>m.AboutModule),data:{preload:false}},
   {path:'contact',loadChildren:()=>import('./pages/contact/contact.module').then(m=>m.ContactModule),data:{preload:true}},
]