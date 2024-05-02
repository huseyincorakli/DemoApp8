import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routes } from './routes';
import { AppComponent } from './app.component';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { ContactModule } from './pages/contact/contact.module';
import { HomeModule } from './pages/home/home.module';
import { AboutModule } from './pages/about/about.module';
import { CustomPreloadStrategy } from './strategies/custom.strategy';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ContactModule,
    HomeModule,
    AboutModule,

    RouterModule.forRoot(routes,{preloadingStrategy:CustomPreloadStrategy})
  ],
  providers: [CustomPreloadStrategy],
  bootstrap: [AppComponent]
})
export class AppModule { }
