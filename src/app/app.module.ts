import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FramePageComponent } from './pages/site/master/frame.page';
import { HomePageComponent } from './pages/site/home-page/home-page.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SlideComponent } from './components/shared/slide/slide.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    FramePageComponent,
    SlideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
